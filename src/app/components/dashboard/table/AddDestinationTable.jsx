import { Select, Input, Button, Form, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect } from "react";



const AddDestinationTable = () => {
    const [form] = Form.useForm();
    // const countries = ["Asia", "Africa", "North America", "Antarctica", "Antarctica", "Europe", "Oceania"]

    // handle form submit
    const handleSubmit = (values) => {
        const data = {
            ...values,
        };
        form.resetFields()


        const res = axios.post('http://10.0.80.13:8000/api/admin/destination/store', data)
        console.log(res, 'line 21')
    };


    return (
        <div className="space-y-4">
            <Form form={form} onFinish={handleSubmit}>
                <h1 className="font-Roboto font-bold text-primary text-[24px]">Add New Destination</h1>

                {/* name */}
                <div className="mb-2">
                    <p>Name</p>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: "Please enter the title!" }]}
                    >
                        <Input placeholder="Enter the country title" className="max-w-sm" />
                    </Form.Item>
                </div>

                {/* days */}
                <div className="mb-2">
                    <p>Days</p>
                    <Form.Item
                        name="day"
                        rules={[{ required: true, message: "Please enter the title!" }]}
                    >
                        <Input type="number" placeholder="Enter the country title" className="max-w-sm" />
                    </Form.Item>
                </div>


                {/* Description */}
                <div className="mb-2 max-w-sm">
                    <p>Description</p>
                    <Form.Item
                        name="description"
                        rules={[{ required: true, message: "Please enter a description!" }]}
                    >
                        <TextArea
                            placeholder="Enter a description of the destination"
                            rows={4}
                        // className="max-w-sm"
                        />
                    </Form.Item>
                </div>

                {/* image upload */}
                <div className="mb-2">
                    <Form.Item
                        name={"profilePicture"}
                        rules={[
                            {
                                required: true,
                                message: "please upload your profile picture"
                            }
                        ]}
                    >
                        <Upload>
                            <Button>Upload Profile Picture</Button>
                        </Upload>
                    </Form.Item>
                </div>

                {/* Price */}
                <div className="mb-2">
                    <p>Price</p>
                    <Form.Item
                        name="price"
                        rules={[{ required: true, message: "Please enter the price!" }]}
                    >
                        <Input
                            placeholder="Enter the price"
                            className="max-w-sm"
                            type="number"
                            min={0}
                        />
                    </Form.Item>
                </div>

                {/* select  */}
                {/* <div className="mb-2">
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

                </div> */}

                {/* button */}
                <div className="mb-2">
                    <Button type="primary" htmlType="submit" className="">Save</Button>
                </div>
            </Form>
        </div>
    );
};

export default AddDestinationTable;