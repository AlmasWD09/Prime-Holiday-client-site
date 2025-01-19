"use client";

import { Select, Input, Button, Form, Upload } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const EditPage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [contentData, setContentData] = useState([]);
  const [singleContentData, setSingleContentData] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState(null);

  // Load all continent data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://10.0.80.13:8000/api/admin/continent");
      const result = await response.json();
      setContentData(result.continents); // Set continent data
    };

    fetchData();
  }, []);

  // Load single country data and set form fields
  useEffect(() => {
    const fetchSingleData = async () => {
      const response = await fetch(
        `http://10.0.80.13:8000/api/admin/country/${id}`
      );
      const result = await response.json();
      setSingleContentData(result.country); // Set single country data
      setSelectedContinent(result.country?.continentId || null); // Set selected continent

      // Set default values in the form
      form.setFieldsValue({
        continent: result.country?.continentId,
        countryName: result.country?.name,
        title: result.country?.title,
      });

      // Set default image if available
      if (result.country?.image) {
        setFileList([
          {
            uid: "-1",
            name: "image.png",
            status: "done",
            url: result.country.image, // Image URL from server
          },
        ]);
      }
    };

    fetchSingleData();
  }, [id, form]);

  // Handle image change
  const handleImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    const formData = {
      ...values,
      image: fileList[0]?.url || null, // Include the image URL or uploaded file
    };

    try {
      const response = await axios.put(
        `http://10.0.80.13:8000/api/admin/country/${id}`,
        formData
      );
      console.log("Updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  return (
    <div className="m-8 p-8">
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <h1 className="font-Roboto font-bold text-primary text-[24px]">
          Edit Destination
        </h1>

        {/* Select Continent */}
        <div className="max-w-2xl mb-2">
          <p>Select the continent</p>
          {contentData.length > 0 && singleContentData ? (
            <Select
            defaultValue={'lsf'}
              value={selectedContinent} // Controlled value
              onChange={(value) => setSelectedContinent(value)} // Update selected value
              style={{ width: 200 }}
            >
              {contentData.map((singleContent) => (
                <Select.Option key={singleContent.id} value={singleContent.id}>
                  {singleContent.name}
                </Select.Option>
              ))}
            </Select>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Country Name */}
        <div className="mb-2">
          <p>Country Name</p>
          <Form.Item
            name="countryName"
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
            <Input placeholder="Enter the destination name" className="max-w-sm" />
          </Form.Item>
        </div>

        {/* Image Upload Field */}
        <div className="mb-2 max-w-sm">
          <Form.Item
            label="Upload Image"
            name="image"
            rules={[{ required: true, message: "Please upload an image!" }]}
          >
            <Upload
              listType="picture"
              fileList={fileList}
              beforeUpload={() => false} // Prevent automatic upload
              onChange={handleImageChange}
            >
              <Button>Upload Image</Button>
            </Upload>
          </Form.Item>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditPage;
