'use client'

import { Select, Input, Button, Form, Upload } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'


const EditPage = () => {
    const { id } = useParams()
    const [form] = Form.useForm();
    const countries = ["Asia", "Africa", "North America", "Antarctica", "Antarctica", "Europe", "Oceania"]
    const [editTableData, setEditTableData] = useState([]);



    useEffect(() => {
        // Fetch data dynamically from the JSON file
        const fetchData = async () => {
            const response = await fetch(`http://10.0.80.13:8000/api/admin/country/${id}`);
            const result = await response.json();
            setEditTableData(result.country);
        };

        fetchData();
    }, []);



    console.log(editTableData)

    return (
        <div className="m-8 p-8">
            <Form  layout="vertical">
            {/* <Form form={form} onFinish={handleSubmit} layout="vertical"> */}
                <h1 className="font-Roboto font-bold text-primary text-[24px]">Edit Destination</h1>

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

                {/* Submit Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditPage
