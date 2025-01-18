'use client'

import { Select, Input, Button, Form, Upload } from "antd";
import axios from "axios";

const EditDestinationPage = () => {
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
        <div className="m-8 p-8">
            <Form form={form} onFinish={handleSubmit} layout="vertical">
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
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditDestinationPage
