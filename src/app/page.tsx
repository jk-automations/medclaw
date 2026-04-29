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

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Services />
      <Workflows />
      <WhyChooseUs />
      <BaaS />
      <WhatWeDontDo />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
