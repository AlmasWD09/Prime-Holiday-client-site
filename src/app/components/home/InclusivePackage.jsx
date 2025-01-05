"use client";
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";

const InclusivePackage = () => {
    // const [grounds, setgrounds] = useState([]);
    // const [loading, setLoading] = useState(true); 
    // const [error, setError] = useState(null); 


//  useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/Inclusive.json");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const result = await response.json();
//         setgrounds(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
  

const grounds = [
  {
    image: "/photo01.png",
    title1: "Immersion in cultural Oman",
    title2: "9 Days From",
  },
  {
    image: "/photo02.png",
   title1: "Essence of Oman",
    title2: "9 Days From",
  },
  {
    image: "/photo03.png",
    title1: "Luxury Oman",
    title2: "9 Days From",
  },
  {
    image: "/photo01.png",
    title1: "Immersion in cultural Oman",
    title2: "9 Days From",
  },
  {
    image: "/photo02.png",
    title1: "Essence of Oman",
    title2: "9 Days From",
  },
  {
    image: "/photo03.png",
    title1: "Luxury Oman",
    title2: "9 Days From",
  },
  {
    image: "/photo02.png",
    title1: "Essence of Oman",
    title2: "9 Days From"
  }
];
const swiperRef = useRef(null);

  return (
      <section>
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:justify-between pt-10 md:pt-16">
            <h1 className="text-2xl lg:text-5xl font-bold font-Roboto text-primary md:pb-4">
              All-Inclusive Packages
            </h1>

            <div className="text-end md:text-start md:flex justify-between gap-3 pb-4">
              <button
                title="Previous Slide"
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-2 mx-3 md:mx-0 text-primary transition-colors duration-300 rounded-full rtl:-scale-x-100 border border-primary hover:bg-primary hover:text-white"
              >
                <BiSolidLeftArrow className="w-4 h-4" />
              </button>
              <button
                title="Next Slide"
                onClick={() => swiperRef.current?.slideNext()}
                className="p-2  text-primary transition-colors duration-300 rounded-full rtl:-scale-x-100 border border-primary hover:bg-primary hover:text-white"
              >
                <BiSolidRightArrow className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ================================== responsive all device start =========================== */}
          <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {/* ================================== responsive all device end =========================== */}
            {grounds.map((ground, idx) => (
              <SwiperSlide key={idx}>
                <Link href={`/destination/${idx}`}>
                <div className="relative  bg-[#135029] p-4 rounded-xl space-y-4">

                  <Image
                    className="object-cover object-center w-full h-64 lg:h-72 rounded-xl"
                    src={ground.image}
                    alt="inclusive photo"
                    width={500}
                    height={300}
                  />
                  
                  <div className="bg-[#135029] text-white">
                    <div className="space-y-2">
                      <h5 className="text-[24px] font-bold font-Roboto">{ground.title1}</h5>
                      <h5>
                        {ground.title2}{" "}
                        <span className="font-bold text-primary">$2525</span>
                      </h5>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          </div>
        </div>
      </section>
  );
};

export default InclusivePackage;
