"use client";

import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Can you scrape Amazon without getting blocked?",
    children: (
      <p>
        Yes – we rotate proxies and mimic human behavior to avoid detection. Our
        advanced system handles CAPTCHAs and respects Amazon's crawl delays to
        ensure uninterrupted data collection.
      </p>
    ),
  },
  {
    key: "2",
    label: "How frequently can you scrape Amazon product prices?",
    children: (
      <p>
        We can scrape prices as frequently as every 15 minutes for critical
        products, or on a daily/weekly basis depending on your needs. Our system
        adjusts request frequency to avoid triggering Amazon's anti-scraping
        measures.
      </p>
    ),
  },
  {
    key: "3",
    label: "What product data can you extract besides prices?",
    children: (
      <p>
        We can extract comprehensive product data including:
        <ul>
          <li>Current price and original price</li>
          <li>Product title, description, and features</li>
          <li>Availability status</li>
          <li>Seller information</li>
          <li>Customer reviews and ratings</li>
          <li>Product images</li>
          <li>Variation details (size/color options)</li>
        </ul>
      </p>
    ),
  },
  {
    key: "4",
    label: "How do you handle Amazon's CAPTCHAs?",
    children: (
      <p>
        Our system automatically detects and solves CAPTCHAs using advanced
        solving services. We also implement proxy rotation and request
        throttling to minimize CAPTCHA encounters in the first place.
      </p>
    ),
  },
  {
    key: "5",
    label: "Is web scraping Amazon legal?",
    children: (
      <p>
        While web scraping is generally legal, we comply with Amazon's Terms of
        Service by limiting request rates and only accessing publicly available
        data. We recommend using scraped data for market research and price
        comparison, not for direct commercial replication of Amazon's services.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can you track price history for products?",
    children: (
      <p>
        Yes, we store historical price data and can provide detailed price trend
        analysis, including price change frequency, average price over time, and
        notifications when prices drop below your specified thresholds.
      </p>
    ),
  },
  {
    key: "7",
    label: "How do you deliver the scraped data?",
    children: (
      <p>
        We offer multiple delivery options:
        <ul>
          <li>API access for real-time data</li>
          <li>Scheduled CSV/Excel reports</li>
          <li>Direct database integration</li>
          <li>Custom dashboards with visualization</li>
        </ul>
        You can choose the format that best fits your workflow.
      </p>
    ),
  },
  {
    key: "8",
    label: "Do you support scraping from Amazon international sites?",
    children: (
      <p>
        Yes, we can scrape from all Amazon marketplaces including Amazon US, UK,
        Canada, Germany, France, Japan, and others. Our system handles
        localization and currency conversion as needed.
      </p>
    ),
  },
  {
    key: "9",
    label: "What if Amazon changes its website structure?",
    children: (
      <p>
        Our system continuously monitors for website changes and automatically
        updates our scraping selectors. We guarantee 99.9% uptime with rapid
        adaptation to any structural changes on Amazon's platform.
      </p>
    ),
  },
  {
    key: "10",
    label: "How do you ensure data accuracy?",
    children: (
      <p>
        We implement multiple validation checks including:
        <ul>
          <li>Data consistency verification</li>
          <li>Automatic retries for failed requests</li>
          <li>Human spot checks</li>
          <li>Error reporting and alert system</li>
        </ul>
        Our typical accuracy rate exceeds 99.5% for all scraped data.
      </p>
    ),
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 py-12 mt-12 px-4">
      <h2 className="text-3xl lg:text-4xl capitalize font-semibold text-center">
        Frequently asked questions
      </h2>
      <Collapse
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
        className="max-w-5xl"
      />
    </div>
  );
};

export default App;
