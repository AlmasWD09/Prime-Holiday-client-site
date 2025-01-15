import Image from 'next/image'
import React from 'react'

const ManageUsersPage = () => {
  return (
    <div className="bg-gray-200 m-8 p-8 h-[700px]">
      <div className="flex  items-center gap-[16px]">
        <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
        <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
      </div>
      <div className="flex justify-end items-center">
    
    <div>
      <button
        className="bg-primary text-[#FFFFFF] px-[16px] py-[6px] rounded-xl">Create New Packages</button>
    </div>
  </div>
    </div>
  )
}

export default ManageUsersPage
