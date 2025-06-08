"use client";

import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Will Amazon block your scraping?",
    children: (
      <p>
        We've been doing this for years and know all the tricks to stay under
        the radar. We use:
        <ul>
          <li>Smart proxy rotation that mimics real shoppers</li>
          <li>Carefully timed requests that don't trigger alarms</li>
          <li>Backup methods when Amazon changes their defenses</li>
        </ul>
        If we ever hit a snag (which is rare), we've got workarounds ready to
        go.
      </p>
    ),
  },
  {
    key: "2",
    label: "How often can you refresh my product data?",
    children: (
      <p>
        It depends what you need:
        <ul>
          <li>
            <strong>Hot deals:</strong> Every 15-30 mins (great for flash sales)
          </li>
          <li>
            <strong>Daily:</strong> Perfect for most price tracking
          </li>
          <li>
            <strong>Weekly:</strong> Easier on your budget
          </li>
          <li>
            <strong>Your schedule:</strong> Tell us when you need updates
          </li>
        </ul>
        We'll help you find the sweet spot between fresh data and cost.
      </p>
    ),
  },
  {
    key: "3",
    label: "What exactly can you pull from product pages?",
    children: (
      <p>
        Pretty much everything you see as a customer:
        <ul>
          <li>All the pricing details (even hidden coupon deals)</li>
          <li>Inventory status and shipping options</li>
          <li>Reviews and questions (we can grab these too)</li>
          <li>Product specs and comparison charts</li>
          <li>Images and videos if you need them</li>
        </ul>
        Not sure if we can get something? Just ask - we love customization
        requests.
      </p>
    ),
  },
  {
    key: "4",
    label: "What happens when Amazon shows CAPTCHAs?",
    children: (
      <p>
        We've got this handled:
        <ul>
          <li>Our systems solve most CAPTCHAs automatically</li>
          <li>We slow down before Amazon gets suspicious</li>
          <li>If things get tricky, we switch approaches</li>
        </ul>
        You won't need to worry about this - we take care of the technical
        headaches.
      </p>
    ),
  },
  {
    key: "5",
    label: "Is this scraping thing actually legal?",
    children: (
      <p>
        Here's our straight answer:
        <ul>
          <li>We only take public data anyone can see</li>
          <li>We don't overload Amazon's servers</li>
          <li>We don't bypass logins or steal content</li>
        </ul>
        That said, we recommend using the data for research rather than copying
        Amazon directly.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can you show me how prices change over time?",
    children: (
      <p>
        Absolutely! We can:
        <ul>
          <li>Track price movements hour-by-hour</li>
          <li>Spot seasonal trends for you</li>
          <li>Alert you when prices hit your target</li>
          <li>Show how you stack up against competitors</li>
        </ul>
        Great for figuring out the best time to buy or adjust your prices.
      </p>
    ),
  },
  {
    key: "7",
    label: "How do I get the data you collect?",
    children: (
      <p>
        However works best for you:
        <ul>
          <li>API if you're tech-savvy</li>
          <li>Simple spreadsheets emailed regularly</li>
          <li>Direct to your database if you prefer</li>
          <li>Even a dashboard if you want visuals</li>
        </ul>
        We'll adapt to your workflow, not the other way around.
      </p>
    ),
  },
  {
    key: "8",
    label: "Do you work with Amazon sites outside the US?",
    children: (
      <p>
        Yes indeed! We cover:
        <ul>
          <li>All the major markets (UK, Germany, Japan, etc.)</li>
          <li>We handle currency conversions automatically</li>
          <li>Even local market quirks and promotions</li>
        </ul>
        Global expansion? We've got your back.
      </p>
    ),
  },
  {
    key: "9",
    label: "What if Amazon changes their website?",
    children: (
      <p>
        This happens regularly - but don't worry:
        <ul>
          <li>We detect changes immediately</li>
          <li>Usually fixed within an hour</li>
          <li>You'll get notified if there's ever an interruption</li>
        </ul>
        Consider this our problem, not yours.
      </p>
    ),
  },
  {
    key: "10",
    label: "How accurate is the data?",
    children: (
      <p>
        We take pride in getting it right:
        <ul>
          <li>Multiple checks catch errors</li>
          <li>We rescan anything that looks off</li>
          <li>Human spot checks for critical data</li>
        </ul>
        If we ever miss something, we'll fix it fast - no extra charge.
      </p>
    ),
  },
  {
    key: "11",
    label: "Can you build a custom solution for my business?",
    children: (
      <p>
        That's our specialty! Whether you need:
        <ul>
          <li>Special data points competitors don't track</li>
          <li>Unique scheduling for your industry</li>
          <li>Integration with your internal systems</li>
          <li>Custom reports with your branding</li>
        </ul>
        <strong>Just tell us what you need</strong> - we'll create a solution
        tailored exactly to your requirements and budget.
        <a href="/contact">Contact us</a> for a personalized quote.
      </p>
    ),
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div
      id="faq"
      className="w-full flex flex-col justify-center items-center gap-12 py-12 mt-12 px-4"
    >
      <h2 className="text-3xl lg:text-4xl capitalize font-semibold text-center">
        Frequently asked questions
      </h2>
      <Collapse
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
        className="max-w-3xl w-full"
      />
    </div>
  );
};

export default App;
