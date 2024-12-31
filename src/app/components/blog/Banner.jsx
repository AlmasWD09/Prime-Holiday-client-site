"use client";

import Link from "next/link";

const Banner = ({ title, subtitle, Breadcrumb, url }) => {
  return (
    <section
      className="relative w-full h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('${url}')`,
      }}
    >
      <div className="flex flex-col justify-center items-center h-full md:space-y-8">
        <h1 className="text-2xl lg:text-[64px] text-primary">{title}</h1>
        <p className="text-lg md:text-[30px]">{subtitle}</p>
      </div>
      <div className="bg-[#135029] py-3">
        <div className="container mx-auto px-2">
          {Breadcrumb?.map((item, index) => {
            return (
              <div key={index}>
                <Link className="cursor-pointer text-primary" href={item.href}>
                  {item.name}
                </Link>
                <span className="px-2">/</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner;
