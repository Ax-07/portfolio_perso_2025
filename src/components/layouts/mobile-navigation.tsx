import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
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
import { ColorThemeControl } from "../ui/color-theme-control";
import { MAIN_NAVIGATION, BRAND_INFO } from "@/config";
import { useActiveSection } from "@/hooks/use-active-section";

export const MobileNavbar: React.FC = React.memo(() => {
  const { isActiveLink, handleNavClick } = useActiveSection();
  return (
    <div className="lg:hidden w-full">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{BRAND_INFO.initials}</span>
          </div>
          <span className="font-bold text-primary">{BRAND_INFO.name}</span>
        </Link>

        {/* Mobile Menu */}
        <Sheet aria-describedby="mobile-menu">
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open Menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto pt-24 z-100 px-6" aria-describedby="mobile-menu">
            <SheetHeader>
              <SheetTitle>
                <SheetClose asChild>
                  <Link href="/" className="flex items-center gap-2" aria-label="Home">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center emerald-glow mx-auto">
                      <span className="text-white font-bold text-lg">{BRAND_INFO.initials}</span>
                    </div>
                  </Link>
                </SheetClose>
              </SheetTitle>
              <SheetDescription aria-describedby="mobile-menu" className="text-center mt-2">
                {BRAND_INFO.name}
                <br />
                {BRAND_INFO.title}
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4">
              {MAIN_NAVIGATION.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = isActiveLink(item.href);
                return (
                  <SheetClose asChild key={idx}>
                    <Link
                      className={cn(
                        "flex items-start select-none gap-4 rounded-md p-3 leading-none outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        isActive && "bg-primary/20 text-primary font-medium"
                      )}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span className="shrink-0">
                        <IconComponent className={cn("h-5 w-5 transition-colors", isActive ? "text-primary" : "")} />
                      </span>
                      <div>
                        <div className="text-sm font-semibold">{item.name}</div>
                        <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
            {/* Section supplémentaire avec des liens */}
            <div className="mt-6 border-t pt-4">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/press" className="text-muted-foreground">
                  Press
                </Link>
                <Link href="/contact" className="text-muted-foreground">
                  Contact
                </Link>
                <Link href="/imprint" className="text-muted-foreground">
                  Imprint
                </Link>
                <Link href="/sitemap" className="text-muted-foreground">
                  Sitemap
                </Link>
              </div>
            </div>
            {/* Section supplémentaire avec ThemeToggle */}
            <div className="mt-6 border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Préférences</span>
                <div className="flex items-center space-x-2">
                  <ThemeToggle />
                  <ColorThemeControl />
                </div>
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

MobileNavbar.displayName = "MobileNavbar";
