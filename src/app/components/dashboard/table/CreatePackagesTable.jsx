"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Table, Image, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditPackagesModal from "../modal/EditPackagesModal";

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

  const [readMoremodal, setMeadMoremodal] = useState(false);
  const [readMoreOpen, setReadMoreOpen] = useState(false)
  const [modal, setModal] = useState(false);
  const [singleData, setSingleData] = useState(null)

  
  const Itinerarys = [
    {
        id: "01",
        day: "Day 01",
        lunchPeriod: "Dinner",
        description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
    },
    {
        id: "02",
        day: "Day 02",
        lunchPeriod: "Breakfast",
        description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
    },
    {
        id: "03",
        day: "Day 03",
        lunchPeriod: "Full-Board",
        description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
    },
    {
        id: "04",
        day: "Day 04",
        lunchPeriod: "Full-Board",
        description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
    },
    {
        id: "05",
        day: "Day 05",
        lunchPeriod: "Breakfast & Dinner",
        description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
    },
    {
        id: "06",
        day: "Day 06",
        lunchPeriod: "Breakfast & Dinner",
        description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
    },
    {
        id: "07",
        day: "Day 07",
        lunchPeriod: "Breakfast & Dinner",
        description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
    },
    {
        id: "08",
        day: "Day 08",
        lunchPeriod: "Breakfast & Dinner",
        description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
    },
    {
        id: "09",
        day: "Day 09",
        lunchPeriod: "Breakfast",
        description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
    },
]

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
    console.log(record, 'line------> 40 createpackagesTable')
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

  const hnadleClick = (id) => {
    console.log(id)
    const findData = Itinerarys.find((item) => item.id === id)
    setSingleData(findData)
    setMeadMoremodal(true);
    setReadMoreOpen(true);
  }

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
          {/* <a onClick={() => showUpdateModal(record)}>
            <EditOutlined className="bg-gray-100 text-red-600 text-md p-2 rounded" />
          </a> */}
          <button onClick={() => hnadleClick(record.id)}>Edit</button>
          {
            readMoremodal && <EditPackagesModal readMoreOpen={readMoreOpen} setReadMoreOpen={setReadMoreOpen} singleData={singleData} />
          }

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
