"use client";

import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { Eye, Search } from "lucide-react";
import { useForm, useWatch } from "antd/es/form/Form";
import SearchResult from "./SearchResult";
import { getData } from "../utils";

const Demo = () => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  const searchItem = useWatch("product", form);

  return (
    <div
      id="demo"
      className="flex flex-col justify-center items-center gap-10 bg-gradient-to-b backdrop-blur-xl from-primary/30 to-transparent pt-12 lg:py-24 px-4"
    >
      <div className="space-y-3">
        <h3 className="font-semibold text-center text-3xl lg:text-4xl">
          See Your Competition's{" "}
          <span className="block text-primary">Pricing Strategy</span>
        </h3>
        <p className="text-sm text-gray-600 max-w-xl text-center">
          Enter any product keyword and instantly discover how your competitors
          are pricing similar items. Get real-time insights to optimize your
          pricing strategy.
        </p>
      </div>

      <div className="rounded-xl bg-primary/10 p-4 py-6 flex flex-col justify-center items-center max-w-xl w-full">
        <Form form={form} className="flex items-center w-full px-4 gap-2">
          <Form.Item
            name="product"
            className="w-full"
            rules={[
              {
                required: true,
                message: "Please enter a product name",
              },
            ]}
          >
            <Input className="w-full rounded-md h-9" allowClear />
          </Form.Item>

          <Button
            loading={isLoading}
            className="rounded-md h-9 -mt-6"
            type="primary"
            disabled={!searchItem}
            onClick={() =>
              getData(
                form.getFieldValue("product"),
                setIsLoading,
                form,
                setData,
                30
              )
            }
            icon={<Search className="h-5" />}
            iconPosition="start"
          >
            Search
          </Button>
        </Form>

        <p className="flex items-center text-gray-600 text-sm">
          <Eye className="h-4" />{" "}
          <span className="">Live demo - Real competitor data</span>
        </p>
      </div>

      <SearchResult data={data} isLoading={isLoading} product={searchItem} />
    </div>
  );
};

export default Demo;
