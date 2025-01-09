"use client"

import Link from "next/link"
import { FaUserGroup } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";


const Sidebar = () => {

    const handleLogin = () => {
        console.log('logi page')
    }

    
    return (
        <div className=" flex flex-col justify-between h-screen mx-4 mt-4 pb-[64px]">

            <div className="pt-[168px]">
                <div className="my-[8px] " >
                    <Link href={'/dashboard/createDestination'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]"><FaUserGroup />Create Destinations</Link>
                </div>
                <div className="my-[8px] " >
                    <Link href={'/dashboard/manageUsers'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]"><FaUserGroup />Manage users</Link>
                </div>
            </div>




            <div className=" bg-[#cdd9da] p-[8px] flex justify-between items-center rounded-[8px]">
                <div className="">
                    <Link href={'/'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]"><FaUserGroup />Rizmali</Link>
                </div>

                <div>
                    <MdLogout onClick={() => handleLogin()} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
