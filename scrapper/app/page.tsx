import { Separator } from "@/components/ui/separator";
import { BarChart3, Zap, Shield, Clock } from "lucide-react";
import Link from "next/link";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Benefits from "./components/Benefits";
import UseCases from "./components/UseCases";
import HowItWoks from "./components/HowItWoks";
import Demo from "./components/Demo";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import ProofOfWork from "./components/ProofOfWork";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Trust />
      <Statistics />
      <Benefits />
      <UseCases />
      <HowItWoks />
      <Demo />
      <ProofOfWork />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
