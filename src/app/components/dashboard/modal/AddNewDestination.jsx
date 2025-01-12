

import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


const AddNewDestination = () => {
    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto my-8 fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-10 md:pt-0 border">

                <div className="w-full m-8">
                    <select name="" id="">
                        <option value="">Select the continent</option>
                        <option value="">a</option>
                        <option value="">a</option>
                        <option value="">a</option>
                        <option value="">a</option>
                        <option value="">a</option>
                    </select>
                    <div className="pt-[18px]">
                        <p>Country Name</p>
                        <input type="text" name="" id="" placeholder="Enter the country name" className="bg-transparent bg-[#FEF5EA] w-full py-[4px] px-[8px]" />
                    </div>
                    <div className="pt-[18px]">
                        <p>Add country image</p>

                        <Upload {...props} className=''>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewDestination
