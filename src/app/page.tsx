import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";



const IndexPage = () => {
  return <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </div>;
};

export default IndexPage;