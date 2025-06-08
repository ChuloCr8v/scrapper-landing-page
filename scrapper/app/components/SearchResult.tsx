import {
  ArrowBigRightDash,
  ChevronDown,
  Code,
  File,
  FileText,
  Search,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button, Dropdown, MenuProps, Spin, Tag } from "antd";
import { FaStar } from "react-icons/fa";

export type PriceData = {
  about: string;
  availability: string;
  currency: string;
  features: string[];
  images: string[];
  original_price: string;
  price: string;
  rating: string;
  review_count: string;
  seller: string;
  title: string;
  url: string;
};

type Props = {
  data: PriceData[];
  isLoading: boolean;
};

const items: MenuProps["items"] = [
  {
    key: "csv",
    label: (
      <div className="flex items-center gap-2">
        <FileText className="h-5" />
        <span>CSV (Excel compatible)</span>
      </div>
    ),
  },
  {
    key: "xlsx",
    label: (
      <div className="flex items-center gap-2">
        <File className="h-5" />
        <span>Excel Workbook (.xlsx)</span>
      </div>
    ),
  },
  {
    key: "json",
    label: (
      <div className="flex items-center gap-2">
        <Code size={16} className="h-5" />
        <span>JSON (Raw data)</span>
      </div>
    ),
  },
];

const SearchResult = (props: Props) => {
  if (props.isLoading) {
    return (
      <div className="text-center pb-12 flex items-center gap-2 text-gray-600">
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
          <h3 className="text-xl font-semibold">Competitve Price Analysis</h3>
          <div className="flex items-center gap-1">
            <Tag bordered={false} className="rounded-full">
              Found {props.data.length} competitors
            </Tag>
          </div>
        </div>

        <div className="space-y-4 h-96 overflow-y-auto w-full hide-scrollbar bg-white rounded-xl shadow-lg p-6">
          {props.data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="rounded-full border h-20 w-20 p-3 flex item-center justify-center overflow-hidden">
                  <Image
                    src={item.images[0]}
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
                        <p className="">{item.price}00</p>
                        <p className="text-red-600 text-xs flex items-center justify-center overflow-hidden relative">
                          {item.original_price}{" "}
                          <span className="absolute w-full bg-red-600 h-[1px]"></span>
                        </p>
                      </div>

                      <p className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="">{item.rating}</span>{" "}
                        <span>({item.review_count})</span>
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
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button type="primary" className="w-[144px]">
              Export
              <ChevronDown size={14} className="dropdown-chevron" />
            </Button>
          </Dropdown>
        </div>
      </div>
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
