import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button, Card } from "antd";
import {
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Search,
  ArrowRight,
  PlayIcon,
  Play,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import PrimaryButton from "./PrimaryButton";
import { FaArrowRight } from "react-icons/fa";
import SecondaryButton from "./SecondaryButton";

export const data = [
  {
    title: "Dynamic Repricing",
    description: "Track price changes hourly and auto-adjust your listings.",
    icon: <TrendingUp className="h-10 w-10 text-blue-500 mx-auto mb-4" />,
  },
  {
    title: "Out-of-Stock Alerts",
    description: "Know when competitors run low so you can capture demand.",
    icon: <AlertTriangle className="h-10 w-10 text-orange-500 mx-auto mb-4" />,
  },
  {
    title: "Trend Forecasting",
    description: "Spot rising products before they go viral.",
    icon: <BarChart3 className="h-10 w-10 text-green-500 mx-auto mb-4" />,
  },
  {
    title: "Review Monitoring",
    description:
      "Analyze competitor product weaknesses to highlight your advantages.",
    icon: <Search className="h-10 w-10 text-purple-500 mx-auto mb-4" />,
  },
];

const Benefits = () => {
  return (
    <section
      id="features"
      className="py-20 pt-80 relative z-20 place-self-center w-screen bg-white flex flex-col justify-center items-center"
    >
      <div className="space-y-10 px-4 -mt-48 flex flex-col justify-center items-center  max-w-7xl ">
        <h2 className="text-3xl font-semibold text-center">
          Turn Competitor Websites Into<br></br> Your Secret Weapon
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 max-md:h-[300px] max-md:overflow-auto hide-scrollbar ">
          {data.map((feature, index) => (
            <div
              key={index}
              className={twMerge(
                `text-center bg-white rounded-xl border-2 py-12 px-4 space-y-4 max-md:sticky top-0`,
                index === 1 && "top-3",
                index === 2 && "top-6",
                index === 3 && "top-9",
                index === 4 && "top-12"
              )}
            >
              <div>
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mt-4 w-full">
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
    </section>
  );
};

export default Benefits;
