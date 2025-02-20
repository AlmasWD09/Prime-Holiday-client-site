"use client"

import CreatePackagesTable from '@/app/components/dashboard/table/CreatePackagesTable'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const createPpackages = () => {
  const router = useRouter();

  // handleNavigate page
  const handleCreateNewPackage = () => {
    router.push('/admin/dashboard/create-new-packages')
  }
  return (
    <div className="bg-gray-100 px-8 pt-20 h-[880px]">
      <div className="flex  items-center gap-[16px] px-20">
        <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
        <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
      </div>

      <div className='flex justify-between px-20'>
        <h1 className='text-[24px] font-Roboto font-bold text-primary'>All-Inclusive Packages</h1>
        <button onClick={() => handleCreateNewPackage()} className="bg-primary text-[#FFFFFF] px-[16px] py-[6px] rounded">Create New Packages</button>
      </div>


      {/* create packages table */}
      <div className='mt-10'>
        <CreatePackagesTable />
      </div>
    </div>
  )
}

export default createPpackages;
