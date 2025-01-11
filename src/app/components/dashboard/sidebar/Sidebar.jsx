import { FaUserGroup } from 'react-icons/fa6';
import Link from 'next/link';
import { MdLogout } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className=" flex flex-col justify-between h-screen mx-4 pb-[64px]">
            <div className="pt-[168px]">
                <div className="my-[8px] " >
                    <Link href={'/dashboard/create-destination'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]"><FaUserGroup />Create Destinations</Link>
                </div>
                <div className="my-[8px] " >
                    <Link href={'/dashboard/manage-users'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]"><FaUserGroup />Manage users</Link>
                </div>
            </div>



            <div className=" bg-[#cdd9da] p-[8px] flex justify-between items-center rounded-[8px]">
                <div className="flex items-center gap-1 font-Roboto font-medium">
                    <FaUserGroup />Rizmali
                </div>

                <div>
                    <Link href={'/dashboard/login'} className="text-[16px] cursor-pointer"><MdLogout /></Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
