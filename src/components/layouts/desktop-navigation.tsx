"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { NavigationItem } from "@/config/navigation.config";

export const DesktopNavigation = React.memo(({ navigation }: { navigation: NavigationItem[] }) => {
  const { isActiveLink, handleNavClick } = useActiveSection();
  return (
      <div className="flex flex-1">
        {/* Navigation Desktop */}
        <NavigationMenu className="ml-10">
          <NavigationMenuList>
            {navigation.map((item) => {
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
  );
});

DesktopNavigation.displayName = "DesktopNavigation";