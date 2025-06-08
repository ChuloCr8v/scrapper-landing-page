import React from "react";

type Props = {};

const HowItWoks = (props: Props) => {
  const data = [
    {
      title: "Share Targets",
      content:
        " Give us competitor URLs and data points (e.g., price, ratings).",
    },
    {
      title: "We Extract the data you need",
      content:
        " Receive structured data within 48 hours (or real-time via API).",
    },
    {
      title: "Take Action",
      content: "Feed data into your repricer, ad bids, or inventory system.",
    },
  ];
  return (
    <section className="py-20" id="how-it-works">
      <div className="flex flex-col justify-center items-center px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your Competitor Data <br></br>in 3 Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              className="text-center max-w-[300px] w-full flex flex-col justify-center items-center"
              key={index}
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-6 text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWoks;
