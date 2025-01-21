'use client'

import { Select, Input, Button, Form, Upload } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddNewDestination = ({ setModalOpen }) => {
    const [form] = Form.useForm();
    const [contentData, setContentData] = useState([])

    useEffect(() => {
        // Fetch data dynamically from the JSON file
        const fetchData = async () => {
            const response = await fetch('http://10.0.80.13:8000/api/admin/continent');
            const result = await response.json();
            setContentData(result.continents);
        };

        fetchData();
    }, []);

    // Handle form submission
    const handleSubmit = async (values) => {
        // Create an object to capture the form values
        const formData = {
            name: values.name,  
            title: values.title, 
            continent_id: values.continent,  
            days: values.days, 
            description: values.description,  
            price: values.price,  
            image: values.image ? values.image[0]?.originFileObj : null  
        };

        // Log the object to console
        console.log("Form Data as Object:", formData);

        // Here you can also handle the image upload (if present) and send the formData to your API.
        if (formData.image) {
            const uploadFormData = new FormData();
            uploadFormData.append("country_id", "4"); // Hardcoded country_id
            uploadFormData.append("name", formData.name);
            uploadFormData.append("title", formData.title);
            uploadFormData.append("days", formData.days);
            uploadFormData.append("description", formData.description);
            uploadFormData.append("price", formData.price);
            uploadFormData.append("image", formData.image);
            
            try {
                // Send the data to the server via axios POST request
                const response = await axios.post('http://10.0.80.13:8000/api/admin/country/store', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',  // Ensure the correct content type is set
                    },
                });
    
                // Log the server response (success message or data)
                console.log('Response:', response.data);
                form.resetFields();
            } catch (error) {
                // Log error if the request fails
                console.error('Error submitting form:', error);
            }
           
        }
    };

    const handleBack = () => {
        setModalOpen(false);
    };

    return (
        <div className="relative">
            <div className="fixed inset-0 z-[9999px] flex items-center justify-center bg-black bg-opacity-50">
                <div className="max-w-2xl mx-auto my-16 fixed inset-0 z-50 flex items-center justify-center bg-[#FFFFFF] pt-10 md:pt-0 rounded-xl">
                    <div className="space-y-4">
                        <Form form={form} onFinish={handleSubmit} layout="vertical">
                            {/* Select Continent */}
                            <div className="mb-2">
                                <p>Select the continent</p>
                                <Form.Item
                                    name="continent"
                                    rules={[{ required: true, message: "Please select a continent!" }]}
                                >
                                    <Select placeholder="Select the continent">
                                        {contentData.map((singleContent, index) => (
                                            <Select.Option key={index} value={singleContent.id}>
                                                {singleContent.name}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </div>

                            {/* Country Name */}
                            <div className=" mb-2">
                                <p>Country Name</p>
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: "Please enter the country name!" }]}
                                >
                                    <Input placeholder="Enter the country name" />
                                </Form.Item>
                            </div>

                            {/* Title Field */}
                            <div className=" mb-2">
                                <Form.Item
                                    label="Title"
                                    name="title"
                                    rules={[{ required: true, message: "Please enter the title!" }]}
                                >
                                    <Input placeholder="Enter the destination name" />
                                </Form.Item>
                            </div>

                            {/* Image Upload Field */}
                            <div className=" mb-2">
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

                            {/* Submit Button */}
                            <div className="py-4">
                                <button type="submit" className="bg-primary text-white px-6 py-1">Save</button>
                            </div>
                        </Form>

                        {/* Close Button */}
                        <div
                            onClick={handleBack}
                            className="absolute right-2 -top-3 bg-gray-300 h-[30px] w-[30px] rounded-full flex justify-center items-center">
                            <button className="text-xl"><IoMdClose /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewDestination;
