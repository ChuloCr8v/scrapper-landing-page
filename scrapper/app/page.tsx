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

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              eCommerce Brands We've Empowered
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "We found 12% of our products were priced too high – fixed it
                  in a day and saw a 22% sales bump."
                </blockquote>
                <cite className="text-muted-foreground">
                  – Lisa T., Amazon FBA Seller
                </cite>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "Caught a competitor dumping inventory at 40% below MAP. Sent
                  a cease-and-desist the same day."
                </blockquote>
                <cite className="text-muted-foreground">– DTC Brand Owner</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Can you scrape Amazon without getting blocked?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes – we rotate proxies and mimic human behavior to avoid
                  detection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How often is data updated?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As often as hourly (for pricing) or weekly (for reviews).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you handle CAPTCHAs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we automate solving CAPTCHAs so you don't have to.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
