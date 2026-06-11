import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import ProductMockup from "@/components/ProductMockup";
import AIDemo from "@/components/AIDemo";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#060B15]">
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <Features />
      <ProductMockup />
      <AIDemo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
