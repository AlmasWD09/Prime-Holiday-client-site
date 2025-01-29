"use client";

import Image from "next/image";

const Immersition = () => {
  return (
    <section className="container mx-auto px-4 pt-[56px]">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        {/* left side content */}
        <div className="max-w-[699px] max-h[332px] col-span-2">
          <div>
            <h2 className="text-[#135029] text-[28px] font-bold pb-[24px]">Immuration in cultural Oman</h2>
          </div>
          <div >
            <h3 className="font-bold text-[#000000] text-xl pb-[8px]">
              From $2525/person in sharing twin/double room
            </h3>
            <p className="text-[16px] font-medium text-[#5D5D5D] pb-[24px]">
            Immersion in Cultural Oman itinerary is the deep cultural immersion combined with exclusive and authentic Omani experiences that offer a rare glimpse into the traditional life and heritage of Oman.
            </p>
          </div>
          <div className="">
            <h3 className="text-[#135029] font-bold text-[20px] pb-[16px]">Highlights:</h3>
            <h3 className="font-bold text-[#000000] text-[20px] pb-[8px]">Exclusive Cultural Encounters:</h3>
            <p className="text-[16px] font-medium text-[#5D5D5D] pb-[24px]">
            Immersion in Cultural Oman itinerary is the deep cultural immersion combined with exclusive and authentic Omani experiences that offer a rare glimpse into the traditional life and heritage of Oman.
            </p>
          </div>
          <div className="">
            <h3 className="font-bold text-[20px] text-[#000000] pb-[8px]">Spectacular Landscape & Off Road Adventure:</h3>
            <p className="text-[16px] font-medium text-[#5D5D5D]">
              Immersion in Cultural Oman itinerary is the deep cultural immersion combined with exclusive and authentic Omani experiences that offer a rare glimpse
              <span className="text-primary font-bold underline cursor-pointer"> ...Read more</span>
            </p>
          </div>
        </div>
        {/* right side image */}
        <div className=" ">
          <Image
            src="https://i.ibb.co.com/NZvZwCR/image-80.png"
            alt="immersition"
            width={500}
            height={200}
            className="w-[493px] h-[332px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Immersition;
