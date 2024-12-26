"use client"

import Link from "next/link"

const Banner = () => {
  return (
    <section className="relative w-full h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-center text-white" style={{
        backgroundImage: "url(http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735106834/as6aggbbikyz8usby8ad.png)"
      }}>
       
        <div className="flex justify-center items-center h-full">
          <h1 className="lg:text-[64px] text-primary">About Us</h1>
        </div>
        <div className="bg-[#135029] py-3">
          <div className="container mx-auto px-2">
              <h2><Link className="cursor-pointer text-primary" href={'/'}>Home</Link><span className="px-2">/</span>About Us</h2>
          </div>
        </div>
      </section>
  )
}

export default Banner
