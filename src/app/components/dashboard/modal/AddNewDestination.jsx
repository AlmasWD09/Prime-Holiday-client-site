
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Select, Form, Input } from 'antd';
import axios from 'axios';

const { Option } = Select;

const AddNewDestination = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    // Ant Design Upload Props
    const uploadProps = {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload', 
        headers: {
            authorization: 'authorization-text',
        },
        beforeUpload(file) {
            setIsUploading(true);
            return true;
        },
        onChange(info) {
            if (info.file.status === 'done') {
                setIsUploading(false);
                const uploadedUrl = info.file.response?.url || null;
                if (uploadedUrl) {
                    setUploadedImage(uploadedUrl);
                    message.success(`${info.file.name} uploaded successfully`);
                } else {
                    message.error('File upload failed: No URL returned');
                }
            } else if (info.file.status === 'error') {
                setIsUploading(false);
                message.error(`${info.file.name} upload failed.`);
            }
        },
    };

    // Handle Form Submission
    const handleSubmit = async (values) => {
        console.log(values)
        // if (!uploadedImage) {
        //     message.error('Please upload an image before saving!');
        //     return;
        // }

        // const formData = {
        //     continent: values.continent,
        //     countryName: values.countryName,
        //     image: uploadedImage,
        // };

        // console.log('Form Data:', formData);



        // try {
        //     const response = await axios.post(
        //         'https://your-backend-api-endpoint.com/api/destination', 
        //         formData
        //     );
        //     message.success('Destination added successfully!');
        //     console.log('Response:', response.data);
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        //     message.error('Failed to add destination. Please try again.');
        // }
    };

    return (
        <div className="relative">
             <div className="fixed inset-0 z-[9999px] flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-5xl mx-auto my-16 fixed inset-0 z-50 flex items-center justify-center bg-[#FFFFFF] pt-10 md:pt-0 rounded-xl">
                <div className="w-full m-8">
                    <Form
                        onFinish={handleSubmit}
                        layout="vertical"
                        initialValues={{
                            continent: '',
                            countryName: '',
                        }}
                    >
                        {/* Continent Select */}
                        <Form.Item
                            label="Select the Continent"
                            name="continent"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select a continent!',
                                },
                            ]}
                        >
                            <Select placeholder="Select the continent" className='max-w-xl'>
                                <Option value="Asia">Asia</Option>
                                <Option value="Africa">Africa</Option>
                                <Option value="North America">North America</Option>
                                <Option value="Antarctica">Antarctica</Option>
                                <Option value="Europe">Europe</Option>
                                <Option value="Oceania">Oceania</Option>
                            </Select>
                        </Form.Item>

                        {/* Country Name Input */}
                        <Form.Item
                            label="Country Name"
                            name="countryName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter the country name!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter the country name"
                                className="bg-transparent bg-[#FEF5EA] w-full py-[4px] px-[8px] max-w-xl"
                            />
                        </Form.Item>

                        {/* Upload Country Image */}
                        <Form.Item label="Add c ountry image">
                            <Upload {...uploadProps} className="w-full">
                                <Button
                                    icon={<UploadOutlined />}
                                    disabled={isUploading}
                                >
                                    {isUploading ? 'Uploading...' : 'Click to Upload'}
                                </Button>
                            </Upload>
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="mt-4 !bg-primary"
                                disabled={isUploading} >
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
            </div>
        </div>
    );
};

export default AddNewDestination;




