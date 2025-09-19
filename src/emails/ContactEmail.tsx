import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  pixelBasedPreset,
} from "@react-email/components";
import { ContactFormData } from "@/lib/validations";

interface ContactEmailProps extends ContactFormData {
  budgetLabel?: string | null; // Label lisible pour le budget
}

const ContactEmail = ({ name, email, company, message, budgetLabel }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message de contact — {name}</Preview>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="m-0 p-0 bg-gray-100 text-gray-800">
          <Container className="max-w-[600px] mx-auto bg-white rounded-lg overflow-hidden shadow">
            {/* Header */}
            <Section
              className="text-white text-center"
              style={{
                backgroundImage: "linear-gradient(135deg, #10b981, #065f46)",
                backgroundColor: "#10b981", // fallback for clients without gradients
              }}
            >
              <Heading as="h1" className="m-0 text-2xl font-semibold py-6">
                📧 Nouveau message de contact
              </Heading>
              <Text className="m-0 opacity-90 pb-6">Portfolio Xavier Affringue</Text>
            </Section>

            {/* Content */}
            <Section className="p-6">
              {/* Nom complet */}
              <div className="mb-5">
                <div className="font-semibold text-emerald-600 mb-1">👤 Nom complet</div>
                <div className="bg-slate-50 p-3 rounded-md border-l-4 border-emerald-500">{name}</div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <div className="font-semibold text-emerald-600 mb-1">📧 Email</div>
                <div className="bg-slate-50 p-3 rounded-md border-l-4 border-emerald-500">{email}</div>
              </div>

              {/* Entreprise (optionnel) */}
              {company ? (
                <div className="mb-5">
                  <div className="font-semibold text-emerald-600 mb-1">🏢 Entreprise</div>
                  <div className="bg-slate-50 p-3 rounded-md border-l-4 border-emerald-500">{company}</div>
                </div>
              ) : null}

              {/* Budget (optionnel) */}
              {budgetLabel ? (
                <div className="mb-5">
                  <div className="font-semibold text-emerald-600 mb-1">💰 Budget</div>
                  <div className="bg-slate-50 p-3 rounded-md border-l-4 border-emerald-500">
                    <span className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {budgetLabel}
                    </span>
                  </div>
                </div>
              ) : null}

              {/* Message */}
              <div className="mb-5">
                <div className="font-semibold text-emerald-600 mb-1">💬 Message</div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                  {/* Preserve newlines with whitespace-pre-line */}
                  <Text className="m-0 whitespace-pre-line">{message}</Text>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <Section className="bg-slate-50 text-center text-gray-500 text-sm p-5">
              <Text className="m-0">
                Ce message a été envoyé depuis le formulaire de contact du portfolio de Xavier Affringue.
              </Text>
              <Text className="m-0">Répondez directement à ce message pour contacter {name}.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
