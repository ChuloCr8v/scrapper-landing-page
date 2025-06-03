import {
  ChevronDown,
  Code,
  File,
  FileText,
  Info,
  List,
  Search,
  ShoppingCart,
  StarIcon,
  Table,
} from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Dropdown, MenuProps, Popover, Spin, Tag } from "antd";
import ResultsTable from "./ResultsTable";

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
  const [tableView, setTableView] = useState(true);

  if (props.isLoading) {
    return (
      <div className="text-center pb-12 flex items-center gap-2 text-gray-600">
        <Spin />
        <p className="">Fetching competitor data</p>
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

            <Popover
              content={
                <Info /> +
                " " +
                (tableView ? "View in list mode" : "View in table mode")
              }
            >
              <Button
                type="primary"
                onClick={() => setTableView(!tableView)}
                className="px-1 bg-gradient-to-br from-primary to-blue-900 shadow-lg "
              >
                {tableView ? (
                  <List className="h-5" />
                ) : (
                  <Table className="h-5" />
                )}
              </Button>
            </Popover>
          </div>
        </div>

        {!tableView ? (
          <div className="space-y-4 h-96 overflow-y-auto w-full hide-scrollbar">
            {props.data.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between shadow-[0_-2px_6px_-1px_rgba(0,0,0,0.1)] border rounded-2xl p-4 bg-white/50 !backdrop-blur-2xl max-w-3xl w-full sticky top-0"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.images[0]}
                    width={120}
                    height={120}
                    className="rounded-xl border max-w-full object-contain h-20 w-20"
                    alt={item.title}
                  />

                  <div className="space-y-2">
                    <h2 className="font-semibold max-w-[350px]">
                      {item.title.slice(0, 60)}...
                    </h2>

                    <div className="flex items-center gap-6">
                      <p className="flex items-center">
                        <StarIcon />
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
                </div>
                <div className="space-y-2">
                  <h3 className="text-md font-semibold">
                    {item.currency} {item.price}
                  </h3>
                  <div className="flex items-end gap-2">
                    <p className="space-x-2">
                      <span className="text-gray-600 divide-dashed">
                        {item.currency} {item.original_price}
                      </span>
                      <Tag color="red">
                        {(Number(item.price.slice(0, 1)) /
                          Number(item.original_price.slice(0, 1))) *
                          100}
                        % OFF
                      </Tag>
                    </p>
                  </div>
                  <Button icon={<ShoppingCart />}>
                    <a
                      href={item.url}
                      className=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Product
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ResultsTable results={props.data} />
        )}

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
