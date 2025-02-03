"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Asia = ({ asiadata }) => {



  if (!asiadata || asiadata.length === 0) return <p>Loading...</p>;

  return (

    <div className="pt-6 lg:pt-20">
      <h1 className="text-primary text-xl font-bold py-2">Asia</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
          asiadata?.slice(0, 1).map((ground, idx) =>
            <div
              key={ground.id || idx}

              className="relative w-full lg:col-span-3 h-full lg:h-[600px] overflow-hidden  rounded-xl"

            >
              <Image
                src={ground.image}
                alt="First Destination"
                className={`w-full h-full rounded-xl object-cover transition-transform duration-500 ease-in-out }`}
                width={500}
                height={500}
              />
              <div className="absolute z-10 w-[94%] md:w-[96%] lg:w-[97%] bottom-3 lg:bottom-5 left-1/2 transform -translate-x-1/2 p-3 bg-[#B0B0B0] bg-opacity-30 rounded-xl text-[#FFFFF0]">
                <div className="flex text-start z-20">
                  <div>
                    <FaLocationDot className="text-2xl pt-2" />
                  </div>
                  <div>
                    <h5 className="text-[24px] font-bold font-Roboto">{ground?.name}</h5>
                    <h5 className="text-[16px] font-medium">{ground?.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          )
        }











        {
          asiadata?.slice(-3).map((ground, idx) =>
            <div
              key={ground.id || idx}
              className="relative  overflow-hidden  rounded-xl"
            >
              <Image
                src={ground.image}
                alt="Eiffel Tower"
                className={`w-full h-full rounded-xl object-cover transition-transform duration-500 ease-in-out
                  }`}
                width={100}
                height={100}
              />
              <div className="absolute z-10  w-[94%]  bottom-4 mx-4  p-3 bg-[#B0B0B0] bg-opacity-30 rounded-xl text-[#FFFFF0] flex gap-2">
                <div className="flex text-start z-20">
                  <h2>
                    <FaLocationDot className="text-2xl pt-2" />
                  </h2>
                  <div>
                    <h5 className="text-[24px] font-bold font-Roboto ">{ground?.name}</h5>
                    <h5 className="text-[16px] font-medium">{ground?.title}</h5>
                  </div>
                </div>
              </div>
            </div>

          )
        }
      </div>
    </div>

  );
};

export default Asia;
