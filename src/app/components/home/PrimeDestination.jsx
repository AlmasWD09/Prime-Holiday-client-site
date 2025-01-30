"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
// Import required modules
import { useEffect, useRef, useState } from "react";

const PrimeDestination = () => {
  const [grounds, setgrounds] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.0.80.13:8000/api/admin/country");
       
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setgrounds(result?.countries?.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between pt-10 md:pt-16">
          <h1 className="text-2xl lg:text-5xl font-bold font-Roboto text-primary md:pb-4">
            Prime Destinations
          </h1>

          <div className="text-end md:text-start md:flex justify-between gap-3 pb-4">
            <button
              title="Previous Slide"
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 mx-3 md:mx-0 text-primary transition-colors duration-300 rounded-full rtl:-scale-x-100 border border-primary hover:bg-primary hover:text-[#FFFFF0]"
            >
              <BiSolidLeftArrow className="w-4 h-4" />
            </button>
            <button
              title="Next Slide"
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 text-primary transition-colors duration-300 rounded-full rtl:-scale-x-100 border border-primary hover:bg-primary hover:text-[#FFFFF0]"
            >
              <BiSolidRightArrow className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ================================== responsive all device start =========================== */}
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
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {/* ================================== responsive all device end =========================== */}
          {grounds?.slice(0, 7).map((ground, idx) => (
            <SwiperSlide key={idx}>
              <Link
                href={`/destination/${ground?.id}`}
                className="relative  cursor-pointer" 
              >
                <Image
                  className="object-cover object-center w-full h-96  lg:h-96 rounded-xl"
                  src={ground.image}
                  alt={"ground"}
                  width={300}
                  height={300}
                />

                <div className="absolute z-10 w-[96%] md:w-[92%] lg:w-[94%] xl:w-[96%]  mx-auto ml-2 sm:ml-0 md:ml-4  bottom-2 sm:bottom-4 xl:bottom-3 p-1 sm:p-3 rounded-xl flex gap-2 bg-[#B0B0B0] bg-opacity-30 ">
                  <div className="flex  text-start z-20 text-[#FFFFF0]">
                    <h2 className="">
                      <FaLocationDot className="text-2xl pt-2 " />
                    </h2>
                    <div>
                      <div>
                        <h2 className="text-xl font-bold text-[#FFFFF0]">
                          {ground.name}
                        </h2>
                      </div>
                      <h2 >{ground.title}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PrimeDestination;
