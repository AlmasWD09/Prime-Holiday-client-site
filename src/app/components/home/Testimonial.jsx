"use client"


import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
    <>
      <section className="container mx-auto px-4 my-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-0">

          {/* left side content */}
          <div className=" w-full ">
            <h1 className="font-bold font-Roboto text-primary text-2xl lg:text-5xl">
            Testimonials Of Satisfaction
            </h1>
            <p className="max-w-3xl mt-6 font-Roboto text-[20px] lg:text-[28px] text-[#454545]">
            The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.
            </p>
          </div>

          {/* right side image */}
          <Image
            className="object-cover object-center h-[300px] rounded-xl lg:h-[344px] md:w-[330px] lg:w-[440px]"
            src="/testimonial02.png"
            alt="testimonial"
            width={500}
            height={400}
          />
        </div>
      </section>
    </>
  );
};

export default Testimonial;