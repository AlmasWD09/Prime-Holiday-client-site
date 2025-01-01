"use client";

import Link from "next/link";


const CustomBanner = ({ title, subtitle, Breadcrumb, url }) => {
  return (
    <section
      className="relative w-full h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-black bg-opacity-50 bg-center mb-20 text-white"
      style={{
        backgroundImage: `url('${url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        // backgroundBlendMode: "overlay",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-center text-[24px] lg:text-[70px] text-primary font-semibold text-wrap" style={{ fontFamily: 'MyFont, sans-serif' }}>
          {title}
        </h1>
        <p className="text-[20px] md:text-[32px] font-bold lg:w-[40%] w-full mx-auto text-center">
          {subtitle}
        </p>
      </div>
      {Breadcrumb && (
        <div className="bg-[#135029] py-3">
          <div className="container mx-auto px-2 flex">
            {Breadcrumb?.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <Link
                    className={
                      item?.active
                        ? `cursor-pointer text-primary font-medium text-base`
                        : `cursor-pointer text-white font-medium text-base `
                    }
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                  {index < Breadcrumb.length - 1 && (
                    <span className="px-2">/</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomBanner;
