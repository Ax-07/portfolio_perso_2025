"use client";

import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { MAIN_NAVIGATION } from "@/config";

export function ResponsiveNavigation() {
  return (
    <>
        <MobileNavigation navigation={MAIN_NAVIGATION} className="lg:hidden"/>
        <DesktopNavigation navigation={MAIN_NAVIGATION} className="hidden lg:flex"/>
    </>
  );
}
