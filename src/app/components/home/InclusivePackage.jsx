"use client"
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const InclusivePackage = () => {

  const grounds = [
    {
      image: "/photo01.png",
      title1: "Qatar",
      title2: "9 Days From",
    },
    {
      image: "/photo02.png",
      title1: "sri lanka",
      title2: "9 Days From",
    },
    {

      image: "/photo03.png",
      title1: "Morocco",
      title2: "9 Days From",
    },
    {
      image: "/photo01.png",
      title1: "Qatar",
      title2: "9 Days From",
    },
    {
      image: "/photo02.png",
      title1: "sri lanka",
      title2: "9 Days From",
    },
    {

      image: "/photo03.png",
      title1: "Morocco",
      title2: "9 Days From",
    },
  ]

  return (
    <>
      <section className='container mx-auto px-4 pt-10'>
        <section className="">
          <div className="container px-6 py-10 mx-auto">
            <div className="md:flex md:items-center md:justify-between pb-4">
              <h1 className='text-2xl md:text-4xl font-bold text-primary'>All-Inclusive Packages</h1>

              <div className="flex justify-between mt-8 md:mt-0">
                <button title="left arrow" className="p-2 mx-3 text-primary transition-colors duration-300  rounded-full rtl:-scale-x-100 border border-primary hover:bg-primary hover:text-white">
                  <BiSolidRightArrow className="w-4 h-4" />
                </button>
                <button title="left arrow" className="p-2 mx-3 text-primary transition-colors duration-300  rounded-full rtl:-scale-x-100 border border-primary hover:bg-primary hover:text-white">
                  <BiSolidLeftArrow className="w-4 h-4" />
                </button>
              </div>
            </div>


            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <div>
                {
                  grounds.map((ground, idx) => {
                    return (
                      <SwiperSlide key={idx}> <div >
                        <div className="relative max-w-md bg-[#135029] p-4 rounded-xl space-y-4">
                          <Image
                            className="object-cover object-center w-full h-64  lg:h-72 rounded-xl "
                            src={ground.image}
                            alt="inclusive photo"
                            width={300}
                            height={300}
                          />
                          <div className="bg-[#135029] text-white">
                            <div className="space-y-2">
                              <h5 className="uppercase">{ground.title1}</h5>
                              <h5>{ground.title2} <span className="font-bold text-primary">$2525</span></h5>
                            </div>
                          </div>
                        </div>
                      </div></SwiperSlide>
                    )
                  })
                }
              </div>
            </Swiper>
          </div>
        </section>
      </section>
    </>
  )
}

export default InclusivePackage


