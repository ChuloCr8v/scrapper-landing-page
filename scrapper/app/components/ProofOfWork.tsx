"use client";

import { Button } from "antd";
import { Download } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaFileExcel } from "react-icons/fa";
import { getColor } from "./colors";
import { useIsMobile } from "@/hooks/use-mobile";
import { twMerge } from "tailwind-merge";

const statData = [
  {
    count: "2.5M+",
    label: "Total Records",
  },
  {
    count: "50+",
    label: "Projects Completed",
  },
  {
    count: "98.9%",
    label: "Data Accuracy",
  },
  {
    count: "99.9%",
    label: "Customer Satisfaction",
  },
];

const colors = [
  "text-primary",
  "text-teal-800",
  "text-green-800",
  "text-orange-800",
];

const workData = [
  {
    title: "Cameras",
    content:
      "Complete analysis of 50,000+ cameras including pricing, reviews and other competitor data",
    data: [
      {
        label: "Records",
        value: "52,500",
      },
      {
        label: "Date",
        value: "December 2024",
      },
      {
        label: "Category",
        value: "Electronics",
      },
    ],
  },
  {
    title: "Laptops",
    content:
      "Extracted key specs, user ratings, and price trends for top 30,000 laptop listings across 5 marketplaces",
    data: [
      {
        label: "Records",
        value: "30,000",
      },
      {
        label: "Date",
        value: "January 2025",
      },
      {
        label: "Category",
        value: "Computing",
      },
    ],
  },
  {
    title: "Running Shoes",
    content:
      "Monitored seasonal price drops and bestselling brands from over 18,000 product listings",
    data: [
      {
        label: "Records",
        value: "18,200",
      },
      {
        label: "Date",
        value: "November 2024",
      },
      {
        label: "Category",
        value: "Footwear",
      },
    ],
  },
  {
    title: "Smartphones",
    content:
      "Tracked availability and pricing of new releases across Amazon and competitors for Q4 2024",
    data: [
      {
        label: "Records",
        value: "42,600",
      },
      {
        label: "Date",
        value: "October 2024",
      },
      {
        label: "Category",
        value: "Mobile Devices",
      },
    ],
  },
  {
    title: "Kitchen Appliances",
    content:
      "Collected review sentiment and discount trends for 25,000+ kitchen tools and appliances",
    data: [
      {
        label: "Records",
        value: "25,500",
      },
      {
        label: "Date",
        value: "September 2024",
      },
      {
        label: "Category",
        value: "Home & Kitchen",
      },
    ],
  },
  {
    title: "Watches",
    content:
      "Detailed pricing history and feature breakdowns for over 15,000 fashion and digital watches",
    data: [
      {
        label: "Records",
        value: "15,300",
      },
      {
        label: "Date",
        value: "August 2024",
      },
      {
        label: "Category",
        value: "Accessories",
      },
    ],
  },
];

const ProofOfWork = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-24">
      <div className="max-w-7xl w-full px-4 flex flex-col justify-center items-center gap-6">
        <div className="space-y-1 text-center mb-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">Proof of Work</h2>
          <p className="text-gray-600 text-center">
            Real projects we've completed for <br></br>our clients with
            downloadable sample data
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 w-full h-[200px] max-md:overflow-auto hide-scrollbar">
          {statData.map((item, index) => (
            <div
              className={twMerge(
                "p-4 border text-center rounded-xl sticky top-0 bg-white",
                index === 1 && "top-3",
                index === 2 && "top-6",
                index === 3 && "top-9",
                index === 4 && "top-12"
              )}
              key={item.label}
            >
              <p className={`${getColor()} font-semibold text-2xl`}>
                {item.count}
              </p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        <Marquee
          pauseOnClick
          pauseOnHover
          gradient={!useIsMobile()}
          className="flex items-center gap-4 "
        >
          {workData.map((item) => (
            <div
              className="p-4 py-10 flex flex-col justify-center items-center gap-4 w-[350px]  rounded-xl border mx-2 h-full"
              key={item.title}
            >
              <FaFileExcel className={`${getColor()} text-4xl`} />

              <div className="text-center space-y-4">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-gray-600 text-left">{item.content}</p>
              </div>

              <div className="w-full space-y-1">
                {item.data.map((i) => (
                  <div
                    className="flex items-center justify-between w-full"
                    key={i.label}
                  >
                    <p className="text-gray-600">{i.label}</p>
                    <p className="font-semibold">{i.value}</p>
                  </div>
                ))}
              </div>

              <Button type="primary" className="w-full mt-4">
                Download Sample <Download className="h-4" />
              </Button>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ProofOfWork;
