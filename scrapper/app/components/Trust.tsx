import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Trust = (props: Props) => {
  const data = [
    {
      label: "Shopify Partner",
      icon: "/shopify.webp",
    },
    {
      label: "Google Partner",
      icon: "/google.jpg",
    },
    {
      label: "Amazon Verified",
      icon: "/amazon.jpg",
    },
    {
      label: "GDPR Compliant",
      icon: "/gdpr.webp",
    },
  ];

  return (
    <section className="max-w-5xl place-self-center py-12 bg-white border rounded-3xl relative z-20 mt-20 shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <p className="text-2xl font-bold mb-8">
          Trusted by 200+ eCommerce brands and agencies
        </p>
        <Marquee loop={0} gradient>
          {data.map((item) => (
            <div className="flex items-center gap-2 mx-12">
              <Image src={item.icon} alt={item.label} width={35} height={35} />
              <p className="">{item.label}</p>
            </div>
          ))}
        </Marquee>
        <p className="text-sm text-muted-foreground mt-4">
          Powered scrapers for 3 of the top 50 Shopify stores
        </p>
      </div>
    </section>
  );
};

export default Trust;
