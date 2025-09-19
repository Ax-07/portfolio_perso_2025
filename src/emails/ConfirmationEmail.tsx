import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Tailwind,
} from "@react-email/components";

export type ConfirmationEmailProps = {
  name: string;
};

/**
 * React Email template for: ✅ Message reçu - Confirmation
 * - Tailwind-enabled via <Tailwind/>
 */
export default function ConfirmationEmail({ name }: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Merci pour votre message !</Preview>
      <Tailwind>
        <Body className="m-0 p-0 bg-gray-100 text-gray-800">
          <Container className="max-w-[600px] mx-auto p-6">
            <Section className="bg-white rounded-lg shadow p-6">
              <Heading as="h2" className="text-xl font-semibold text-sky-500 mb-4">
                Merci pour votre message !
              </Heading>
              <Text>Bonjour {name},</Text>
              <Text>
                J'ai bien reçu votre message et je vous remercie pour votre intérêt.
              </Text>
              <Text>
                Je vais l'examiner attentivement et vous répondrai dans les plus brefs délais, généralement sous 24h.
              </Text>
              <Text>À bientôt !</Text>
              <Text className="text-sky-500 font-semibold">
                Xavier Affringue<br />
                Développeur Full Stack
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
