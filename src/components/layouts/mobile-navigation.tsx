import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";
import { BRAND_INFO, FOOTER_NAVIGATION } from "@/config";
import { useActiveSection } from "@/hooks/use-active-section";
import { NavigationItem } from "@/config/navigation.config";

export const MobileNavigation = React.memo(({ navigation }: { navigation: NavigationItem[] }) => {
  const { isActiveLink, handleNavClick } = useActiveSection();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    handleNavClick(e, href);
    // Fermer la navigation après un délai pour permettre le scroll smooth
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen} aria-describedby="mobile-menu">
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open Menu" onClick={() => setIsOpen(true)}>
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto pt-24 z-100 px-6" aria-describedby="mobile-menu">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center gap-2" aria-label="Home" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center emerald-glow mx-auto">
                    <span className="text-white font-bold text-lg">{BRAND_INFO.initials}</span>
                  </div>
                </Link>
              </SheetTitle>
              <SheetDescription aria-describedby="mobile-menu" className="text-center mt-2">
                {BRAND_INFO.name}
                <br />
                {BRAND_INFO.title}
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = isActiveLink(item.href);
                return (
                  <Link
                    key={idx}
                    className={cn(
                      "flex items-start select-none gap-4 rounded-md p-3 leading-none outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive && "bg-primary/20 text-primary font-medium"
                    )}
                    href={`/${item.href}`}
                    onClick={(e) => handleNavigation(e, item.href)}
                  >
                    <span className="shrink-0">
                      <IconComponent className={cn("h-5 w-5 transition-colors", isActive ? "text-primary" : "")} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{item.name}</div>
                      <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
                );
              })}
            </nav>
            {/* Section supplémentaire avec ThemeToggle */}
            <div className="mt-6 border-t pt-4">
              <div className="flex flex-col items-center justify-between">
                <span className="text-sm font-semibold mb-4">Préférences</span>
                <div className="flex items-center space-x-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
            {/* Section supplémentaire avec des liens */}
            <div className="mt-6 border-t pt-4">
              <div className="grid grid-cols-1 gap-4">
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
            <SheetFooter className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <div className="flex  justify-center">
                <span className="text-muted-foreground shrink-0">© No rights reserved.</span>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
});

MobileNavigation.displayName = "MobileNavbar";
