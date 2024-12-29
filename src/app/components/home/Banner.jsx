
"use client"
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <div
      className=" w-full h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-center "
    style={{
      backgroundImage: "url(http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735362515/ggcunfjclwi1fpcvw67n.png)"
    }}
    >


      {/* Content */}
      <div className="relative z-10 grid justify-center items-center h-[356px] lg:h-[550px] text-white py-20 md:p-8">
        <div className="lg:pt-[15%]">
          <h1 className=" text-center text-[24px] lg:text-[70px] text-primary font-semibold text-wrap  mb-5">Your All-Inclusive Journey Starts Here</h1>
          <p className="text-[20px] md:text-[32px] font-bold w-[65%] mx-auto text-center"> “  The Essence of a Holiday is to Enrich Our Lives & Create Lasting Memories ”</p>
        </div>
      </div>
    </div>
  )
}

export default Banner

