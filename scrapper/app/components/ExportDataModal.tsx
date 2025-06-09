"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { emailData } from "../utils";

const ExportDataModal = ({
  visible,
  setVisible,
  product,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  product: string;
}) => {
  const [form] = Form.useForm();

  const email = form.getFieldValue("email");

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  return (
    <Modal
      title="Service Request Form"
      open={visible}
      onCancel={handleCancel}
      width={500}
      footer={[
        <Button key="back" onClick={handleCancel} className="mr-2">
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => emailData(product, form, 10, email, setVisible)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Send
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" className="mt-6">
        <Form.Item
          name={"email"}
          label={"Email"}
          rules={[
            {
              required: true,
              message: `Please input your email!`,
            },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ExportDataModal;
