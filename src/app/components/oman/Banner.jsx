"use client"

import Link from "next/link"


const Banner = () => {
  return (
    <section className="relative w-full h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-center text-[#FFFFF0]" style={{
      backgroundImage: "url(/omanBanner.png)"
    }}>
     
      <div className="flex justify-center items-center h-full">
        <h1 className="text-center text-[24px] lg:text-[80px] text-primary font-semibold text-wrap" style={{ fontFamily: 'MyFont, sans-serif' }}>Your All-Inclusive Journey Starts Here</h1>
      </div>
      <div className="bg-[#135029] py-3">
        <div className="container mx-auto px-2">
            <h2><Link className="cursor-pointer text-primary" href={'/'}>Home / </Link>Destination<span className="px-2">/</span>Oman</h2>
        </div>
      </div>
    </section>
  )
}

export default Banner
