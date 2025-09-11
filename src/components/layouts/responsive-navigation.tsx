"use client";

import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { MAIN_NAVIGATION } from "@/config";

export function ResponsiveNavigation() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <MobileNavigation navigation={MAIN_NAVIGATION} />
      ) : (
        <DesktopNavigation navigation={MAIN_NAVIGATION} />
      )}
    </>
  );
}
