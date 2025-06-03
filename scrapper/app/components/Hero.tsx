import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, PlayIcon, TrendingUp } from "lucide-react";
import React from "react";
import { Button } from "antd";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="py-48 lg:py-28 flex flex-col justify-center items-center w-screen relative">
      <div className="px-4 max-w-7xl w-full relative z-20">
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <div className="space-y-12 w-full flex flex-col justify-center items-center">
            <div className="space-y-8 flex flex-col justify-center items-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-center">
                Win the Pricing War <br></br>
                <span className="text-primary"> Automate</span> Your Competitor
                <br></br> & Market Data Research
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl text-center">
                Extract real-time product prices, reviews, and inventory levels
                from Amazon, Walmart, or any eCommerce site – so you can reprice
                faster and stock smarter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="primary"
                className="p-6 rounded-xl bg-gradient-to-r to-blue-800 from-primary text-lg duration-200"
                icon={<ArrowRight className="mt-2" />}
                iconPosition="end"
              >
                Get Your Free Competitor Price Report
              </Button>
              <Button
                type="default"
                className="p-6 rounded-xl text-lg"
                icon={<PlayIcon className="mt-2" />}
                iconPosition="end"
                size="large"
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>

      <video
        controls={false}
        width="100%"
        autoPlay
        muted
        loop
        className="absolute -top-8 border -z-0"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
