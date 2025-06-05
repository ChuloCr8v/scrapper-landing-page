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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
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

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Stop Guessing – Start Outpricing
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 1,200+ eCommerce brands using our data to win the pricing war
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Claim Your Free Competitor Report
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Book a Strategy Call with Our Data Expert
            </Button>
          </div>
        </div>
      </section>

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
