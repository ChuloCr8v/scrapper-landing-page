import { ColumnProps } from "antd/es/table";
import { ArrowRight, StarIcon, StarsIcon } from "lucide-react";
import React from "react";
import { availability, PriceData } from "./SearchResult";
import Image from "next/image";
import { Button, Table, Tag } from "antd";
import { FaStar } from "react-icons/fa";

type Props = {
  results: PriceData[];
};

const ResultsTable = (props: Props) => {
  const columns: ColumnProps<PriceData>[] = [
    {
      title: "SN",
      dataIndex: "sn",
      key: 1,
      render: (_, _record, index) => index + 1,
      width: 50,
    },
    {
      title: "Product",
      dataIndex: "product",
      width: 300,
      key: 2,
      render: (_, record) => {
        return (
          <div className="flex items-center gap-4">
            <Image
              src={record.images[0]}
              width={120}
              height={120}
              className="rounded-xl border max-w-full object-contain h-20 w-20"
              alt={record.title}
            />
            <h2 className="font-semibold">{record.title.slice(0, 60)}...</h2>
          </div>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      width: 200,
      render: (_, record) => {
        return (
          <p className="flex items-center gap-2">
            <FaStar className="text-yellow-600" />
            <span className="">{record.rating}</span>{" "}
            <span>({record.review_count} reviews)</span>
          </p>
        );
      },
    },
    {
      title: "Sales Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Original Price",
      dataIndex: "original_price",
      key: "originalPrice",
    },
    {
      title: "Market Place",
      dataIndex: "seller",
      key: "seller",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (_, record) => {
        return (
          <Tag
            className="rounded-full"
            color={availability(record.availability)}
          >
            {record.availability}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      fixed: true,

      render: (_, record) => {
        return (
          <Button
            type="link"
            className="!text-black p-0"
            icon={<ArrowRight className="h-4 mt-2" />}
            iconPosition="end"
          >
            <a
              href={record.url}
              className="text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Product
            </a>
          </Button>
        );
      },
    },
  ];
  return (
    <div className="w-full">
      <Table
        className="rounded-xl shadow w-full overflow-hidden !bg-transparent"
        dataSource={props.results}
        columns={columns}
        scroll={{ x: 1200 }}
        size="small"
      />
    </div>
  );
};

export default ResultsTable;
