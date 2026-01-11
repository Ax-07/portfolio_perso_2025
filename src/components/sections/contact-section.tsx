"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Clock, CheckCircle } from "lucide-react";
import { CONTACT_CONTENT } from "@/constants";
import Link from "next/link";
import { contactSchema } from "@/lib/validations";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  // Surveiller les valeurs du formulaire pour désactiver/activer le bouton
  const watchedValues = form.watch();
  const isFormValid = React.useMemo(() => {
    return (
      watchedValues.name?.trim().length >= 2 &&
      watchedValues.email?.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(watchedValues.email) &&
      watchedValues.message?.trim().length >= 10
    );
  }, [watchedValues.name, watchedValues.email, watchedValues.message]);

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
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

      const result = await response.json();
      console.log("Message envoyé avec succès:", result);

      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();

      // Reset success state après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setIsSubmitting(false);

      // Vous pouvez ajouter une gestion d'erreur ici
      // Par exemple, afficher un toast d'erreur
      alert(error instanceof Error ? error.message : "Erreur lors de l'envoi du message");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      {/* <div className="absolute inset-0 corporate-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" /> */}

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="space-y-16">
          {/* En-tête de section */}
          <div className="text-center space-y-4">
            <Badge
              variant="outline"
              className="border-primary-500/50 text-primary-600 bg-primary-50 dark:bg-primary-950/50 text-xs sm:text-sm px-2 sm:px-3 py-1"
            >
              {CONTACT_CONTENT.badge}
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {CONTACT_CONTENT.title}
              <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                {" "}
                {CONTACT_CONTENT.titleHighlight}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              {CONTACT_CONTENT.description_1}
              <br />
              {CONTACT_CONTENT.description_2}
            </p>
          </div>

          <div className="space-y-12">
            {/* Formulaire de contact moderne */}
            <div className="max-w-4xl mx-auto">
              <Card className="py-0 glass-card border-primary-200/50 dark:border-primary-800/50 overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  {/* Sidebar informatif */}
                  <div className="bg-linear-to-br from-primary-500/5 to-primary-600/5 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-base sm:text-lg font-bold">{CONTACT_CONTENT.infos.title}</h3>
                      <div className="space-y-2 sm:space-y-3">
                        {CONTACT_CONTENT.infos.items.map((info) => {
                          const IconComponent = info.icon;
                          return (
                            <div key={info.name} className="flex items-start space-x-3">
                              <IconComponent className="h-4 w-4 text-primary-600 mt-0.5 shrink-0" />
                              <div>
                                <p className="text-xs sm:text-sm font-medium">{info.name}</p>
                                <p className="text-xs text-muted-foreground">{info.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Réseaux sociaux compacts */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-medium text-xs sm:text-sm">Suivez-moi</h4>
                      <div className="flex space-x-2">
                        {CONTACT_CONTENT.social.map((social, index) => {
                          const IconComponent = social.icon;
                          return (
                            <Link
                              key={index}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center transition-colors hover:bg-primary/30"
                              title={social.name}
                              aria-label={social.name}
                            >
                              <IconComponent className="h-4 w-4 text-primary-600" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Formulaire */}
                  <div className="lg:col-span-2 p-4 sm:p-6 lg:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8 sm:py-12 space-y-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto">
                          <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary-700 dark:text-primary-400">
                          {CONTACT_CONTENT.form.successMessage.title}
                        </h3>
                        <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
                          {CONTACT_CONTENT.form.successMessage.description}
                        </p>
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                          className="border-primary-500/50 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/50 text-sm sm:text-base"
                        >
                          {CONTACT_CONTENT.form.successMessage.buttonText}
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4 sm:space-y-6">
                        <div className="space-y-2">
                          <h4 className="text-lg sm:text-xl font-bold">{CONTACT_CONTENT.form.title}</h4>
                          <p className="text-muted-foreground text-xs sm:text-sm">{CONTACT_CONTENT.form.subtitle}</p>
                        </div>

                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel htmlFor="contact-name">
                                      {CONTACT_CONTENT.form.fields.name.label}
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        id="contact-name"
                                        placeholder={CONTACT_CONTENT.form.fields.name.placeholder}
                                        {...field}
                                        className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400"
                                        aria-describedby="contact-name-desc"
                                      />
                                    </FormControl>
                                    <FormDescription id="contact-name-desc" className="sr-only">
                                      Votre prénom et nom pour vous identifier dans votre message
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel htmlFor="contact-email">
                                      {CONTACT_CONTENT.form.fields.email.label}
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        id="contact-email"
                                        type="email"
                                        placeholder={CONTACT_CONTENT.form.fields.email.placeholder}
                                        {...field}
                                        className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400"
                                        aria-describedby="contact-email-desc"
                                      />
                                    </FormControl>
                                    <FormDescription id="contact-email-desc" className="sr-only">
                                      Votre adresse email sera utilisée uniquement pour vous répondre et ne sera pas
                                      partagée
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel htmlFor="contact-company">
                                      {CONTACT_CONTENT.form.fields.company.label}
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        id="contact-company"
                                        placeholder={CONTACT_CONTENT.form.fields.company.placeholder}
                                        {...field}
                                        className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400"
                                        aria-describedby="contact-company-desc"
                                      />
                                    </FormControl>
                                    <FormDescription id="contact-company-desc" className="sr-only">
                                      Optionnel - Le nom de votre entreprise ou organisation
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                  <FormItem className="grid gap-2">
                                    {/* Label accessible sans htmlFor (évite l'orphelin) */}
                                    <span id="budget-label" className="text-sm font-medium">
                                      {CONTACT_CONTENT.form.fields.budget.label}
                                    </span>

                                    <Select name="budget" value={field.value} onValueChange={field.onChange}>
                                      <FormControl className="w-full">
                                        <SelectTrigger
                                          id="budget-trigger"
                                          role="combobox"
                                          aria-labelledby="budget-label"
                                          aria-describedby="budget-desc"
                                          aria-controls="budget-options"
                                          className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400"
                                        >
                                          <SelectValue placeholder={CONTACT_CONTENT.form.fields.budget.placeholder} />
                                        </SelectTrigger>
                                      </FormControl>

                                      <SelectContent
                                        id="budget-options"
                                        className="border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-950/50"
                                      >
                                        {CONTACT_CONTENT.form.fields.budget.options?.map((option) => (
                                          <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>

                                    <FormDescription id="budget-desc" className="sr-only">
                                      Optionnel - Sélectionnez une fourchette de budget pour mieux adapter ma
                                      proposition à vos besoins
                                    </FormDescription>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel htmlFor="contact-message">
                                    {CONTACT_CONTENT.form.fields.message.label}
                                  </FormLabel>
                                  <FormControl>
                                    <Textarea
                                      id="contact-message"
                                      placeholder={CONTACT_CONTENT.form.fields.message.placeholder}
                                      rows={6}
                                      {...field}
                                      className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400 resize-none"
                                      aria-describedby="contact-message-desc"
                                    />
                                  </FormControl>
                                  <FormDescription id="contact-message-desc" className="sr-only">
                                    Obligatoire - Décrivez votre projet en détail, vos besoins et objectifs. Minimum 10
                                    caractères requis
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <Button
                              type="submit"
                              disabled={isSubmitting || !isFormValid}
                              className="w-full professional-button"
                            >
                              {isSubmitting ? (
                                <>
                                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                                  {CONTACT_CONTENT.form.submit.loading}
                                </>
                              ) : (
                                <>
                                  <Send className="h-4 w-4 mr-2" />
                                  {CONTACT_CONTENT.form.submit.text}
                                </>
                              )}
                            </Button>

                            <p className="text-xs text-muted-foreground text-center">{CONTACT_CONTENT.form.privacy}</p>
                          </form>
                        </Form>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
