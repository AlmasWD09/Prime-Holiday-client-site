import { Select, Input, Button, Form, Upload } from "antd";


const AddDestinationTable = () => {
    const [form] = Form.useForm(); 
    const countries = ["Asia", "Africa", "North America", "Antarctica", "Antarctica", "Europe", "Oceania"]

    // handle form submit
    const handleSubmit = (values) => {
        const data = {
            ...values,
        };
        console.log(data)
        form.resetFields()
    };

    return (
        <div className="space-y-4">
            <Form form={form} onFinish={handleSubmit}>
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

                {/* title */}
                <div className="mb-2">
                    <p>Title</p>
                    <Form.Item
                        name="title"
                        rules={[{ required: true, message: "Please enter the title!" }]}
                    >
                        <Input placeholder="Enter the country title" className="max-w-sm" />
                    </Form.Item>
                </div>

                {/* image upload */}
                {/* <div className="mb-2">
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