"use client";

import { ArrowBigRightDash, Search } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Spin, Tag } from "antd";
import { FaCloudDownloadAlt, FaStar } from "react-icons/fa";
import { emailData } from "../utils";
import { FormInstance, useForm } from "antd/es/form/Form";
import ExportDataModal from "./ExportDataModal";
import { PricingItem } from "./Pricing";

export type PriceData = {
  asin: string;
  availability: string;
  brand: string;
  currency: string;
  description: string;
  image: string;
  price: string;
  rating: string;
  reviewCount: string;
  seller: string;
  title: string;
  url: string;
};

type Props = {
  data: PriceData[];
  isLoading: boolean;
  product: string;
};

const SearchResult = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);

  if (props.isLoading) {
    return (
      <div className="text-center pb-12 flex flex-col md:flex-row items-center gap-2 text-gray-600">
        <Spin />
        <p className="">
          Fetching competitor data, hold on, this might take a few minuites...
        </p>
      </div>
    );
  }

  if (!props.data.length) {
    return (
      <div className="text-center pb-12">
        <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Search className="w-12 h-12 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Ready to Analyze Competitor Prices?
        </h3>
        <p className="text-gray-600">
          Enter a product keyword above to see real-time competitive pricing
          data
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
      <div className="max-w-3xl  w-full space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Products List</h3>
          <div className="flex items-center gap-1">
            <Tag
              bordered={false}
              color="blue"
              className="rounded-full font-semibold"
            >
              Found {props.data.length} competitors
            </Tag>
          </div>
        </div>

        <div className="space-y-4 bg-white rounded-xl border p-6">
          {props.data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {index !== 0 && (
                <div className="w-[70%] place-self-center my-2 bg-gray-200 h-[1px]"></div>
              )}
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="rounded-full border h-20 w-20 p-3 flex item-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    width={120}
                    height={120}
                    className="max-w-full object-contain"
                    alt={item.title}
                  />
                </div>

                <div className="flex items-center justify-between w-full">
                  <div className="space-y-1">
                    <h2 className="font-semibold max-w-[450px]">
                      {item.title.slice(0, 30)}...
                    </h2>

                    <div className="flex items-center gap-4">
                      <div className="flex space-x-2">
                        <p className="">{item.price}</p>
                      </div>

                      <p className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="">{item.rating}</span>{" "}
                        <span>({item.reviewCount})</span>
                      </p>
                      <Tag className="rounded-full">Amazon</Tag>
                      <Tag
                        className="rounded-full"
                        color={availability(item.availability)}
                      >
                        {item.availability}
                      </Tag>
                    </div>
                  </div>

                  <Button type="link" className="p-0 border-0 ">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-4 rounded-full text-primary text-xl"
                    >
                      <ArrowBigRightDash />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex items-end justify-end !mt-6">
          <Button
            onClick={() => setOpenModal(true)}
            type="primary"
            className="w-[144px]"
          >
            Export
            <FaCloudDownloadAlt className="text-lg" />
          </Button>
        </div>
      </div>

      <ExportDataModal
        visible={openModal}
        setVisible={setOpenModal}
        product={props.product}
      />
    </div>
  );
};

export default SearchResult;

export const availability = (availability: string) => {
  switch (availability.toLowerCase()) {
    case "in stock":
      return "green";
    case "limited stock":
      return "orange";
    default:
      return "red";
  }
};
