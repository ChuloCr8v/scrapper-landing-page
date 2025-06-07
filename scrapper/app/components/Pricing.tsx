"use client";

import { Button } from "antd";
import { Check, CheckCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import ContactModal from "./ContactModal";
import { useRouter } from "next/navigation";

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
    <section>
      <div
        className="flex flex-col justify-center items-center mx-auto px-4"
        id="pricing"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pricing for Every Scale
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4 max-w-7xl w-full  mx-auto">
          {pricingData.map((item, index) => (
            <div
              className={twMerge(
                "border rounded-xl p-4 py-6 space-y-6 relative flex flex-col",
                index === 2 && "border-primary pt-0"
              )}
              key={index}
            >
              {index === 2 && (
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
