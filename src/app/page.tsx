"use client";

import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Separator } from "@/components/ui/separator";
import { ContactSection } from "@/components/sections/contact-section";
import { Header } from "@/components/layouts/header";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ResponsiveNavigation } from "@/components/layouts/responsive-navigation";
import { MotionWrapper } from "@/components/motion/motion-wrapper";

export default function Home() {
  return (
    <>
      <SmoothScrollProvider />
      <Header>
        <ResponsiveNavigation />
      </Header>
      <main>
        <HeroSection />
        <Separator className="my-12 md:my-20 max-w-[80%] mx-auto bg-primary" />
        
        <MotionWrapper>
          <AboutSection />
        </MotionWrapper>
        
        <Separator className="my-12 md:my-20 max-w-[80%] mx-auto bg-primary" />
        
        <MotionWrapper>
          <ProjectsSection />
        </MotionWrapper>
        
        <Separator className="my-12 md:my-20 max-w-[80%] mx-auto bg-primary" />
        
        <MotionWrapper>
          <ContactSection />
        </MotionWrapper>
      </main>
    </>
  );
}
