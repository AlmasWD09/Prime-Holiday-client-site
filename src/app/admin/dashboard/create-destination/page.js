"use client"

import AddNewDestination from "@/app/components/dashboard/modal/AddNewDestination"
import AddDestinationTable from "@/app/components/dashboard/table/AddDestinationTable"
import Image from "next/image"
import { useState } from "react"

const createDestinationPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(true)
    
  }

  
  return (
    <div className="bg-gray-100 px-8 pt-20 h-[880px]">
        <div className="flex  items-center justify-between gap-[16px]">
          <div className="flex items-center gap-3">
            <h1 className="text-[36px] font-Roboto font-semibold ml-20">Hello, Rizmali</h1>
          <Image src={"/hands.png"} alt="hands" width={100} height={100} className="w-[42px] h-[42px]" />
          </div>
          <div>
          <button
            onClick={() => handleModal()}
            className="bg-primary text-[#FFFFFF] text-lg font-semibold px-[16px] py-[6px] rounded mr-20">Add new destination</button>
        </div>
        </div>
      {/* add destination table component */}
      <AddDestinationTable />
  


      {/* add new destination modal */}
      {
        modalOpen && <AddNewDestination setModalOpen={setModalOpen}/>
      }
    </div>
  )
}

export default createDestinationPage
