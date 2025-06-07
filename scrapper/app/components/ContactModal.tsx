"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal, Form, Input, Select, Button, InputNumber, message } from "antd";
import { DollarSign, Mail, ShoppingCart, UserCircle } from "lucide-react";
import { pricingData, PricingItem, pricingItemData } from "./Pricing";
import { twMerge } from "tailwind-merge";
import { FaCheck } from "react-icons/fa";

const RequestServiceModal = ({
  visible,
  setVisible,
  setPricingItems,
  data,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setPricingItems: Dispatch<SetStateAction<PricingItem>>;
  data: PricingItem;
}) => {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<PricingItem>(pricingItemData);

  useEffect(() => {
    setCurrentPlan(data);
    form.setFieldsValue({
      plan: data.title,
      price: data.price,
    });
  }, [data, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setConfirmLoading(true);
        console.log("Form values:", values);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
          message.success("Service request submitted successfully!");
          form.resetFields();
          setPricingItems(pricingItemData);
        }, 1500);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setPricingItems(pricingItemData);
    setVisible(false);
    form.resetFields();
  };

  const formData = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      label: "Business Name",
      name: "businessName",
      type: "text",
      placeholder: "Enter your business name",
      required: false,
    },
    {
      label: "Niche",
      name: "niche",
      type: "text",
      placeholder: "Enter your business niche",
      required: false,
    },
    {
      label: "Plan",
      name: "plan",
      type: "select",
      options: pricingData.map((item) => ({
        label: item.title,
        value: item.title,
      })),
      initialValue: currentPlan.title,
      required: true,
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      initialValue: currentPlan.price,
      icon: <DollarSign className="text-gray-400" size={12} />,
      required: true,
    },
    {
      label: "Extra Information",
      name: "extraInfo",
      type: "textarea",
      placeholder:
        "Provide extra information here, including your preferred products and other information",
      required: false,
    },
  ];

  const handleSetPricingItems = (value: string) => {
    const planItem = pricingData.find((item) => item.title === value);
    if (planItem) {
      setCurrentPlan(planItem);
      form.setFieldsValue({
        price: planItem.price,
      });
    }
  };

  const renderFormItem = (item: {
    name: string;
    type: string;
    placeholder?: string;
    options?: { label: string; value: string }[];
    initialValue?: number | string;
    icon?: React.ReactNode;
    required?: boolean;
  }) => {
    switch (item.type) {
      case "select":
        return (
          <Select
            placeholder={item.placeholder}
            options={item.options}
            onChange={handleSetPricingItems}
          />
        );
      case "number":
        return (
          <InputNumber
            className="w-full"
            placeholder={item.placeholder}
            addonBefore={item.icon}
            disabled
            value={currentPlan.price}
          />
        );
      case "textarea":
        return <Input.TextArea placeholder={item.placeholder} rows={4} />;
      default:
        return (
          <Input
            placeholder={item.placeholder}
            type={item.type}
            prefix={item.icon}
          />
        );
    }
  };

  return (
    <Modal
      title="Service Request Form"
      open={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      width={700}
      footer={[
        <Button key="back" onClick={handleCancel} className="mr-2">
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={confirmLoading}
          onClick={handleOk}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Submit Request
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        className="mt-6 grid grid-cols-2 gap-x-2"
        initialValues={{
          plan: currentPlan.title,
          price: currentPlan.price,
        }}
      >
        {formData.map((item, index) => (
          <Form.Item
            key={index}
            name={item.name}
            label={item.label}
            rules={[
              {
                required: item.required,
                message: `Please input your ${item.label.toLowerCase()}!`,
              },
            ]}
            className={twMerge(item.type === "textarea" && "col-span-2")}
            extra={
              item.name === "plan" ? (
                <div className="mt-2 space-y-1">
                  {currentPlan.features.map((feature, idx) => (
                    <div
                      className="flex items-center gap-2 text-xs text-primary"
                      key={idx}
                    >
                      <FaCheck className="text-[10px]" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              ) : undefined
            }
          >
            {renderFormItem(item)}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default RequestServiceModal;
