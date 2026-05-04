import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Workflows from "@/components/Workflows";
import WhyChooseUs from "@/components/WhyChooseUs";
import BaaS from "@/components/BaaS";
import WhatWeDontDo from "@/components/WhatWeDontDo";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Services />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <Workflows />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <BaaS />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <WhatWeDontDo />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <CTA />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
