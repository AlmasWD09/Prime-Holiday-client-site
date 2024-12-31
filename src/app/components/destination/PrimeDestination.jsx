"use client";

import Asia from "@/app/components/destination/Asia";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const PrimeDestination = () => {
  const grounds = [
    {
      image: "/primeDestination01.png",
      title1: "Egypt",
      title2: "The Gift of the Nile",
    },
    {
      image: "/primeDestination02.png",
      title1: "Morocco",
      title2: "Land of Light",
    },
    {
      image: "/primeDestination03.png",
      title1: "Zanzibar",
      title2: "Spice Spiceland",
    },
  ];
  return (
    <>
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-primary font-Roboto text-2xl md:text-[38px] font-semibold">
          Prime Destinations
        </h2>

        {/* ************** */}
        <h2 className="text-primary md:text-xl font-bold py-2">Africa</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {grounds.map((ground, idx) => {
            return (
              <div key={idx}>
                <div className="relative max-w-md -z-10">
                  <Image
                    className="object-cover object-center w-full h-96  lg:h-96 rounded-xl"
                    src={ground.image}
                    alt={ground.title1}
                    width={300}
                    height={300}
                  />

                  <div className="absolute z-10  w-full  bottom-10  p-3 bg-[#B0B0B0] bg-opacity-30 text-white flex justify-center gap-2">
                    <div className="flex text-start z-20">
                      <div>
                        <FaLocationDot className="text-2xl pt-2" />
                      </div>
                      <div>
                        <h2>{ground.title1}</h2>
                        <h2>{ground.title2}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* asia component here... */}
        <Asia />
      </section>
    </>
  );
};

export default PrimeDestination;
