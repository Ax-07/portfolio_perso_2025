"use client";

import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Separator } from "@/components/ui/separator";
import { ContactSection } from "@/components/sections/contact-section";
import { Header } from "@/components/layouts/header";
import { ResponsiveNavigation } from "@/components/layouts/responsive-navigation";

export default function Home() {
  return (
    <>
      <Header>
        <ResponsiveNavigation />
      </Header>
      <main>
        <HeroSection />
        <Separator className="my-12 md:my-20 max-w-[80%] mx-auto bg-primary" />

        <AboutSection />

        <Separator className="my-12 md:my-20 max-w-[80%] mx-auto bg-primary" />

        <ProjectsSection />

        <Separator className="my-12 md:my-20 max-w-[80%] mx-auto bg-primary" />

        <ContactSection />
      </main>
    </>
  );
}
