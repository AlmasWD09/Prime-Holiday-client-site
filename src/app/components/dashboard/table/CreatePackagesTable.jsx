
"use client";

import { useEffect, useState } from "react";
import { Table, Button, Popconfirm } from "antd";
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import usePackages from "@/hooks/usePackages";

const CreatePackagesTable = () => {
  const [createPackage, refetch] = usePackages()
  // delete package for..
  console.log('createpaackage',createPackage)
  const handleDelete = async (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${item.name} is deleted from the menu.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `http://10.0.80.13:8000/api/admin/destination/delete/${item.id}`
        );
        if (res.data.success) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <Image
              className="object-cover w-10 h-10 rounded-full"
              src={record.image}
              alt="package"
              width={40}
              height={40}
            />
            <div>
              {/* <h2 className="font-medium text-gray-500">{text}</h2> */}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "package Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Country Name",
      dataIndex: "country_name",
      key: "country_name",
    },
    {
      title: "Continent",
      dataIndex: "continent_name",
      key: "continent_name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="flex items-center gap-x-6">
          {/* <Popconfirm
            title="Are you sure you want to delete this package?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          > */}
          <Button
            onClick={() => handleDelete(record)}
            type="text" icon={<TbTrashXFilled />} style={{ color: "red", fontSize: "20px" }} />
          {/* </Popconfirm> */}
          <Link href={`/admin/dashboard/edit-package/${record.id}`}>
            <Button type="text" icon={<FiEdit />} style={{ color: "green", fontSize: "20px" }} />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <Table
                columns={columns}
                dataSource={createPackage}
                rowKey="id"
                pagination={{ pageSize: 5 }} // You can enable pagination as needed
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePackagesTable;