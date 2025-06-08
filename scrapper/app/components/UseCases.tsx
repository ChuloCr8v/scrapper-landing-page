import { CardTitle } from "@/components/ui/card";
import { Button } from "antd";
import { Target, Zap, Shield, Users, ArrowRight } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const data = [
  {
    title: "Amazon Sellers",
    description:
      "Monitor Buy Box winners, pricing history, and review sentiment.",
    icon: <Target className="h-5 w-5 text-orange-500" />,
  },
  {
    title: "Shopify Stores",
    description:
      "Track competitor discount strategies and new product launches.",
    icon: <Zap className="h-5 w-5 text-green-500" />,
  },
  {
    title: "DTC Brands",
    description: "Discover unauthorized sellers undercutting your MAP pricing.",
    icon: <Shield className="h-5 w-5 text-red-500" />,
  },
  {
    title: "Retail Agencies",
    description: "White-label data feeds for your clients' dashboards.",
    icon: <Users className="h-5 w-5 text-purple-500" />,
  },
];
const UseCases = (props: Props) => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/20 to-transparent relative z-20">
      <div className="max-w-7xl flex flex-col justify-center items-center mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          How eCommerce Brands <br></br> Use Our Data
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 hide-scrollbar max-md:h-[300px] max-md:overflow-hidden">
          {data.map((feature, index) => (
            <div
              key={index}
              className={twMerge(
                "text-center bg-white rounded-xl border-2 py-12 px-4 space-y-4 flex flex-col sticky md:relative max-md:top-0 max-md:h-fit",
                index === 1 && "max-md:top-4",
                index === 2 && "max-md:top-8",
                index === 3 && "max-md:top-12"
              )}
            >
              <div className="flex items-center gap-4">
                <div className="">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </div>
              <p className="text-muted-foreground text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* <Button
          className="p-6 rounded-xl bg-gradient-to-r to-blue-800 from-primary text-xl duration-200 mt-6"
          type="primary"
        >
          Get a Free Demo for Your Niche
          <ArrowRight className="ml-2 mt-1.5" />
        </Button> */}
      </div>
    </section>
  );
};

export default UseCases;
