

"use client";

import React, { useState } from "react";
import { Button, Form, Input, Modal, Table, Image, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const CreatePackagesTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "0",
      image: "/asia04.png",
      title: "Immersion in culture Oman",
      countryName: "Oman",
      continent: "Asia",
      price: "5656.00",
    },
    {
      key: "1",
      image: "/asia02.png",
      title: "Adventure in Sahara",
      countryName: "Morocco",
      continent: "Africa",
      price: "4599.00",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  // Open modal with selected record data
  const showUpdateModal = (record) => {
    setEditingRecord(record);
    setIsModalOpen(true);
  };

  // Handle modal form submission
  const handleModalSubmit = async (values) => {
    console.log(values, 'values field')
    const updatedData = dataSource.map((item) => console.log(item.countryName) );
    //   item.key === editingRecord.key ? { ...item, ...values } : item

    // );
    setDataSource(updatedData);
    console.log(values, 'update modal here....')

    // Simulate API call
    // try {
    //   await axios.put("/api/update", { ...editingRecord, ...values });
    //   console.log("Data updated successfully!");
    // } catch (error) {
    //   console.error("Failed to update data:", error);
    // }

    // setIsModalOpen(false);
  };

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (text) => <Image src={text} alt="Package" width={50} height={50} />,
    },
    { title: "Title", dataIndex: "title" },
    { title: "Country Name", dataIndex: "countryName" },
    { title: "Continent", dataIndex: "continent" },
    { title: "Price", dataIndex: "price" },
    {
      title: "Action",
      render: (_, record) => (
        <div className="flex gap-4">
          <Popconfirm title="Are You Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>
              <DeleteOutlined className="bg-gray-100 text-red-600 text-md p-2 rounded" />
            </a>
          </Popconfirm>
          <Button onClick={() => showUpdateModal(record)}>Update</Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="key"
        bordered
      />

      {/* Modal for updating data */}
      <Modal
        title="Update Package"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          initialValues={editingRecord}
          onFinish={handleModalSubmit}
          layout="vertical"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Title is required!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Country Name"
            name="countryName"
            rules={[{ required: true, message: "Country Name is required!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Continent"
            name="continent"
            rules={[{ required: true, message: "Continent is required!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Price is required!" }]}
          >
            <Input />
          </Form.Item>
          <div className="flex justify-end gap-2">
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CreatePackagesTable;
