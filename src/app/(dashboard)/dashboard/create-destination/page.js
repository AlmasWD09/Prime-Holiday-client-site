"use client"

import AddNewDestination from "@/app/components/dashboard/modal/AddNewDestination"
import Image from "next/image"
import { useState } from "react"

const createDestinationPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

const handleModal = () =>{
  setModalOpen(true)
}
  return (
    <div className="bg-gray-200 m-8 p-8 h-[700px]">
      <div className="flex justify-between items-center">
        <div className="flex  items-center gap-[16px]">
          <h1 className="text-[36px] font-Roboto font-semibold">Hello, Rizmali</h1>
          <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
        </div>
        <div>
          <button 
          onClick={()=>handleModal()}
          className="bg-primary text-[#FFFFFF] px-[16px] py-[6px] rounded-xl">Add new destination</button>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center h-[700px]">
        <h1 className="text-5xl font-semibold font-Roboto">No Data</h1>
        <p className="text-xl">Please Data Added!!</p>
      </div> */}

      {
      modalOpen && <AddNewDestination />
      }
    </div>
  )
}

export default createDestinationPage
