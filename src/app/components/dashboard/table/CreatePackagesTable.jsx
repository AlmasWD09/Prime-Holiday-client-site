"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Table, Image, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const CreatePackagesTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    showSizeChanger: true,
    pageSizeOptions: ["5", "10", "20"],
  });

  useEffect(() => {
    // Fetch data dynamically from the JSON file
    const fetchData = async () => {
      const response = await fetch("/createPackages.json");
      const result = await response.json();
      setDataSource(result);
      setPagination((prev) => ({ ...prev, total: result.length }));
    };

    fetchData();
  }, []);

  const handleTableChange = (pagination) => {
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  const showUpdateModal = (record) => {
    setEditingRecord(record);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (values) => {
    const updatedData = dataSource.map((item) =>
      item.key === editingRecord.key ? { ...item, ...values } : item
    );
    setDataSource(updatedData);
    setIsModalOpen(false);
  };

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    setPagination((prev) => ({ ...prev, total: newData.length }));
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
          <a onClick={() => showUpdateModal(record)}>
            <EditOutlined className="bg-gray-100 text-red-600 text-md p-2 rounded" />
          </a>
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
        pagination={pagination}
        onChange={handleTableChange}
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
