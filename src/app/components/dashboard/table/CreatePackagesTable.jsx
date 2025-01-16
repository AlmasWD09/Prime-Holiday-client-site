

"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Popconfirm, Table, Image } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

// Context for Editable Row and Cell
const EditableContext = React.createContext(null);

// EditableRow component that uses Form to manage state
const EditableRow = (props) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

// EditableCell component to handle editable fields
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
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    // Conditionally rendering input for editable fields
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[{ required: true, message: `${title} is required.` }]}>
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ cursor: "pointer", paddingInlineEnd: 24 }}
        onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

// Main table component
const CreatePackagesTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "0",
      image: "/asia04.png",
      title: "Immersion in culture Oman",
      countryName: "Oman",
      continent: "Asia",
      price: "5656.00",
    },
    {
      key: "1",
      image: "/asia02.png",
      title: "Adventure in Sahara",
      countryName: "Morocco",
      continent: "Africa",
      price: "4599.00",
    },
    {
      key: "2",
      image: "/asia04.png",
      title: "Immersion in culture Oman",
      countryName: "Oman",
      continent: "Asia",
      price: "5656.00",
    },
    {
      key: "3",
      image: "/asia02.png",
      title: "Adventure in Sahara",
      countryName: "Morocco",
      continent: "Africa",
      price: "4599.00",
    },
    {
      key: "4",
      image: "/asia04.png",
      title: "Immersion in culture Oman",
      countryName: "Oman",
      continent: "Asia",
      price: "5656.00",
    },
    {
      key: "5",
      image: "/asia02.png",
      title: "Adventure in Sahara",
      countryName: "Morocco",
      continent: "Africa",
      price: "4599.00",
    },
    {
      key: "6",
      image: "/asia02.png",
      title: "Adventure in Sahara",
      countryName: "Morocco",
      continent: "Africa",
      price: "4599.00",
    },
    {
      key: "7",
      image: "/asia02.png",
      title: "Adventure in Sahara",
      countryName: "Morocco",
      continent: "Africa",
      price: "4599.00",
    },
  
  ]);
// ========= dynamic data add here ================ //
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Set the number of items per page

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

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (text) => <Image src={text} alt="Package" width={50} height={50} />,
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Country Name",
      dataIndex: "countryName",
    },
    {
      title: "Continent",
      dataIndex: "continent",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Action",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a><DeleteOutlined className="bg-gray-100 text-red-600 text-md p-2 rounded"/></a>
          </Popconfirm>
        ) : null,
    },
  ];

  // Adding functionality for editable cells
  const mergedColumns = columns.map((col) => {
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
        style: {
          backgroundColor: record[col.dataIndex] ? "#e6f7ff" : "transparent", // Adding background color for edited fields
        },
      }),
    };
  });

  // Data to display for current page
  const paginatedData = dataSource.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <Table
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={paginatedData}
        columns={mergedColumns}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: dataSource.length,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
};

export default CreatePackagesTable;



