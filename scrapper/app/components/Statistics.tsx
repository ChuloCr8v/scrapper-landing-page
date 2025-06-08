import React from "react";

const data = [
  {
    label: "Products Scrapped",
    count: "2.5M+",
  },
  {
    label: "Happy Clients",
    count: "200+",
  },
  {
    label: "Accuracy",
    count: "98.9%",
  },
];

const Statistics = () => {
  return (
    <section className="flex flex-col items-center justify-center relative z-50 mt-4 px-4 translate-y-10">
      <div className="max-w-5xl grid grid-cols-3 gap-4 w-full">
        {data.map((item) => (
          <div className="bg-white backdrop-blur-2xl p-6 rounded-xl shadow-lg  w-full text-center border">
            <p className="font-semibold text-2xl text-primary">{item.count}</p>
            <p className="font-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
