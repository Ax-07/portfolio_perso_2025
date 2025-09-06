import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Schema de validation
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

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

export async function POST(request: NextRequest) {
  try {
    // Validation des données
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

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

    // Template HTML pour l'email
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau message de contact</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #10b981, #065f46); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: 600; color: #10b981; margin-bottom: 5px; }
            .field-value { background-color: #f8fafc; padding: 12px; border-radius: 6px; border-left: 4px solid #10b981; }
            .message-box { background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 20px 0; }
            .footer { background-color: #f8fafc; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
            .badge { display: inline-block; background-color: #10b981; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Nouveau message de contact</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Portfolio Xavier Affringue</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Nom complet</div>
                <div class="field-value">${validatedData.name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value">${validatedData.email}</div>
              </div>
              
              ${validatedData.company ? `
                <div class="field">
                  <div class="field-label">🏢 Entreprise</div>
                  <div class="field-value">${validatedData.company}</div>
                </div>
              ` : ''}
              
              ${validatedData.budget ? `
                <div class="field">
                  <div class="field-label">💰 Budget</div>
                  <div class="field-value"><span class="badge">${validatedData.budget}</span></div>
                </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">💬 Message</div>
                <div class="message-box">
                  ${validatedData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p>Ce message a été envoyé depuis le formulaire de contact du portfolio de Xavier Affringue.</p>
              <p>Répondez directement à ce message pour contacter ${validatedData.name}.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Template texte pour les clients email qui ne supportent pas HTML
    const textTemplate = `
NOUVEAU MESSAGE DE CONTACT - Portfolio Xavier Affringue

Nom: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.company ? `Entreprise: ${validatedData.company}` : ''}
${validatedData.budget ? `Budget: ${validatedData.budget}` : ''}

Message:
${validatedData.message}

---
Ce message a été envoyé depuis le formulaire de contact du portfolio.
Répondez directement à ce message pour contacter ${validatedData.name}.
    `;

    // Configuration du message
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: validatedData.email,
      subject: `💼 Nouveau contact: ${validatedData.name}${validatedData.company ? ` (${validatedData.company})` : ''}`,
      text: textTemplate,
      html: htmlTemplate,
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
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #10b981;">Merci pour votre message !</h2>
            <p>Bonjour ${validatedData.name},</p>
            <p>J'ai bien reçu votre message et je vous remercie pour votre intérêt.</p>
            <p>Je vais l'examiner attentivement et vous répondrai dans les plus brefs délais, généralement sous 24h.</p>
            <p>À bientôt !</p>
            <p style="color: #10b981; font-weight: 600;">Xavier Affringue<br>Développeur Full Stack</p>
          </div>
        `,
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
