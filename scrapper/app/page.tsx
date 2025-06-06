import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Search,
  Target,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Download,
  Shield,
  Clock,
  Users,
} from "lucide-react";
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="border-b relative z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">CompeteData</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#demo"
              className="text-sm font-medium hover:text-primary"
            >
              Demo
            </Link>
          </nav>
        </div>
      </header>

      <Hero />
      <Trust />
      <Benefits />
      <UseCases />
      <HowItWoks />
      <Demo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">CompeteData</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Professional eCommerce data scraping and competitor
                intelligence.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Trust Signals</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  GDPR compliant
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Anti-blocking tech
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  24/7 monitoring
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Data Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 CompeteData. All rights reserved.</p>
            <p>
              We only scrape publicly available data in compliance with terms of
              service.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
