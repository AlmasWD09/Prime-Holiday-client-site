import Image from "next/image";
import { MdOutlineLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="font-Roboto flex flex-col justify-between h-screen mx-4 pb-[64px]">
            <Link href={'/admin/dashboard/create-destination'}>
                <div className="mt-40">
                    <button className="flex items-center gap-1  hover:bg-gray-300 p-2 rounded-lg mx-4 mb-2"><FaRegUser /> Create Destination</button>
                    <button className="flex items-center gap-1  hover:bg-gray-300 p-2 rounded-lg mx-4 mb-2"><FaRegUser /> Create Packages</button>
                </div>
            </Link>



            <Link href={'/admin/dashboard/create-packages'}>
                <div className="flex items-center justify-between font-bold text-[24px] bg-gray-400 hover:bg-gray-300 p-2 rounded-lg mx-4 mb-2">
                    <Image src={'/asia04.png'} alt="asia photo" width={50} height={50} className="w-[20] h-[20] rounded-full" />
                    <button className="">Rizmali</button>
                    <span><MdOutlineLogout /></span>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
