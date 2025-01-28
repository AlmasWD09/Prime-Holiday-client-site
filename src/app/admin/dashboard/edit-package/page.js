"use client";

import { LeftOutlined } from "@ant-design/icons";
import { Select, Input, Button, Form, Upload, Row, Col } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextEditor from "@/app/components/textEditor/TextEditor";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
// Dynamic import for JoditEditor
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const EditPackage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [form] = Form.useForm();
  const [singlePackage, setSinglePackage] = useState({});
  const [editorContent, setEditorContent] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [items, setItems] = useState([]);
  const [itemsExcludes, setItemsExcludes] = useState([]);

  const [hasMounted, setHasMounted] = useState(false);




  useEffect(() => {
    // Fetch the package details
    const fetchSingleData = async () => {
      try {
        const response = await axios.get(`http://10.0.80.13:8000/api/admin/destination/${id}`);
        setSinglePackage(response.data.destination);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };

    fetchSingleData();
  }, [id]);

  useEffect(() => {
    // Fetch country data
    const fetchCountryData = async () => {
      try {
        const response = await axios.get("http://10.0.80.13:8000/api/admin/country");
        setCountryData(response.data.countries.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, []);

  useEffect(() => {
    // Populate form with fetched data
    if (singlePackage?.id) {
      // Ensure the image is formatted correctly for the Upload component
      const formattedData = {
        ...singlePackage,
        image: singlePackage.image
          ? [
            {
              uid: "-1", // Unique identifier for the file
              name: singlePackage.image.split('/').pop(), // Extract the file name from the URL
              status: "done", // Status to show the file is uploaded
              url: singlePackage.image, // URL of the uploaded image
            },
          ]
          : [], // Default to an empty array if no image exists
      };

      form.setFieldsValue(formattedData);
      setEditorContent(singlePackage.description || "");
    }
  }, [singlePackage, form]);


  const handleSubmitPackage = async (values) => {
    console.log(values.image)
    try {
      const formData = new FormData();
      formData.append("country_id", id);
      formData.append("name", values.name);
      formData.append("title", values.title);
      formData.append("description", editorContent);
      formData.append("price", values.price);
      // formData.append("image", values.image[0].originFileObj);
      formData.append("days", values.days);
    
      // formData.append("includes_excludes", JSON.stringify({
      //   "includes": items?.map(i => i.text),
      //   "excludes": itemsExcludes?.map(i => i.text)
      // }));
      // formData.append("hotels", JSON?.stringify(allhotelInfo));
      // formData.append("price_validity", JSON?.stringify(allPriceValidityInfo));
      // formData.append("itinerary", JSON?.stringify(allItinerary));

      formData.forEach((value, key) => {
        console.log('form data', key,"=====", value.name);
      });

      const response = await axios.patch(
        `http://10.0.80.13:8000/api/admin/destination/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        alert("Package updated successfully!");
        router.push("/dashboard/create-packages");
      }
    } catch (error) {
      console.error("Error updating package:", error);
    }
  };




  return (
    <div className="bg-gray-200 m-8 p-8">
      {/* Header Section */}
      <div className="flex items-center gap-[16px]">
        <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
        <Image src="/hands.png" alt="hands" width={42} height={42} />
      </div>
      <div className="flex items-center gap-1">
        <Link href="/dashboard/create-packages">
          <span className="text-[30px] font-bold text-primary">
            <LeftOutlined />
          </span>
        </Link>
        <h1 className="text-[24px] font-Roboto font-bold text-primary">Edit Package</h1>
      </div>

      {/* Form Section */}
      <Form form={form} onFinish={handleSubmitPackage} layout="vertical">


        <div>
          {/* Country Select */}
          <Col>
            <Form.Item
              label="Select the destination"
              name="country_name"
              rules={[{  message: "Please select a country!" }]}
            >
              <Select placeholder="Select a country">
                {countryData.map((country) => (
                  <Select.Option key={country.id} value={country.id}>
                    {country.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {/* Image Upload */}
          <Row >
            <Form.Item
              label="Add package image"
              name="image"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
              rules={[
                {  message: "Please upload an image!" },
                {
                  validator: (_, value) =>
                    value?.[0]?.type?.startsWith("image/")
                      ? Promise.resolve()
                      : Promise.reject("File must be an image!"),
                },
              ]}
            >
              <Upload.Dragger
                beforeUpload={() => false}
                listType="picture-card"
                accept="image/*"
                showUploadList={{
                  showPreviewIcon: true,
                  showRemoveIcon: true,
                }}
              >
                <p className="ant-upload-drag-icon">
                  <i className="fas fa-cloud-upload-alt" style={{ fontSize: 24, color: "#1890ff" }}></i>
                </p>
                <p className="ant-upload-text">Click or drag file  upload</p>
              </Upload.Dragger>
            </Form.Item>
          </Row>
        </div>

        {/* Title Field */}
        <Form.Item
          label="Package title"
          name="continent_name"
          rules={[{  message: "Please enter the title!" }]}
        >
          <Input placeholder="Enter the country name" />
        </Form.Item>

        {/* Package Description */}
        <Form.Item label="Package description" name="description">
          <JoditEditor

            value={editorContent}

            onChange={(value) => {
              setEditorContent(value)
            }} // Trigger on change
          />
        </Form.Item>

        <Row gutter={16}>
          {/* Price */}
          <Col span={12}>
            <Form.Item
              label="Package Price"
              name="price"
              rules={[{  message: "Please enter the price!" }]}
            >
              <Input type="number" placeholder="Enter package price" />
            </Form.Item>
          </Col>

          {/* Days */}
          <Col span={12}>
            <Form.Item
              label="Number of Days"
              name="days"
              rules={[{  message: "Please enter the number of days!" }]}
            >
              <Input type="number" placeholder="Enter the number of days" />
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <Form.Item>
          <Button
            htmlType="submit"
            className="mt-10"
            style={{ backgroundColor: "#F49D2A", color: "white", border: "1px solid #F49D2A" }}
          >
            Update Package
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditPackage;
