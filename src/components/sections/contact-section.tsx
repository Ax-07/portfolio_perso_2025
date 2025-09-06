"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Send, 
  Clock,
  CheckCircle,
} from "lucide-react";
import { CONTACT_CONTENT } from "@/constants";

const formSchema = z.object({
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

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
    return watchedValues.name?.trim().length >= 2 && 
           watchedValues.email?.trim() && 
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(watchedValues.email) &&
           watchedValues.message?.trim().length >= 10;
  }, [watchedValues.name, watchedValues.email, watchedValues.message]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de l\'envoi');
      }

      const result = await response.json();
      console.log('Message envoyé avec succès:', result);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
      
      // Reset success state après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setIsSubmitting(false);
      
      // Vous pouvez ajouter une gestion d'erreur ici
      // Par exemple, afficher un toast d'erreur
      alert(error instanceof Error ? error.message : 'Erreur lors de l\'envoi du message');
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
            <Badge variant="outline" className="border-primary-500/50 text-primary-600 bg-primary-50 dark:bg-primary-950/50 text-xs sm:text-sm px-2 sm:px-3 py-1">
              {CONTACT_CONTENT.badge}
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {CONTACT_CONTENT.title} 
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> {CONTACT_CONTENT.titleHighlight}</span>
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
                  <div className="bg-gradient-to-br from-primary-500/5 to-primary-600/5 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-base sm:text-lg font-bold">{CONTACT_CONTENT.infos.title}</h4>
                      <div className="space-y-2 sm:space-y-3">
                        {CONTACT_CONTENT.infos.items.map((info) => {
                          const IconComponent = info.icon;
                          return (
                            <div key={info.name} className="flex items-start space-x-3">
                              <IconComponent className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
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
                      <h5 className="font-medium text-xs sm:text-sm">Suivez-moi</h5>
                      <div className="flex space-x-2">
                        {CONTACT_CONTENT.social.map((social, index) => {
                          const IconComponent = social.icon;
                          return (
                            <a
                              key={index}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center transition-colors hover:bg-primary/30"
                              title={social.name}
                            >
                              <IconComponent className="h-4 w-4 text-primary-600" />
                            </a>
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
                        <h4 className="text-lg sm:text-xl font-bold text-primary-700 dark:text-primary-400">{CONTACT_CONTENT.form.successMessage.title}</h4>
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
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {CONTACT_CONTENT.form.subtitle}
                          </p>
                        </div>

                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{CONTACT_CONTENT.form.fields.name.label}</FormLabel>
                                    <FormControl>
                                      <Input 
                                        placeholder={CONTACT_CONTENT.form.fields.name.placeholder} 
                                        {...field}
                                        className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{CONTACT_CONTENT.form.fields.email.label}</FormLabel>
                                    <FormControl>
                                      <Input 
                                        type="email"
                                        placeholder={CONTACT_CONTENT.form.fields.email.placeholder} 
                                        {...field}
                                        className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400"
                                      />
                                    </FormControl>
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
                                    <FormLabel>{CONTACT_CONTENT.form.fields.company.label}</FormLabel>
                                    <FormControl>
                                      <Input 
                                        placeholder={CONTACT_CONTENT.form.fields.company.placeholder} 
                                        {...field}
                                        className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{CONTACT_CONTENT.form.fields.budget.label}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl className="w-full">
                                        <SelectTrigger className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400">
                                          <SelectValue placeholder={CONTACT_CONTENT.form.fields.budget.placeholder} />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent className="border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-950/50">
                                        {CONTACT_CONTENT.form.fields.budget.options?.map((option) => (
                                          <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
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
                                  <FormLabel>{CONTACT_CONTENT.form.fields.message.label}</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder={CONTACT_CONTENT.form.fields.message.placeholder}
                                      rows={6}
                                      {...field}
                                      className="border-primary-200 focus:border-primary-500 dark:border-primary-800 dark:focus:border-primary-400 resize-none"
                                    />
                                  </FormControl>
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

                            <p className="text-xs text-muted-foreground text-center">
                              {CONTACT_CONTENT.form.privacy}
                            </p>
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
