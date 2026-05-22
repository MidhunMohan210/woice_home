import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import Navbar from "@/components/landing/Navbar";
import PricingSection from "@/components/landing/PricingSection";
import ProblemSection from "@/components/landing/ProblemSection";

export default function Home() {
  return (
    <div className=" bg-[#f5f5f7]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        {/* <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <CTASection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
