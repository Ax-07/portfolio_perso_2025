"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MAIN_NAVIGATION, BRAND_INFO } from "@/config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ui/theme-toggle";
import { ColorThemeControl } from "../ui/color-theme-control";
import { useActiveSection } from "@/hooks/use-active-section";

export const DesktopNavigation = () => {
  const { isActiveLink, handleNavClick } = useActiveSection();
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex">
        <Link className="flex items-center space-x-3 group" href="/">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center emerald-glow">
              <span className="text-white font-bold text-lg">{BRAND_INFO.initials}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {BRAND_INFO.name}
            </span>
            <span className="text-xs text-muted-foreground -mt-1">{BRAND_INFO.title}</span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <NavigationMenu className="ml-10">
          <NavigationMenuList>
            {MAIN_NAVIGATION.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActiveLink(item.href);
              return (
                <NavigationMenuItem key={item.name}>
                    <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)} className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium hover:bg-primary/30 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1",
                      isActive && "bg-primary/20 font-medium"
                    )}>
                      <div className="flex items-center gap-2">
                        <IconComponent
                          className={cn("h-4 w-4 transition-colors")}
                        />
                        {item.name}
                      </div>
                    </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <ColorThemeControl />
      </div>
    </div>
  );
};
