"use client"


import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const Testimonial = () => {
  const [timeLeft, setTimeLeft] = useState(0); // Timer state to control countdown
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time) => {
    // Update the countdown timer
    setTimeLeft(Math.ceil(time / 1000));
  };

  const onSlideChange = () => {
    // Reset the timer when the slide changes
    setTimeLeft(0);
  };

  const reviews = [
    {
      quote: "Awesome Coding",
      description:
        "The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.",
      name: "TESTIMONIALS OF SATISFACTION",
      image: "http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735190896/inbxylz2xcnyngok5ncq.png",
    },
    {
      quote: "Great Support",
      description:
        "The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.",
      name: "TESTIMONIALS OF SATISFACTION",
      image: "/testimonial02.png",
    },
    {
      quote: "Exceptional Design",
      description:
        "The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.",
        name: "TESTIMONIALS OF SATISFACTION",
      image: "http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735190896/inbxylz2xcnyngok5ncq.png",
    },
  ];

  return (
      <div className="container mx-auto px-4 my-16 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}  // Update timer
        onSlideChange={onSlideChange}  // Reset timer on slide change
        className="mySwiper max-w-6xl"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
          <div  className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

             {/* left side content */}
            <div className=" w-full ">
              <h1 className="font-semibold text-primary text-2xl md:text-4xl ">
                {review.name}
              </h1>
              <p className="max-w-md mt-6 font-Roboto">
                {review.description}
              </p>
            </div>

             {/* right side image */}
             <Image
              className="object-cover object-center h-[300px] rounded-xl lg:h-[400px] w-[500px]"
              src={review.image}
              alt="testimonial"
              width={100}
              height={100}
            />
          </div>
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>

  );
};

export default Testimonial;
