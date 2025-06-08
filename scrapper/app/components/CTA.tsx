import { Play } from "lucide-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 to-green-600/20 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          Stop Guessing – Start Outpricing
        </h2>
        <p className="mb-8 opacity-90">
          Join 1,200+ eCommerce brands using our data to win the pricing war
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton
            icon={<FaArrowRight />}
            link={"/#pricing"}
            text={"Get Started"}
          />
          <SecondaryButton
            link={"/#demo"}
            icon={<Play />}
            text={"Claim Your Free Competitor Demo"}
            className="md:max-w-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
