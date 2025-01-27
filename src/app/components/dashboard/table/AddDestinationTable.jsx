
"use client";

import { useState, useEffect } from "react";
import { Table, Button, Popconfirm, Image } from "antd";
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import axios from "axios";
import Link from "next/link";
import useDestination from "@/hooks/useDestination";

const AddDestinationTable = () => {
  const [destinationData,refetch] = useDestination();

  // Delete package
  const handleDelete = async (item) => {

    Swal.fire({
      title: "Are you sure?",
      text: `${item.name} will be deleted.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `http://10.0.80.13:8000/api/admin/country/delete/${item.id}`
        );

        if (res.data.success) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item.name} has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  // Table Columns
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image, record) => (
        <Image
          src={image || "/404.jpg"}
          alt={record.title}
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />
      ),
      // render: (text, record) => (
      //   <div className="inline-flex items-center gap-x-3">
      //     <div className="flex items-center gap-x-2">
      //       <Image
      //         className="object-cover w-10 h-10 rounded-full"
      //         src={record.image}
      //         alt="destination"
      //         width={40}
      //         height={40}
      //       />
      //       <div>
      //       </div>
      //     </div>
      //   </div>
      // ),
    },
    {
      title: "Country Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title) => title || "N/A",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-x-4">
          {/* <Popconfirm
            title="Are you sure to delete this destination?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          > */}
            <Button onClick={()=>handleDelete(record)} type="text" icon={<TbTrashXFilled />} style={{ color: "red", fontSize: "20px" }} />
          {/* </Popconfirm> */}
          <Link href={`/admin/dashboard/edit-destination/${record.id}`}>
            <Button type="text" icon={<FiEdit />} style={{ color: "green", fontSize: "20px" }} />
          </Link>
        </div>
      ),
    },
  ];

  // Table Data
  const dataSource = destinationData?.map((item) => ({
    key: item.id,
    image: item.image,
    name: item.name,
    title: item.title,
    id: item.id,
  }));

  return (
    <section className="container px-4 mx-auto">
      <div className="mt-20">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
          bordered
        />
      </div>
    </section>
  );
};

export default AddDestinationTable;

