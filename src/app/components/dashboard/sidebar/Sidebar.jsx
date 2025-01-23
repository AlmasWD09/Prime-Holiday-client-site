import { FaUserGroup } from 'react-icons/fa6';
import Link from 'next/link';
import { MdLogout } from 'react-icons/md';
import { FaHome } from "react-icons/fa";
import Image from 'next/image';

const Sidebar = () => {
    return (
        <div className=" flex flex-col justify-between h-screen mx-4 pb-[64px]" >
        {/* <div className=" flex flex-col justify-between h-screen mx-4 pb-[64px]" style={{position:"fixed",height:"100vh", overflow:"hidden"}}> */}
            <div className="pt-[168px]">
                <div className="my-[8px] " >
                    <Link href={'/dashboard/create-destination'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]">
                    <Image src={'/dashboardLogo02.png'} alt='dashboard logo' width={50} height={50} className='w-[16px] h-[16px] '/>
                    <h1 className='hover:text-primary'>Create Destinations</h1>
                    </Link>
                </div>
                <div className="my-[8px] " >
                    <Link href={'/dashboard/create-packages'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]">
                    <Image src={'/dashboardLogo01.png'} alt='dashboard logo' width={50} height={50}
                    className='w-[20px] h-[20px]'
                    />
                    <h1 className='hover:text-primary'>Create Packages</h1>
                    </Link>
                </div>
            </div>



            <div>
                <div className="bg-[#cdd9da] p-[8px] rounded-[8px] my-[8px] " >
                    <Link href={'/'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]"><FaHome />Home</Link>
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

        </div>
    )
}

export default Sidebar
