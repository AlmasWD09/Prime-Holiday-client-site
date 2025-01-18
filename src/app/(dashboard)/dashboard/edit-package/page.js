'use client'


import { Select, Input, Button, Form, Upload } from "antd";
import { LeftOutlined } from "@ant-design/icons"
import Image from "next/image"
import TextEditor from "@/app/components/textEditor/TextEditor";
import { useState } from "react";


const EditPackage = () => {
  const countries = ["Asia", "Africa", "North America", "Antarctica", "Antarctica", "Europe", "Oceania"]
  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState("");
  const [buttonColor, setButtonColor] = useState(0);
  const [buttonText, setButtonText] = useState("INCLUDES & EXCLUDES")

  // Handle form submission
  const handleSubmit = async (values) => {
    const updatedValues = {
      ...values,
      description: editorContent, // Include the editor content in the form submission
    };

    console.log(updatedValues)



    const imageFile = values.image[0].originFileObj;
    if (!imageFile) {
      console.error("Image file is required.");
      return;
    }

    const formData = new FormData();
    formData.append("country_id", "4"); // Hardcoded country_id
    formData.append("name", values.name);
    formData.append("days", values.days);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("image", imageFile);


  };

  // single button text get
  const handleButtonClick = (event, index) => {
    const buttonText = event.target.innerText;
    setButtonText(buttonText)
    setButtonColor(index);
  };

    return (
        <div className="bg-gray-200 m-8 p-8 h-[880px]">
            <div className="flex  items-center gap-[16px]">
                <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
                <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
            </div>
            <div className="flex items-center gap-1">
                <span className="text-[30px] font-bold text-primary"><LeftOutlined /></span>
                <h1 className='text-[24px] font-Roboto font-bold text-primary'>Edit Packages</h1>
            </div>


            {/* edit package */}
            <div>
                {/* form here */}
                <Form form={form} onFinish={handleSubmit} layout="vertical">
                    {/* select  */}
                    <div className="mb-2">
                        <p>Select the continent</p>
                        <Form.Item
                            name="continent"
                            rules={[{ required: true, message: "Please select a continent!" }]}
                        >
                            <Select placeholder="Enter the country name" className="max-w-xl">
                                {countries.map((country, index) => (
                                    <Select.Option key={index} value={country}>
                                        {country}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                    </div>


                    {/* Image Upload Field */}
                    <div className="mb-2">
                        <p>Add package image</p>
                        <Form.Item
                            name="image"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                            rules={[{ required: true, message: "Please upload an image!" }]}
                        >
                            <Upload beforeUpload={() => false} listType="picture">
                                <Button>Upload Image</Button>
                            </Upload>
                        </Form.Item>
                    </div>

                    {/* Title Field */}
                    <div className="mb-2">
                        <p>Package title</p>
                        <Form.Item
                            name="title"
                            rules={[{ required: true, message: "Please enter the title!" }]}
                        >
                            <Input placeholder="Enter the destination name" className="max-w-xl" />
                        </Form.Item>
                    </div>

                    {/* Package description */}
                    <div className="max-w-xl mb-2">
                        <TextEditor onchange={setEditorContent} />
                    </div>

                    {/* Price Field */}
                    <div className="mb-2">
                        <p>Package price</p>
                        <Form.Item
                            name="price"
                            rules={[{ required: true, message: "Please enter the price!" }]}
                        >
                            <Input placeholder="Enter the price of package" className="max-w-xl" type="number" min={0} />
                        </Form.Item>
                    </div>

                    {/* Days */}
                    <div className="mb-2">
                        <p>Number of days</p>
                        <Form.Item
                            name="days"
                            rules={[{ required: true, message: "Please enter the number of days!" }]}
                        >
                            <Input type="number" placeholder="Enter the days" className="max-w-xl" />
                        </Form.Item>
                    </div>

                    <div className="max-w-xl mb-2 border border-primary p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  border-gray-300 pb-6">
                            {["INCLUDES & EXCLUDES", "HOTELS", "PRICE & VALIDITY", "ITINERARY"].map((label, index) => (
                                <button
                                    key={index}
                                    onClick={(event) => handleButtonClick(event, index)}
                                    className={`py-2 text-center font-bold  border border-[#135029] rounded-xl text-[#135029] border-opacity-30 ${buttonColor === index ? "bg-[#135029] text-[#FFFFF0] " : ""
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default EditPackage
