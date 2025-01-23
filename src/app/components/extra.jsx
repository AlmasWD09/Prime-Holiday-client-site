'use client';

import { Select, Input, Button, Form, Upload } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import Image from "next/image";
import TextEditor from "@/app/components/textEditor/TextEditor";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const CreateNewPage = () => {
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState(null);
  const [buttonText, setButtonText] = useState("INCLUDES & EXCLUDES");

  const [inputValue, setInputValue] = useState("");
  const [inputValueExcludes, setInputValueExcludes] = useState("");
  const [itemsExcludes, setItemsExcludes] = useState([]);
  const [items, setItems] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({ id: null, name: "" });
  const [formValue, setFormValue] = useState(null);
  const [hotelInfo, setHotelInfo] = useState(null);
  const [priceValidityInfo, setPriceValidityInfo] = useState(null);
  const [itineryInfo, setItineryInfo] = useState(null);

  // Fetch country data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://10.0.80.13:8000/api/admin/country");
      const result = await response.json();
      setCountryData(result.countries.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleChange = (value) => {
    const country = countryData.find((singleCountry) => singleCountry.id === value);
    if (country) {
      setSelectedCountry({ id: country.id, name: country.name });
    }
  };

  const handleTextEditorChange = (plainText) => {
    setEditorContent(plainText);
  };

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      const newItem = { text: inputValue, id: Date.now() };
      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  const handleAddTwo = () => {
    if (inputValueExcludes.trim() !== "") {
      const newItem = { text: inputValueExcludes, id: Date.now() };
      setItemsExcludes([...itemsExcludes, newItem]);
      setInputValueExcludes("");
    }
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("image", values.image[0].originFileObj); // Attach image
    formData.append("description", editorContent);
    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("days", values.days);
    formData.append("country_id", selectedCountry.id);
    formData.append("name", selectedCountry.name);
    formData.append("includesText", JSON.stringify(items));
    formData.append("excludesText", JSON.stringify(itemsExcludes));
    formData.append("hotel_all_data", JSON.stringify(hotelInfo));
    formData.append("priceValidity_all_data", JSON.stringify(priceValidityInfo));
    formData.append("itinery_all_data", JSON.stringify(itineryInfo));

    try {
      const response = await axios.post("http://10.0.80.13:8000/api/admin/destination/store", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Package created successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-200 m-8 p-8">
      <div className="flex items-center gap-[16px]">
        <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
        <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
      </div>
      <div className="flex items-center gap-1">
        <a href="/dashboard/create-packages">
          <span className="text-[30px] font-bold text-primary">
            <LeftOutlined />
          </span>
        </a>
        <h1 className="text-[24px] font-Roboto font-bold text-primary">Create New Packages</h1>
      </div>

      <div className="p-8">
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <div className="mb-2">
            <p>Select the continent</p>
            <Form.Item name="continent">
              <Select
                placeholder="Enter the country name"
                className="max-w-xl"
                onChange={handleChange}
              >
                {countryData?.map((singleCountry) => (
                  <Select.Option key={singleCountry.id} value={singleCountry.id}>
                    {singleCountry.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <div className="max-w-xl mb-2">
            <p>Add package image</p>
            <Form.Item
              name="image"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
              rules={[
                { required: true, message: "Please upload an image!" },
                { validator: (_, value) => (value?.[0]?.type?.startsWith("image/") ? Promise.resolve() : Promise.reject("File must be an image")) },
              ]}
            >
              <Upload beforeUpload={() => false} listType="picture">
                <Button>Upload Image</Button>
              </Upload>
            </Form.Item>
          </div>

          <div className="mb-2">
            <p>Package title</p>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Please enter the title!" }]}
            >
              <Input placeholder="Enter the destination name" className="max-w-xl" />
            </Form.Item>
          </div>

          <div className="max-w-xl mb-2">
            <TextEditor onChange={handleTextEditorChange} />
          </div>

          <div className="mb-2">
            <p>Package price</p>
            <Form.Item
              name="price"
              rules={[{ required: true, message: "Please enter the price!" }]}
            >
              <Input placeholder="Enter the price of package" className="max-w-xl" type="number" min={0} />
            </Form.Item>
          </div>

          <div className="mb-2">
            <p>Number of days</p>
            <Form.Item
              name="days"
              rules={[{ required: true, message: "Please enter the number of days!" }]}
            >
              <Input placeholder="Enter the days" className="max-w-xl" type="number" />
            </Form.Item>
          </div>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateNewPage;
