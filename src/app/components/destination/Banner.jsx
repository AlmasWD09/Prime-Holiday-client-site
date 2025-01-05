"use client";

import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="relative h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/destionationBanner.png')",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full space-y-8 lg:space-y-32 text-center">
        <div>
          <h2 className="text-center text-[24px] lg:text-[80px] text-primary font-semibold text-wrap" style={{ fontFamily: 'MyFont, sans-serif' }}>
          Explore Our Magical Destinations
          </h2>
        </div>
      </div>
      <div className="bg-[#135029] py-3">
        <div className="container mx-auto px-2">
          <div>
            <Link className="cursor-pointer text-primary" href={"/"}>
              Home
            </Link>
            <span className="px-2">/</span>Destination
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
