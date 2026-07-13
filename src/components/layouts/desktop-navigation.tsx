"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { NavigationItem } from "@/config/navigation.config";

export const DesktopNavigation = React.memo(({ navigation, className }: { navigation: NavigationItem[], className?: string }) => {
  const { isActiveLink, handleNavClick } = useActiveSection();
  return (
      <div className={cn("flex-1", className)}>
        {/* Navigation Desktop */}
        <NavigationMenu className="ml-10">
          <NavigationMenuList>
            {navigation.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActiveLink(item.href);
              return (
                <NavigationMenuItem key={item.name}>
                    <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)} className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-primary/30 focus:bg-primary/20",
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