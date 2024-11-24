import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DashboardPreviewSection } from "@/components/DashboardPreviewSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { FeaturesSectionDemo } from "@/components/blocks/features-section-demo-1";
import { PricingComponent } from "@/components/PricingComponent";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <HeroHighlight>
          <Navbar />
          <HeroSection />
          <FeaturesSectionDemo />
          <DashboardPreviewSection />
          <div className="max-w-7xl mx-auto my-24" id="pricing">
            <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium text-white my-12 text-center">
              Pricing solutions for everyone.
            </h1>
            <PricingComponent />
          </div>
          <ContactSection />
          <Footer />
        </HeroHighlight>
      </div>
    </>
  );
}
