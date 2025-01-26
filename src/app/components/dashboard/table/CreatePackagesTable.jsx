// "use clinet"

// import { useEffect, useState } from "react";
// import CreatePackagesTableRow from "./CreatePackagesTableRow";
// import Image from "next/image";
// import { FiEdit } from "react-icons/fi";
// import { TbTrashXFilled } from "react-icons/tb";
// import Swal from 'sweetalert2';
// import { useRouter } from 'next/navigation';
// import axios from "axios";
// import Link from "next/link";


// const CreatePackagesTable = () => {
//     const [packagesData, setPackagesData] = useState([])
//     const router = useRouter();

//     // Fetch all packagesData
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch("http://10.0.80.13:8000/api/admin/destination/?per_page");
//             const result = await response.json();
//             setPackagesData(result?.destinations?.data)
//         };
//         fetchData();
//     }, []);



//     // delete package for..
//     const handleDelete = async (item) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: `${item.name} is deleted to the menu.`,
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 const res = await axios.delete(`http://10.0.80.13:8000/api/admin/destination/delete/${item.id}`)
//                 if (res.data.deletedCount > 0) {
//                     Swal.fire({
//                         position: "top-center",
//                         icon: "success",
//                         title: `${item.name} has been deleted`,
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 }
//             }
//         });
//     }

//     return (
//         <section className="container px-4 mx-auto">
//             <div className="flex flex-col mt-6">
//                 <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                     <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//                         <div className="overflow-hidden border border-gray-200 md:rounded-lg">
//                             <table className="min-w-full divide-y divide-gray-200 ">
//                                 <thead className="bg-gray-50 ">
//                                     <tr>
//                                         <th scope="col" className="py-3.5 px-4 text-lg font-bold text-left text-gray-800">
//                                             <div className="flex items-center gap-x-3">
//                                                 <span>Package name</span>
//                                             </div>
//                                         </th>
//                                         <th scope="col" className="py-3.5 px-4 text-lg font-bold text-left text-gray-800">
//                                             <div className="flex items-center gap-x-3">
//                                                 <span>Country name</span>
//                                             </div>
//                                         </th>
//                                         <th scope="col" className="py-3.5 px-4 text-lg font-bold text-left text-gray-800">
//                                             <div className="flex items-center gap-x-3">
//                                                 <span>Continent</span>
//                                             </div>
//                                         </th>
//                                         <th scope="col" className="py-3.5 px-4 text-lg font-bold text-left text-gray-800">
//                                             <div className="flex items-center gap-x-3">
//                                                 <span>Price</span>
//                                             </div>
//                                         </th>
//                                         <th scope="col" className="py-3.5 px-4 text-lg font-bold text-left text-gray-800">
//                                             <div className="flex items-center gap-x-3">
//                                                 <span>Action</span>
//                                             </div>
//                                         </th>
//                                     </tr>
//                                 </thead>


//                                 {/* dynamic data for donor row */}
//                                 <tbody >
//                                     {/* {
//                                         tableData.map((category, idx) => <tr key={idx}>
//                                             <CreatePackagesTableRow category={category} serial={idx + 1} />
//                                         </tr>)
//                                     } */}

//                                     {
//                                         packagesData.map((singlePackageData, index) => <tr key={index}>
//                                             <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
//                                                 <div className="inline-flex items-center gap-x-3">
//                                                     <div className="flex items-center gap-x-2">
//                                                         <Image
//                                                             className="object-cover w-10 h-10 rounded-full"
//                                                             src={singlePackageData.image}
//                                                             alt="photo01"
//                                                             width={100}
//                                                             height={100}
//                                                         />
//                                                         <div>
//                                                             <h2 className="font-medium text-gray-500">
//                                                                 {singlePackageData.name}
//                                                             </h2>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </td>


//                                             <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
//                                                 {singlePackageData.country_name}
//                                             </td>

//                                             <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
//                                                 {singlePackageData.continent_name}
//                                             </td>
//                                             <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
//                                                 {singlePackageData.price}
//                                             </td>
//                                             <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
//                                                 <div className="flex items-center gap-x-6">
//                                                     <button onClick={() => handleDelete(singlePackageData)} className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded">
//                                                         <TbTrashXFilled className="text-xl text-red-600" />
//                                                     </button>
//                                                     <Link href={`/admin/dashboard/edit-package/${singlePackageData.id}`}><button className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded">
//                                                         <FiEdit className="text-xl " />
//                                                     </button></Link>
//                                                 </div>
//                                             </td>
//                                         </tr>)
//                                     }

//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default CreatePackagesTable;




"use client";

import { useEffect, useState } from "react";
import { Table, Button, Popconfirm } from "antd";
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const CreatePackagesTable = () => {
  const [packagesData, setPackagesData] = useState([]);
  const router = useRouter();

  // Fetch all packagesData
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://10.0.80.13:8000/api/admin/destination/?per_page"
      );
      const result = await response.json();
      setPackagesData(result?.destinations?.data);
    };
    fetchData();
  }, []);

  // delete package for..
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
        if (res.data.deletedCount > 0) {
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
      title: "Package Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={record.image}
              alt="package"
              width={40}
              height={40}
            />
            <div>
              <h2 className="font-medium text-gray-500">{text}</h2>
            </div>
          </div>
        </div>
      ),
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
          <Popconfirm
            title="Are you sure you want to delete this package?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button  type="text" icon={<TbTrashXFilled />} style={{color:"red",fontSize:"20px"}}/>
          </Popconfirm>
          <Link href={`/admin/dashboard/edit-package/${record.id}`}>
            <Button type="text"  icon={<FiEdit />} style={{color:"green",fontSize:"20px"}}/>
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
                dataSource={packagesData}
                rowKey="id"
                pagination={{pageSize:5}} // You can enable pagination as needed
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePackagesTable;


