"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const AddDestinationTable = () => {
  const [tableData, setTableData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch data dynamically from the JSON file
    const fetchData = async () => {
      const response = await fetch("/createPackages.json");
      const result = await response.json();
      setTableData(result);
    };

    fetchData();
  }, []);

  // Delete package
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `This package will be deleted.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Perform delete operation here
        setTableData((prevData) => prevData.filter((item) => item.id !== id));
        Swal.fire("Deleted!", "The package has been deleted.", "success");
      }
    });
  };

  // Edit package
  const handleEdit = (id) => {
    router.push(`/dashboard/edit-destination`);
  };

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                      Image
                    </th>
                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                      Country Name
                    </th>
                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                      Title
                    </th>
                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <Image
                            className="object-cover w-10 h-10 rounded-full"
                            src={item.image}
                            alt={item.title}
                            width={100}
                            height={100}
                          />
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.countryName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.title}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500"
                          >
                            <TbTrashXFilled />
                          </button>
                          <button
                            onClick={() => handleEdit(item.id)}
                            className="text-blue-500"
                          >
                            <FiEdit />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {tableData.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 py-4 text-center text-gray-500"
                      >
                        No packages found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddDestinationTable;
