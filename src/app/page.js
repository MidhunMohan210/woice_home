import FAQSection from "@/components/landing/FAQSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/WebsiteWidgetSection";
import Navbar from "@/components/landing/Navbar";
import PricingSection from "@/components/landing/PricingSection";
import ProblemSection from "@/components/landing/ProblemSection";
import Testimonials from "@/components/landing/Testimonials";
import TrustedBySection from "@/components/landing/TrustedBySection";
import WoiceWaySection from "@/components/landing/WoiceWaySection";
import WebsiteWidgetSection from "@/components/landing/WebsiteWidgetSection";

const homeTitle =
  "Woice | Collect Customer Feedback and Testimonials for Small Businesses";
const homeDescription =
  "Woice helps small businesses collect customer feedback, keep negative feedback private, publish approved testimonials, and guide happy customers to Google reviews.";

export const metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="bg-[#f5f5f7]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <WoiceWaySection />
        <FeaturesSection />
        <WebsiteWidgetSection />  
        <TrustedBySection />
        <PricingSection />
        <FAQSection />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
