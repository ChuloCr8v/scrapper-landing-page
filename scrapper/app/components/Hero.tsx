import { Play } from "lucide-react";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const Hero = () => {
  return (
    <section className="py-48 lg:py-28 flex flex-col items-center w-screen relative h-screen">
      <div id="hero" className="px-4 max-w-7xl w-full relative z-20 md:pt-20">
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <div className="space-y-12 w-full flex flex-col justify-center items-center">
            <div className="space-y-8 flex flex-col justify-center items-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-center">
                Win the Pricing War <br></br>
                <span className="text-primary"> Automate</span> Your Competitor
                <br className="hidden md:block"></br> & Market Data Research
              </h1>
              <p className=" text-gray-600 max-w-3xl text-center">
                Extract real-time product prices, reviews, and inventory levels
                from Amazon, Walmart, or any eCommerce site – so you can reprice
                faster and stock smarter.
              </p>
            </div>

            <div className="flex flex-col justify-center sm:flex-row gap-4 w-full">
              <PrimaryButton
                icon={<FaArrowRight />}
                link={"/#demo"}
                text={"Free Demo"}
              />
              <SecondaryButton
                link={"/#pricing"}
                icon={<Play />}
                text={" Get Started"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-center items-center ">
        <div className="bg-gradient-to-b from-white to-transparent h-40 w-full absolute -top-10 z-10"></div>
        <Image
          src="/hero-vid.gif"
          height={1000}
          width={1000}
          alt="scrapper"
          className="w-full h-auto absolute top-[80%] z-0"
        />
      </div>
    </section>
  );
};

export default Hero;
