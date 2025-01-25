"use client";

import { Select, Input, Button, Form, Upload } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { UploadOutlined } from "@ant-design/icons";

const EditDestination = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [singleContentData, setSingleContentData] = useState(null);
  const [contentData, setContentData] = useState([]);
  const [fileList, setFileList] = useState([]);

  // Fetch all continents for Select options
  useEffect(() => {
    const fetchContinents = async () => {
      try {
        const response = await fetch("http://10.0.80.13:8000/api/admin/continent");
        const result = await response.json();
        setContentData(result.continents);
      } catch (error) {
        console.error("Error fetching continents:", error);
      }
    };
    fetchContinents();
  }, []);

  // Fetch single country data for editing
  useEffect(() => {
    const fetchSingleCountry = async () => {
      try {
        const response = await fetch(
          `http://10.0.80.13:8000/api/admin/country/${id}`
        );
        const result = await response.json();
        setSingleContentData(result.country);

        // Set form default values when data is loaded
        if (result.country) {
          form.setFieldsValue({
            continent: result.country.continentId,
            name: result.country.name,
            title: result.country.title,
          });
        }

        // Set default image in Upload
        if (result.country?.image) {
          setFileList([
            {
              uid: "-1",
              name: "image.png",
              status: "done",
              url: result.country.image,
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchSingleCountry();
  }, [id, form]);

  // Handle image changes
  const handleImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList.slice(-1));
  };

  // Form submit handler
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("continent_id", values.continent || id || "24");
      formData.append("name", values.name || "test_name");
      formData.append("title", values.title || "Default Title");

      // Handle image field
      if (fileList[0]?.originFileObj) {
        formData.append("image", fileList[0].originFileObj);
      } else {
        formData.append("image", ""); // Null if no image, matching Postman
      }

      // Debugging the formData
      formData.forEach((value, key) => {
        console.log("formData:", key, value);
      });

      const response = await axios.put(
        `http://10.0.80.13:8000/api/admin/country/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        alert("Destination updated successfully!");
      }
    } catch (error) {
      console.error("Error updating destination:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[800px]">
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        style={{ border: "1 px solid red", width: "50%" }}
      >
        <h1 className="font-Roboto font-bold text-primary text-[24px]">
          Edit Destination
        </h1>

        {/* Continent Selection */}
        {/* <div className="max-w-2xl mb-2">
          <Form.Item
            name="continent"
            label="Select the Continent"
            rules={[{ required: true, message: "Please select a continent!" }]}
          >
            <Select
              placeholder="Select a continent"
              style={{ width: 200 }}
              options={contentData.map((continent) => ({
                value: continent.id,
                label: continent.name,
              }))}
            />
          </Form.Item>
        </div> */}

        {/* Country Name */}
        <div className="mb-2">
          <Form.Item
            name="name"
            label="Country Name"
            rules={[{ required: true, message: "Please enter the country name!" }]}
          >
            <Input placeholder="Enter the country name" className="max-w-sm" />
          </Form.Item>
        </div>

        {/* Title Field */}
        <div className="mb-2">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter the title!" }]}
          >
            <Input
              placeholder="Enter the destination title"
              className="max-w-sm"
            />
          </Form.Item>
        </div>

        {/* Image Upload */}
        <Form.Item
          label="Upload Image"
          name="image"
          rules={[{ required: true, message: "Please upload an image!" }]}
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            maxCount={1} // Only allow one file
            beforeUpload={() => false} // Prevent auto-upload
            onChange={handleImageChange}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Destination
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditDestination;
