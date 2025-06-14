"use client";

import { ArrowBigRightDash, Search } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Button, notification, Spin, Tag } from "antd";
import { FaCloudDownloadAlt, FaRegCheckCircle, FaStar } from "react-icons/fa";
import ExportDataModal from "./ExportDataModal";

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
  const [api, contextHolder] = notification.useNotification();

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

  const openNotification = () => {
    api.open({
      message: "Processing products list",
      description:
        "Your request is currently processing and will be sent to your email once completed.",
      icon: <FaRegCheckCircle style={{ color: "#108ee9" }} />,
    });
  };

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

        <div className="bg-white rounded-xl border overflow-hidden">
          {props.data.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex flex-col items-center relative hover:bg-primary/10 p-6 border-b duration-200"
            >
              {/* {index !== 0 && (
                <div className="w-full md:w-[70%] place-self-center bg-gray-200 h-[1px] my-3"></div>
              )} */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-2">
                  <div className="rounded-full md:border md:h-20 md:w-20 w-full p-3 flex item-center justify-center overflow-hidden">
                    <Image
                      src={item.image.trim()}
                      width={120}
                      height={120}
                      className="max-w-full h-20 object-contain -mt-3"
                      alt={item.title}
                    />
                  </div>
                  <h2 className="font-semibold w-full text-left md:hidden">
                    {item.title.slice(0, 50)}...
                  </h2>
                </div>

                <div className="flex items-center justify-between w-full md:border-none md:p-0 border p-2 rounded-xl">
                  <div className="space-y-1">
                    <h2 className="hidden md:flex font-semibold max-w-[450px]">
                      {item.title.slice(0, 30)}...
                    </h2>

                    <div className="flex items-center flex-wrap gap-4">
                      <div className="flex space-x-2">
                        <p className="font-semibold text-xl">${item.price}</p>
                      </div>

                      <p className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="">{item.rating}</span>{" "}
                        <span>({item.reviewCount} reviews)</span>
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

                  <Button type="link" className="p-0 border-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-4 rounded-full text-primary text-xl hidden md:flex"
                    >
                      <ArrowBigRightDash />
                    </a>
                  </Button>
                </div>
              </div>
            </a>
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
        openNotification={openNotification}
      />

      {contextHolder}
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
