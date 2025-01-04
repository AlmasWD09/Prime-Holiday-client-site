"use client";
import Image from "next/image";

const DestinationLove = () => {
  const grounds = [
    {
      image: "/photo01.png",
      title1: "Immersion in cultural Qatar",
      title2: "7 Days From",
    },
    {
      image: "/photo02.png",
      title1: "Luxury of Morocco",
      title2: "7 Days From",
    },
    {
      image: "/photo03.png",
      title1: "Essence of Qatar",
      title2: "7 Days From",
    },
  ];
  return (
    <>
      <section className="container mx-auto px-4 pt-10 pb-10 ">
        <h2 className="text-primary font-Roboto text-[38px] font-semibold">
          Destinations you'll love
        </h2>

        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3">
          {
            grounds.map((ground, idx) => {
              return (
                <div key={idx}>
                  <div className="max-w-md bg-[#135029] p-4 rounded-xl space-y-4">
                    <Image
                      className="object-cover object-center w-full h-64  lg:h-72 rounded-xl "
                      src={ground.image}
                      alt={ground.title1}
                      width={300}
                      height={300}
                    />
                    <div className="bg-[#135029] text-white">
                      <div className="space-y-2">
                        <h5 className="text-xl font-semibold">{ground.title1}</h5>
                        <h5>{ground.title2} <span className="font-bold text-primary">$2525</span></h5>
                      </div>
                      <div className="w-full pt-4">
                        <button className="w-full text-center bg-primary text-white px-4 py-1 rounded-xl">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default DestinationLove;
