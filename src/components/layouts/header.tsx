"use client";

import * as React from "react";
import { MobileNavbar } from "./mobile-navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopNavigation } from "./desktop-navigation";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full glass-nav">
      <div className="flex h-16 items-center px-8 mx-auto">
        {isMobile ? <MobileNavbar /> : <DesktopNavigation />}
      </div>
    </header>
  );
}
