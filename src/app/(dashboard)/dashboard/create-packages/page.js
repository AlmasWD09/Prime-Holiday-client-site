import CreatePackagesTable from '@/app/components/dashboard/table/CreatePackagesTable'
import Image from 'next/image'

const createPpackages = () => {
  return (
    <div className="bg-gray-200 m-8 p-8 h-[700px]">
      <div className="flex  items-center gap-[16px]">
        <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
        <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
      </div>

    <div className='flex justify-between'>
      <h1 className='text-[24px] font-Roboto font-bold text-primary'>All-Inclusive Packages</h1>
      <button className="bg-primary text-[#FFFFFF] px-[16px] py-[6px] rounded-xl">Create New Packages</button>
  </div>


  {/* create packages table */}
  <div className='mt-10'>
  <CreatePackagesTable />
  </div>
    </div>
  )
}

export default createPpackages;
