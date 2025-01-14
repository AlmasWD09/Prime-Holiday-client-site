import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, message, Upload, Input, Popconfirm, Table, Modal, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);

    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{ paddingInlineEnd: 24 }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

const AddDestinationTable = () => {
    const [dataSource, setDataSource] = useState([
        {
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1',
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [form] = Form.useForm();

    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };

    const handleEdit = (record) => {
        setEditingRecord(record);
        form.setFieldsValue(record);
        setIsModalOpen(true);
    };

    const handleModalSave = () => {
        form.validateFields().then((values) => {
            const newData = [...dataSource];
            const index = newData.findIndex((item) => item.key === editingRecord.key);
            newData[index] = { ...editingRecord, ...values };
            setDataSource(newData);
            setIsModalOpen(false);
            setEditingRecord(null);
        });
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            editable: true,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            editable: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            editable: true,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) => (
                <span>
                    <Button type="link" onClick={() => handleEdit(record)}>
                        Update
                    </Button>
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <a style={{ marginLeft: 8 }}>Delete</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    const mappedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

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

    return (
        <div>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={mappedColumns}
            />
            <Modal
                title="Update Record"
                open={isModalOpen}
                onOk={handleModalSave}
                onCancel={() => setIsModalOpen(false)}
            >
                <Form form={form} layout="vertical">

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
                        <Select placeholder="Select the continent" className="max-w-xl">
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
                        ]}>
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

                </Form>
            </Modal>
        </div>
    );
};

export default AddDestinationTable;