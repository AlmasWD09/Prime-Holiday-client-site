"use client"

import Link from "next/link"

const Banner = () => {
  return (
    <section className="relative w-full h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-center text-white" style={{
        backgroundImage: "url('/blogBanner.png')"
      }}>
       
        <div className="flex flex-col justify-center items-center h-full md:space-y-8">
          <h1 className="text-2xl lg:text-[64px] text-primary">Explore Our Blogs</h1>
          <p className="text-lg md:text-[30px]">Expert Holiday Tips and Guides</p>
        </div>
        <div className="bg-[#135029] py-3">
          <div className="container mx-auto px-2">
              <h2><Link className="cursor-pointer text-primary" href={'/'}>Home</Link><span className="px-2">/</span>Blogs</h2>
          </div>
        </div>
      </section>
  )
}

export default Banner
