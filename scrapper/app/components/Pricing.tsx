"use client";

import { Button } from "antd";
import { ArrowRight, Check, CheckCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import ContactModal from "./ContactModal";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

export type PricingItem = {
  title: string;
  subtitle: string;
  price: number;
  features: string[];
};

export const pricingItemData = {
  title: "",
  subtitle: "",
  price: 0,
  features: [""],
};

export const pricingData: PricingItem[] = [
  {
    title: "Demo",
    subtitle: "A sneek into what we can offer you",
    price: 0,
    features: ["500 products/one-time", "1 Competitor", "CSV exports"],
  },
  {
    title: "Starter",
    subtitle: "Perfect for small businesses",
    price: 99,
    features: ["10,000 products/month", "Multiple Competitors", "CSV exports"],
  },
  {
    title: "Growth",
    subtitle: "For growing eCommerce stores",
    price: 199,
    features: ["50,000 products/month", "Multiple Competitors", "API access"],
  },
  {
    title: "Agency",
    subtitle: "For agencies and enterprises",
    price: 399,
    features: [
      "250k products/month",
      "Unlimited Competitors",
      "White-label reports",
    ],
  },
];

const Pricing = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [pricingItems, setPricingItems] = useState(pricingItemData);
  const router = useRouter();

  const handleClick = (title: string, data?: PricingItem) => {
    if (title === "Demo") {
      router.push("/#demo");
      return;
    } else {
      setVisible(true);
      setPricingItems(data ?? pricingItemData);
    }
    setVisible(true);
  };

  return (
    <section id="pricing" className="pt-8">
      <div className="flex flex-col justify-center items-center mx-auto px-4 mt-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pricing for Every Scale
          </h2>
        </div>

        <div className="flex items-start justify-between max-w-[600px] w-full border rounded-xl p-4 relative">
          <div className="">
            <p className="text-2xl font-semibold">{pricingData[0].title}</p>
            <p className="text-gray-600">{pricingData[0].subtitle}</p>
            <div className="space-y-1 -ml-1 mt-2">
              {pricingData[0].features.map((f, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <CheckCircleIcon className="h-4 text-primary" />{" "}
                  <span className="text-gray-600">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <span className="text-4xl text-black font-semibold">
              ${pricingData[0].price}
            </span>
            /month
          </div>

          <Button
            type="primary"
            className="rounded-full absolute bottom-4 right-4 h-12 w-12"
          >
            <Link href={"/#demo"}>
              <ArrowRight className="animate-pulse !text-2xl" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-7xl w-full mt-8 mx-auto">
          {pricingData.slice(1).map((item, index) => (
            <div
              className={twMerge(
                "border rounded-xl p-4 py-6 space-y-6 relative flex flex-col",
                index === 1 && "border-primary pt-0 mt-4 md:mt-0"
              )}
              key={index}
            >
              {index === 1 && (
                <div className="place-self-center bg-primary text-white rounded-full px-3 py-1 absolute -top-4 w-fit">
                  Most Popular
                </div>
              )}
              <div className="">
                <h2 className="font-semibold text-2xl">{item.title}</h2>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>

              <div className="">
                <span className="text-3xl text-black font-semibold">
                  ${item.price}
                </span>
                /month
              </div>

              <div className="space-y-1">
                {item.features.map((f, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <CheckCircleIcon className="h-4 text-primary" />{" "}
                    <span className="text-gray-600">{f}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleClick(item.title, item)}
                type="primary"
                className="w-full h-9 font-semibold"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-8">
          <p className="text-lg font-medium">
            7-day free trial – cancel if data isn't 95%+ accurate.
          </p>
        </div> */}

        <Button size="large" type="primary" className="place-self-center mt-12">
          Custom Request
        </Button>
      </div>

      <ContactModal
        visible={visible}
        setVisible={setVisible}
        data={pricingItems}
        setPricingItems={setPricingItems}
      />
    </section>
  );
};

export default Pricing;
