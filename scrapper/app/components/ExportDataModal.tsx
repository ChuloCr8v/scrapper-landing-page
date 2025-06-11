"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { emailData } from "../utils";
import { CloudDownloadIcon, FileDownIcon } from "lucide-react";

const ExportDataModal = ({
  visible,
  setVisible,
  product,
  openNotification,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  product: string;
  openNotification: () => void;
}) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleExportData = async () => {
    const values = await form.validateFields();

    const { name, email } = values;
    emailData(name, product, form, email, setVisible, openNotification);
  };

  return (
    <Modal
      open={visible}
      onCancel={handleCancel}
      closeIcon={false}
      footer={
        <div className="px-6 pb-6">
          <Button
            key="back"
            onClick={handleCancel}
            className="mr-2"
            size="large"
          >
            Cancel
          </Button>
          <Button
            key="submit"
            type="primary"
            size="large"
            icon={<CloudDownloadIcon className="h-4 mt-1" />}
            onClick={handleExportData}
            className="bg-blue-600 hover:bg-blue-700"
            iconPosition="end"
          >
            Export
          </Button>
        </div>
      }
    >
      <div className="flex flex-col justify-center items-center w-full overflow-hidden bg-gradient-to-b from-primary/10 from-5% to-transparent px-4">
        <div className="w-full flex flex-col justify-center items-center mt-12">
          <div className="p-6 w-fit relative flex flex-col justify-center items-center">
            <div className="absolute h-full w-full bg-primary/20 backdrop-blur-2xl rounded-full animate-pulse"></div>
            <div className="bg-primary/60 w-fit p-4 rounded-full relative z-50">
              <FileDownIcon className="text-white" />
            </div>
          </div>
          <p className="mt-2 text-gray-600 text-lg font-semibold">
            Download Report
          </p>
        </div>

        <Form form={form} layout="vertical" className="mt-6 w-full">
          <Form.Item
            name={"name"}
            label={"Full Name"}
            rules={[
              {
                required: true,
                message: `Please input your full name!`,
              },
            ]}
          >
            <Input placeholder="Enter full name" size="large" />
          </Form.Item>
          <Form.Item
            name={"email"}
            label={"Email"}
            className="-mt-2"
            rules={[
              {
                required: true,
                message: `Please input your email!`,
              },
            ]}
          >
            <Input placeholder="Enter email" size="large" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default ExportDataModal;
