"use client";

import Image from "next/image";

const DestinationLove = () => {
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
  ];
  return (
    <>
      <section className="container mx-auto px-4 pt-10 pb-10">
        <h2 className="text-primary text-center font-Roboto text-[38px] font-semibold">
          Destinations you'll love
        </h2>

        {/* ************** */}
        <div className="grid grid-cols-1 gap-2 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {grounds.map((ground, idx) => {
            return (
              <div key={idx}>
                <div className="relative max-w-md">
                  <Image
                    className="object-cover object-center w-full h-64  lg:h-96"
                    src={ground.image}
                    alt={ground.title1}
                    width={300}
                    height={300}
                  />
                  <div className="absolute w-full flex  items-center justify-between bottom-0 p-3 bg-[#135029] text-white">
                    <div>
                      <h5 className="uppercase">{ground.title1}</h5>
                      <div>
                        {ground.title2} <span className="font-bold">$2525</span>
                      </div>
                    </div>
                    <div className="">
                      <button className="bg-primary text-white px-4 py-2">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default DestinationLove;
