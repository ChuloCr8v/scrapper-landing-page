import { CardContent } from "@/components/ui/card";
import { Card } from "antd";
import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Testimonials = (props: Props) => {
  const testimonials = [
    {
      text: "We adjusted our pricing on 200+ products in one day. Revenue jumped 17% that week.",
      client: "Sarah Langford",
    },
    {
      text: "Identified top-converting competitor listings and copied their format. CTR went up 22%.",
      client: "Jason Mendez",
    },
    {
      text: "Scraped thousands of listings for price gaps. We raised margins without losing the buy box.",
      client: "Emily Zhao",
    },
    {
      text: "Caught a trend early from scraped bestseller data. Moved $40k of product in 3 days.",
      client: "Leon Chukwu",
    },
    {
      text: "Used scraped reviews to rewrite 10 listings. Conversion rates shot up across the board.",
      client: "Nina Patel",
    },
    {
      text: "Real-time price tracking helped us undercut 3 competitors—without a race to the bottom.",
      client: "Ahmed Reza",
    },
    {
      text: "Mapped competitor bundles and created our own. We outsold them 3:1 last quarter.",
      client: "Claire Robbins",
    },
    {
      text: "Bulk-scraped ASIN data to find gaps in variation listings. That alone added 8% to monthly sales.",
      client: "Daniel Okafor",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 mt-24 bg-muted/50 bg-gradient-to-b from-green-600/20 to-transparent"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
          eCommerce Brands <br></br> We've Empowered
        </h2>

        <Marquee loop={0} pauseOnClick pauseOnHover className="grid gap-4">
          {testimonials.map((item) => (
            <div className="bg-white rounded-2xl shadow max-w-[350px] mx-2">
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">{item.text}</blockquote>
                <cite className="text-muted-foreground">– {item.client}</cite>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
