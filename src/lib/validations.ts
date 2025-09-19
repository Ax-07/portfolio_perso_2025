import { CONTACT_CONTENT } from "@/constants";
import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: CONTACT_CONTENT.form.fields.name.errorMessage,
  }),
  email: z.email({
    message: CONTACT_CONTENT.form.fields.email.errorMessage,
  }),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, {
    message: CONTACT_CONTENT.form.fields.message.errorMessage,
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
