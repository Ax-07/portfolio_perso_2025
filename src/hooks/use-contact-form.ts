"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Control, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { contactSchema } from "@/lib/validations";

type ContactFormData = z.infer<typeof contactSchema>;

export interface UseContactFormReturn {
  register: UseFormRegister<ContactFormData>;
  control: Control<ContactFormData>;
  handleSubmit: ReturnType<typeof useForm<ContactFormData>>["handleSubmit"];
  onSubmit: (values: ContactFormData) => Promise<void>;
  errors: Partial<Record<keyof ContactFormData, { message?: string }>>;
  isValid: boolean;
  isSubmitting: boolean;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
}

export function useContactForm(): UseContactFormReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur lors de l'envoi");
      }

      await response.json();

      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      toast.success("Message envoyé !", { description: "Je vous répondrai dans les meilleurs délais." });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Erreur lors de l'envoi", {
        description: error instanceof Error ? error.message : "Une erreur est survenue. Veuillez réessayer.",
      });
    }
  };

  return {
    register,
    control,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
    isSubmitting,
    isSubmitted,
    setIsSubmitted,
  };
}
