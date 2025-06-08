import { Separator } from "@radix-ui/react-separator";
import { Shield, Zap, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="flex flex-col items-start">
            <Link href="#hero" className="flex items-center space-x-2">
              <span className="text-primary font-black text-2xl">
                P<span className="text-red-600">W</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Professional eCommerce data scraping and competitor intelligence.
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
  );
};

export default Footer;
