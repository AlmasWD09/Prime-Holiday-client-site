"use client";

import { Select, Input, Button, Form, Upload } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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
    setFileList(newFileList);
  };

  // Form submit handler
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("country_id", id);
      formData.append("name", values.name);
      formData.append("title", values.title);
      formData.append("image", values.image[0].originFileObj);

      formData.forEach((value, key) => {
        console.log('form data', key,"=====", value);
      });

      if (fileList.length > 0) {
        formData.append("image", fileList[0].originFileObj);
      }

      formData.append("continent", values.continent);

      const response = await axios.put(
        `http://10.0.80.13:8000/api/admin/country/update/30/${id}`,
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
    <div className="m-8 p-8">
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <h1 className="font-Roboto font-bold text-primary text-[24px]">
          Edit Destination
        </h1>

        {/* Select Continent */}
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
            <Input placeholder="Enter the destination title" className="max-w-sm" />
          </Form.Item>
        </div>

        {/* Image Upload */}
        <div className="mb-2 max-w-sm">
          <Form.Item
            label="Upload Image"
            name="image"
            rules={[{ required: true, message: "Please upload an image!" }]}
          >
            <Upload
              listType="picture"
              fileList={fileList}
              beforeUpload={() => false}
              onChange={handleImageChange}
            >
              <Button>Upload Image</Button>
            </Upload>
          </Form.Item>
        </div>

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
