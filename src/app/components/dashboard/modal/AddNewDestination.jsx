'use client'

import { Select, Input, Button, Form, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

const AddNewDestination = () => {
    const [form] = Form.useForm();
    const countries = ["Asia", "Africa", "North America", "Antarctica", "Antarctica", "Europe", "Oceania"]

    // Handle form submission
    const handleSubmit = async (values) => {
        // Extract file data
        const imageFile = values.image[0].originFileObj;
        console.log(values.image[0].originFileObj)
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

        try {
            const response = await axios.post(
                "http://10.0.80.13:8000/api/admin/destination/store",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Response: line--------> 40", response.data);
            form.resetFields(); // Reset the form after successful submission
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <div className="relative">
            <div className="fixed inset-0 z-[9999px] flex items-center justify-center bg-black bg-opacity-50">
                <div className="max-w-5xl mx-auto my-16 fixed inset-0 z-50 flex items-center justify-center bg-[#FFFFFF] pt-10 md:pt-0 rounded-xl">
                    <div className="space-y-4">
                        <Form form={form} onFinish={handleSubmit} layout="vertical">
                            <h1 className="font-Roboto font-bold text-primary text-[24px]">Add New Destination</h1>

                            {/* select  */}
                            <div className="mb-2">
                                <p>Select the continent</p>
                                <Form.Item
                                    name="continent"
                                    rules={[{ required: true, message: "Please select a continent!" }]}
                                >
                                    <Select placeholder="Select the continent" className="max-w-sm">
                                        {countries.map((country, index) => (
                                            <Select.Option key={index} value={country}>
                                                {country}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                            </div>

                            {/* country name */}
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
                                    label="title"
                                    name="title"
                                    rules={[{ required: true, message: "Please enter the title!" }]}
                                >
                                    <Input placeholder="Enter the destination name" className="max-w-sm" />
                                </Form.Item>
                            </div>

                            {/* Days Field */}
                            {/* <Form.Item
                                label="Days"
                                name="days"
                                rules={[{ required: true, message: "Please enter the number of days!" }]}
                            >
                                <Input type="number" placeholder="Enter the number of days" className="max-w-sm" />
                            </Form.Item> */}

                            {/* Description Field */}
                            {/* <div className="max-w-sm">
                                <Form.Item
                                    label="Description"
                                    name="description"
                                    rules={[{ required: true, message: "Please enter a description!" }]}
                                >
                                    <TextArea placeholder="Enter a description of the destination" rows={4} />
                                </Form.Item>
                            </div> */}



                            {/* Image Upload Field */}
                            <div className="mb-2">
                                <Form.Item
                                    label="Upload Image"
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

                            {/* Price Field */}
                            {/* <Form.Item
                                label="Price"
                                name="price"
                                rules={[{ required: true, message: "Please enter the price!" }]}
                            >
                                <Input placeholder="Enter the price" className="max-w-sm" type="number" min={0} />
                            </Form.Item> */}

                            {/* Submit Button */}
                            <div className="py-4">
                                <button type="submit" className="bg-primary text-white px-6 py-1">Save</button>
                            </div>
                            
                            <div className="bg-gray-300 h-[30px] w-[30px] rounded-full flex justify-center items-center">
                            <button className="text-xl">c</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewDestination;




