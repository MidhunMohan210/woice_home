import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";
import PricingSection from "@/components/landing/PricingSection";
import ProblemSection from "@/components/landing/ProblemSection";
import WoiceWaySection from "@/components/landing/WoiceWaySection";

export default function Home() {
  return (
    <div className=" bg-[#f5f5f7]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <WoiceWaySection />
        <HowItWorks/>
        {/* <PricingSection />
        <FAQSection />
        <CTASection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
