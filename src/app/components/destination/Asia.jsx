"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Asia = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const [tamName, setTabName] = useState("Includes & Excludes");
  
  return (

      <div className="pt-6 lg:pt-20">
        <h1 className="text-primary text-xl font-bold py-2">Asia</h1>



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* First Card (2 rows, 2 columns) */}
          <div
            className="relative w-full lg:col-span-3 h-full lg:h-[600px] overflow-hidden  rounded-xl"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src="/asia01.png"
              alt="First Destination"
              className={`w-full h-full rounded-xl object-cover transition-transform duration-500 ease-in-out ${
                hoveredIndex === 0 ? "scale-110" : ""
              }`}
              width={500}
              height={500}
            />
            <div className="absolute z-10 w-[94%] md:w-[96%] lg:w-[97%] bottom-3 lg:bottom-5 left-1/2 transform -translate-x-1/2 p-3 bg-[#B0B0B0] bg-opacity-30 rounded-xl text-white">
              <div className="flex text-start z-20">
                <div>
                  <FaLocationDot className="text-2xl pt-2" />
                </div>
                <div>
                  <h5 className="text-[24px] font-bold font-Roboto">Kerala</h5>
                  <h5 className="text-[16px] font-medium">God's Own Country</h5>
                </div>
              </div>
            </div>
          </div>













          {/* second Card (1 row, 1 column) */}
          <div
            className="relative  overflow-hidden  rounded-xl"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src="/asia02.png"
              alt="Eiffel Tower"
              className={`w-full h-full rounded-xl object-cover transition-transform duration-500 ease-in-out ${
                hoveredIndex === 2 ? "scale-110" : ""
              }`}
              width={100}
              height={100}
            />
            <div className="absolute z-10  w-[94%]  bottom-4 mx-4  p-3 bg-[#B0B0B0] bg-opacity-30 rounded-xl text-white flex gap-2">
              <div className="flex text-start z-20">
                <h2>
                  <FaLocationDot className="text-2xl pt-2" />
                </h2>
                <div>
                  <h5 className="text-[24px] font-bold font-Roboto ">Oman</h5>
                  <h5 className="text-[16px] font-medium">Beauty Has an Address</h5>
                </div>
              </div>
            </div>
          </div>

          {/* thirt Card (1 row, 1 column) */}
          <div
            className="relative  overflow-hidden  rounded-xl"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src="/asia03.png"
              alt="Greece"
              className={`w-full h-full rounded-xl object-cover transition-transform duration-500 ease-in-out ${
                hoveredIndex === 3 ? "scale-110" : ""
              }`}
              width={100}
              height={100}
            />
            <div className="absolute z-10  w-[94%]  bottom-4 mx-4  p-3 bg-[#B0B0B0] bg-opacity-30 rounded-xl text-white flex gap-2">
              <div className="flex text-start z-20">
                <h2>
                  <FaLocationDot className="text-2xl pt-2" />
                </h2>
                <div>
                  <h5 className="text-[24px] font-bold font-Roboto ">Qatar</h5>
                  <h5 className="text-[16px] font-medium">Experience the World Beyond</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Four Card (1 row, 1 column) */}
          <div
            className="relative  overflow-hidden  rounded-xl"
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src="/asia04.png"
              alt="Mountain View"
              className={`w-full h-full rounded-xl object-cover transition-transform duration-500 ease-in-out ${
                hoveredIndex === 4 ? "scale-110" : ""
              }`}
              width={100}
              height={100}
            />
            <div className="absolute z-10  w-[94%]  bottom-4 mx-4  p-3 bg-[#B0B0B0] bg-opacity-30 rounded-xl text-white flex gap-2">
              <div className="flex text-start z-20">
                <h2>
                  <FaLocationDot className="text-2xl pt-2" />
                </h2>
                <div>
                  <h5 className="text-[24px] font-bold font-Roboto ">Sri lanka</h5>
                  <h5 className="text-[16px] font-medium">You'll Come Back for More</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Asia;
