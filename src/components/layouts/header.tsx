"use client";

import * as React from "react";
import Link from "next/link";
import { BRAND_INFO } from "@/config";
import { ThemeToggle } from "../ui/theme-toggle";
import { ColorThemeControl } from "../ui/color-theme-control";

export function Header({ children }: { children?: React.ReactNode }) {

  return (
    <header className="sticky top-0 z-50 w-full glass-nav">
      <div className="flex h-16 items-center justify-between px-8 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 space-x-3 group" aria-label="Home">
          <div className="relative">
            <div className="size-9 md:size-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center emerald-glow">
              <span className="text-white font-bold text-md md:text-lg">{BRAND_INFO.initials}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className=" font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {BRAND_INFO.name}
            </span>
            <span className="hidden md:block text-xs text-muted-foreground -mt-1">{BRAND_INFO.title}</span>
          </div>
        </Link>
        {/* Navigation */}
        {children && children}
        {/* Theme controls */}
        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          <ColorThemeControl />
        </div>
      </div>
    </header>
  );
}
