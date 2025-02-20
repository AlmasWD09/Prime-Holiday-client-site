import { FaUserGroup } from 'react-icons/fa6';
import Link from 'next/link';
import { MdLogout } from 'react-icons/md';
import { FaHome } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Sidebar = () => {
    const router = useRouter()
    const handleLogout = () => {
        Cookies.remove('token');
        router.push('/login')
    }
    return (
        // <div className=" flex flex-col justify-between h-screen mx-4 pb-[64px]" >
        <div className=" fixed h-full px-2 pb-[64px] bg-[#fffff0] w-[260px] " style={{ overflow: "hidden" }}>
            <div className="flex items-center justify-center">
                <Image src={'/Group 87.png'} alt='dashboard logo' width={300} height={100} className='' />
            </div>
            <div className="  h-[calc(100vh-300px)] pt-12 space-y-4">
                <div className="bg-[#bed6d649] p-[8px] rounded-[8px] " >
                    <Link href={'/admin/dashboard/create-destination'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.445 3.168C8.59173 3.07026 8.76169 3.01304 8.93766 3.00215C9.11362 2.99127 9.28934 3.02709 9.447 3.106L15 5.882L20.553 3.106C20.7054 3.02984 20.8748 2.99388 21.045 3.00155C21.2152 3.00922 21.3806 3.06025 21.5256 3.14981C21.6706 3.23937 21.7902 3.36448 21.8733 3.51328C21.9563 3.66207 21.9999 3.82961 22 4V16C22 16.1646 21.9594 16.3266 21.8818 16.4718C21.8042 16.6169 21.6919 16.7407 21.555 16.832L15.555 20.832C15.4083 20.9298 15.2383 20.987 15.0623 20.9979C14.8864 21.0087 14.7107 20.9729 14.553 20.894L9 18.118L3.447 20.894C3.29458 20.9702 3.12522 21.0061 2.95501 20.9985C2.78479 20.9908 2.61935 20.9398 2.47439 20.8502C2.32944 20.7606 2.20977 20.6355 2.12674 20.4867C2.04372 20.3379 2.00009 20.1704 2 20V8C1.99998 7.83541 2.04058 7.67336 2.11821 7.52822C2.19583 7.38308 2.30808 7.25935 2.445 7.168L8.445 3.168ZM5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13C6.26522 13 6.51957 12.8946 6.70711 12.7071C6.89464 12.5196 7 12.2652 7 12C7 11.7348 6.89464 11.4804 6.70711 11.2929C6.51957 11.1054 6.26522 11 6 11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12ZM10 13C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11C10.2652 11 10.5196 11.1054 10.7071 11.2929C10.8946 11.4804 11 11.7348 11 12V12.001C11 12.2662 10.8946 12.5206 10.7071 12.7081C10.5196 12.8956 10.2652 13.001 10 13.001V13ZM14.707 9.292C14.6148 9.19649 14.5044 9.12031 14.3824 9.0679C14.2604 9.01549 14.1292 8.98791 13.9964 8.98675C13.8636 8.9856 13.7319 9.0109 13.609 9.06118C13.4861 9.11146 13.3745 9.18572 13.2806 9.27961C13.1867 9.3735 13.1125 9.48515 13.0622 9.60805C13.0119 9.73095 12.9866 9.86263 12.9877 9.9954C12.9889 10.1282 13.0165 10.2594 13.0689 10.3814C13.1213 10.5034 13.1975 10.6138 13.293 10.706L14.586 12L13.293 13.293C13.1108 13.4816 13.01 13.7342 13.0123 13.9964C13.0146 14.2586 13.1198 14.5094 13.3052 14.6948C13.4906 14.8802 13.7414 14.9854 14.0036 14.9877C14.2658 14.99 14.5184 14.8892 14.707 14.707L16 13.414L17.293 14.707C17.4816 14.8892 17.7342 14.99 17.9964 14.9877C18.2586 14.9854 18.5094 14.8802 18.6948 14.6948C18.8802 14.5094 18.9854 14.2586 18.9877 13.9964C18.99 13.7342 18.8892 13.4816 18.707 13.293L17.414 12L18.707 10.707C18.8892 10.5184 18.99 10.2658 18.9877 10.0036C18.9854 9.74141 18.8802 9.49059 18.6948 9.30518C18.5094 9.11978 18.2586 9.01461 17.9964 9.01233C17.7342 9.01005 17.4816 9.11085 17.293 9.293L16 10.586L14.707 9.293V9.292Z" fill="#F49D2A" />
                        </svg>

                        <h1 className='hover:text-primary pl-1 text-gray-500 text-[16px]'>Destinations</h1>
                    </Link>
                </div>
                <div className=" bg-[#bed6d649] p-[8px] rounded-[8px] " >
                    <Link href={'/admin/dashboard/create-packages'} className="flex items-center gap-1 font-Roboto font-medium text-[16px]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.04 4.01001H2.04V6.01001H18.04V4.01001ZM16.02 0.0100098H4.01V2.01001H16.02V0.0100098ZM0 8.00001V10H2V18C2 18.5304 2.21071 19.0392 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0392 18 18.5304 18 18V10H20V8.00001H0ZM9 17H4V15H9V17Z" fill="#F49D2A" />
                        </svg>

                        <h1 className='hover:text-primary pl-1 text-gray-500 text-[16px] '>Packages</h1>
                    </Link>
                </div>
            </div>



            <div className='pt-6'>
                <div className="bg-[#bed6d649] p-[8px] rounded-[8px] my-[8px] " >
                    <Link href={'/'} className="flex items-center gap-1 font-Roboto font-medium text-[16px] text-gray-500 "><FaHome />Home</Link>
                </div>
                <div className="bg-[#bed6d649] p-[8px] flex justify-between items-center rounded-[8px]">
                    <div className="flex items-center gap-1 font-Roboto font-medium text-gray-500 text-[16px]">
                        <FaUserGroup />Rizmali
                    </div>

                    <div>
                        <span
                            onClick={() => handleLogout()}
                            className="text-[16px] cursor-pointer"><svg width="18" height="18" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5999 6.5L9.7999 9.75M12.5999 6.5L9.7999 3.5M12.5999 6.5L3.73324 6.5M7.46657 12.5L1.3999 12.5L1.3999 0.5L7.46657 0.5" stroke="#DC3545" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
