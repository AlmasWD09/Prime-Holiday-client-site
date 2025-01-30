"use client";

import { Select, Input, Button, Form, Upload } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { UploadOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

const EditDestination = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [singleContentData, setSingleContentData] = useState({});
  const [contentData, setContentData] = useState([]);
  const [fileList, setFileList] = useState([]);
  const router = useRouter();

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
            continent_id: result.country.continent_id,
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


  console.log(contentData.map((item) => item))
  // Form submit handler
  const handleSubmit = async (values) => {
    console.log(values)

    const formData = new FormData();
    formData.append("continent_id", values?.continent_id);
    formData.append("name", values?.name);
    formData.append("title", values?.title);
    formData.append("_method", "PUT");

    // Ensure the file exists before appending
    if (fileList && fileList.length > 0 && fileList[0].originFileObj) {
      formData.append("image", fileList[0].originFileObj);
    } else {
      console.warn("No image file selected");
    }
    try {

      const response = await axios.post(
        `http://10.0.80.13:8000/api/admin/country/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
        Swal.fire({
              position: "top-center",
              icon: "success",
              title:'Destination Update Succesfully',
             })
      router.push('/admin/dashboard/create-destination')

    } catch (error) {
      console.log(error)
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
        <div className="max-w-2xl mb-2">
          <Form.Item
            label="Select the continent"
            name="continent_id"
          // rules={[{ message: "Please select a country!" }]}
          >
            <Select placeholder="Select a country">
              {contentData.map((country) => (
                <Select.Option key={country.id} value={country.id}>
                  {country.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

        </div>

        {/* Country Name */}
        <div className="mb-2">
          <Form.Item
            name="name"
            label="Country Name"
            rules={[{
              message: "Please enter the country name!"
            }]}
          >
            <Input placeholder="Enter the country name" className="max-w-sm" />
          </Form.Item>
        </div>

        {/* Title Field */}
        <div className="mb-2">
          <Form.Item
            label="Title"
            name="title"
            rules={[{
              message: "Please enter the title!"
            }]}
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
          <Button  htmlType="submit" style={{backgroundColor:"#6B7280",color:"white", border:"1px solid #6B7280"}}>
            Update Destination
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditDestination;
