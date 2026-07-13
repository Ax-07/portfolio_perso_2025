import { contactSchema } from '@/lib/validations';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { render, toPlainText  } from '@react-email/render';
import ContactEmail from '@/emails/ContactEmail';
import ConfirmationEmail from '@/emails/ConfirmationEmail';

// ──────────────────────────────────────────────
// Rate limiting en mémoire par IP
// Max 3 requêtes par fenêtre de 60 secondes
// ──────────────────────────────────────────────
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 60 secondes

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now >= entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true, retryAfter: 0 };
}

// Configuration du transporteur email
const createTransporter = () => {
  // Pour Gmail/Google Workspace
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password pour Gmail
      },
    });
  }
  
  // Pour un serveur SMTP personnalisé
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Mapping des valeurs budget vers les labels
const budgetLabels: Record<string, string> = {
  "<5k": "< 5 000€",
  "5k-10k": "5 000€ - 10 000€", 
  "10k-25k": "10 000€ - 25 000€",
  "25k-50k": "25 000€ - 50 000€",
  "50k+": "50 000€+",
  "discuss": "À discuter"
};

export async function POST(request: NextRequest) {
  // ── Rate limiting ──────────────────────────
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: `Trop de requêtes. Réessayez dans ${retryAfter} secondes.` },
      {
        status: 429,
        headers: { 'Retry-After': String(retryAfter) },
      }
    );
  }

  try {
    // Validation des données
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Honeypot anti-spam : si le champ est rempli, c'est un bot — rejet silencieux
    if (validatedData.honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Conversion de la valeur budget en label lisible
    const budgetLabel = validatedData.budget ? budgetLabels[validatedData.budget] || validatedData.budget : null;

    // Vérification des variables d'environnement
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Variables d\'environnement manquantes');
      return NextResponse.json(
        { error: 'Configuration email manquante' },
        { status: 500 }
      );
    }

    // Création du transporteur
    const transporter = createTransporter();

    // Configuration du message
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: validatedData.email,
      subject: `💼 Nouveau contact: ${validatedData.name}${validatedData.company ? ` (${validatedData.company})` : ''}`,
      text: toPlainText(await render(ContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || undefined,
        message: validatedData.message,
        budgetLabel: budgetLabel || undefined,
      }))),
      html: await render(ContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || undefined,
        message: validatedData.message,
        budgetLabel: budgetLabel || undefined,
      })),
    };

    // Envoi de l'email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email envoyé:', info.messageId);

    // Email de confirmation à l'expéditeur (optionnel)
    if (process.env.SEND_CONFIRMATION === 'true') {
      const confirmationOptions = {
        from: `"Xavier Affringue" <${process.env.EMAIL_USER}>`,
        to: validatedData.email,
        subject: '✅ Message reçu - Je vous réponds bientôt !',
        html: await render(ConfirmationEmail({ name: validatedData.name })),
      };
      
      await transporter.sendMail(confirmationOptions);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    // Erreur de validation Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Données invalides', 
          details: error.issues 
        },
        { status: 400 }
      );
    }
    
    // Autres erreurs
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}

// Méthode OPTIONS pour CORS (si nécessaire)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
