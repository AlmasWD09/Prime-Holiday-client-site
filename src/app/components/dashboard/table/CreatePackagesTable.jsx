"use clinet"

import { useEffect, useState } from "react";
import CreatePackagesTableRow from "./CreatePackagesTableRow";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';


const CreatePackagesTable = () => {
    const [tableData, setTableData] = useState([])
    const router = useRouter();
    useEffect(() => {
        // Fetch data dynamically from the JSON file
        const fetchData = async () => {
            const response = await fetch("/createPackages.json");
            const result = await response.json();
            setTableData(result)
        };

        fetchData();
    }, []);


     // delete package for..
     const handleDelete = async (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: ` Is deleted to the menu.`,
            // text: `${title} is deleted to the menu.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                // const res = await axiosSecure.delete(`/blog/releted/api/delete/${id}`)
                // if (res.data.deletedCount > 0) {
                //     // refetch();
                //     Swal.fire({
                //         position: "top-center",
                //         icon: "success",
                //         title: `${title} has been deleted`,
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                // }
            }
        });
    }


    // Edit package
    const handleEdit = (id) =>{
        router.push('/dashboard/edit-package')
    }
    return (
        <section className="container px-4 mx-auto">
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <thead className="bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-x-3">
                                                <span>Package name</span>
                                            </div>
                                        </th>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-x-3">
                                                <span>Country name</span>
                                            </div>
                                        </th>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-x-3">
                                                <span>Continent</span>
                                            </div>
                                        </th>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-x-3">
                                                <span>Price</span>
                                            </div>
                                        </th>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-x-3">
                                                <span>Action</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>


                                {/* dynamic data for donor row */}
                                <tbody >
                                    {/* {
                                        tableData.map((category, idx) => <tr key={idx}>
                                            <CreatePackagesTableRow category={category} serial={idx + 1} />
                                        </tr>)
                                    } */}

                                    <tr>
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center gap-x-3">
                                                <div className="flex items-center gap-x-2">
                                                    <Image
                                                        className="object-cover w-10 h-10 rounded-full"
                                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                        alt="photo01"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <div>
                                                        <h2 className="font-medium text-gray-500">
                                                            Arthur Melo
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>


                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                            Design Director
                                        </td>

                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                            authurmelo@example.com
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                            authurmelo@example.com
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                            <div className="flex items-center gap-x-6">
                                                <button onClick={()=>handleDelete("id==1")} className="">
                                                <TbTrashXFilled />
                                                </button>
                                                <button onClick={()=>handleEdit("id==1")} className="">
                                                    <FiEdit />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreatePackagesTable;





