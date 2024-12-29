"use client"

import Banner from "@/app/components/cancelation/Banner"
import CancelationPolicy from "@/app/components/cancelation/CancelationPolicy"




const Cancelation = () => {
  return (
    <>
      <div className="pb-10">
        <Banner />
        <CancelationPolicy />
      </div>
    </>
  )
}

export default Cancelation
