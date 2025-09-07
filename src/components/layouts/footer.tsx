import { FOOTER_NAVIGATION, SOCIAL_LINKS, BRAND_INFO } from "@/config";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border/40">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Contenu principal */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 text-center lg:text-left">
            
            {/* Section Branding - Prend plus d'espace */}
            <div className="lg:col-span-4 space-y-6 flex flex-col items-center lg:items-start">
              {/* Logo et nom */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">{BRAND_INFO.initials}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{BRAND_INFO.name}</h3>
                  <p className="text-primary-600 font-medium text-sm text-left">{BRAND_INFO.title}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {BRAND_INFO.description}
              </p>
              
              {/* Réseaux sociaux */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">Suivez-moi</h4>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  {SOCIAL_LINKS.map((link, idx) => {
                    const IconComponent = link.icon;
                    return (
                      <Link
                        key={idx}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary-50 dark:hover:bg-primary-950/50 border border-border/50 hover:border-primary-200 dark:hover:border-primary-800 flex items-center justify-center transition-all duration-200 group"
                        title={link.name}
                      >
                        <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-primary-600 transition-colors" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Section Navigation Principale */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                {FOOTER_NAVIGATION.main.map((link, idx) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={idx}>
                      <Link 
                        href={link.href}
                        className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground hover:text-primary-600 transition-colors duration-200 group"
                      >
                        <IconComponent className="h-4 w-4 group-hover:text-primary-600 transition-colors" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Section Contact rapide */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h4>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  <p>Prêt pour votre projet ?</p>
                  <Link 
                    href="#contact" 
                    className="inline-flex items-center gap-1 mt-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Discutons-en
                    <span className="text-xs">→</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-border/40" />

        {/* Footer bottom */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>© {currentYear} <span className="font-medium text-foreground">{BRAND_INFO.name}</span>. Tous droits réservés.</p>
            </div>

            {/* Liens légaux */}
            <div className="flex items-center justify-center gap-6">
              {FOOTER_NAVIGATION.legal.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary-600 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
