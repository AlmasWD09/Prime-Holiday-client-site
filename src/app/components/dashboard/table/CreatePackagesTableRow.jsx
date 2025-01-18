import Image from "next/image";


const CreatePackagesTableRow = ({ category }) => {
    console.log(category)
    return (
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
                                <h2 className="font-medium text-gray-800 dark:text-white">
                                    Arthur Melo
                                </h2>
                            </div>
                        </div>
                    </div>
                </td>


                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    Design Director
                </td>

                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    authurmelo@example.com
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    authurmelo@example.com
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    authurmelo@example.com
                </td>
            </tr>
    )
}

export default CreatePackagesTableRow