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
import { useRef } from "react";

const PrimeDestination = () => {
  const grounds = [
    {
      image: "/prime01.png",
      title1: "Qatar",
      title2: "9 Days From",
    },
    {
      image: "/prime02.png",
      title1: "Sri Lanka",
      title2: "9 Days From",
    },
    {
      image: "/prime01.png",
      title1: "Morocco",
      title2: "9 Days From",
    },
    {
      image: "/prime01.png",
      title1: "Qatar",
      title2: "9 Days From",
    },
    {
      image: "/prime01.png",
      title1: "Sri Lanka",
      title2: "9 Days From",
    },
    {
      image: "/prime01.png",
      title1: "Morocco",
      title2: "9 Days From",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <section>
      <div className="container mx-auto px-4 py-10">
        <div className="md:flex md:items-center md:justify-between pb-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary">
            Prime Destinations
          </h1>

          <div className="text-end md:text-start md:flex justify-between mt-8 md:mt-0">
            <button
              title="Previous Slide"
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 mx-3 text-primary transition-colors duration-300 rounded-full rtl:-scale-x-100 border border-primary hover:bg-primary hover:text-white"
            >
              <BiSolidLeftArrow className="w-4 h-4" />
            </button>
            <button
              title="Next Slide"
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 mx-3 text-primary transition-colors duration-300 rounded-full rtl:-scale-x-100 border border-primary hover:bg-primary hover:text-white"
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
          {grounds.map((ground, idx) => (
            <SwiperSlide key={idx}>
              <Link
                href={`/destination/${idx}`}
                className="relative  cursor-pointer"
              >
                <Image
                  className="object-cover object-center w-full h-96  lg:h-96 rounded-xl"
                  src={ground.image}
                  alt={ground.title1}
                  width={300}
                  height={300}
                />

                <div className="absolute z-10  w-full  bottom-10  p-3 bg-[#B0B0B0] bg-opacity-30 text-red-200 flex justify-center gap-2">
                  <div className="flex  text-start z-20 text-white">
                    <h2 className="">
                      <FaLocationDot className="text-2xl pt-2 " />
                    </h2>
                    <div>
                      <div>
                        <h2 className=" font-bold text-white">
                          {ground.title1}
                        </h2>
                      </div>
                      <h2>{ground.title2}</h2>
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
