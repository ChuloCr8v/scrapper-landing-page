import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 to-green-600/20 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          Stop Guessing – Start Outpricing
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join 1,200+ eCommerce brands using our data to win the pricing war
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            type="primary"
            className="text-lg px-8  py-5 rounded-xl font-semibold"
          >
            <Link href="/#pricing">Get Started</Link>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button className="text-lg px-8 py-5 rounded-xl border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
            <Link href="/#demo">Claim Your Free Competitor Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
