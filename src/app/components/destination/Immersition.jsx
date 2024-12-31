"use client";

import Image from "next/image";

const Immersition = () => {
  return (
    <section className="container mx-auto px-4 p-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* left side content */}
        <div className="col-span-2  space-y-12 p-y ">
          <div>
            <div className=" text-white ">
              <h3 className="bg-[#135029] py-2 px-4">
                Immersion in Cultural Oman - 8 Nights 9 Days
              </h3>
            </div>
            <h3 className="px-4">
              From $2525/person in sharing twin/double room
            </h3>
          </div>
          <div className="max-w-3xl">
            <p>
              Immersion in Cultural Oman itinerary is the deep cultural
              immersion combined with exclusive and authentic Omani experiences
              that offer a rare glimpse into the traditional life and heritage
              of Oman.
            </p>
          </div>
          <div className="max-w-3xl">
            <h3 className="text-[#135029] font-bold">Highlights:</h3>
            <p>
              Exclusive Cultural Encounters: From visiting the Sidab Women's
              Group to learning about traditional Omani handicrafts and enjoying
              a meal at a local's home, your clients will engage in authentic
              interactions with local communities that most tourists don't get
              to experience.
            </p>
          </div>
          <div className="max-w-3xl">
            <p>
              Spectacular Landscapes and Off-Road Adventures: The journey
              through Wadi Bani Auf, ...{" "}
              <span className="text-primary font-bold cursor-pointer">
                Read more
              </span>
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
            className="h-[480px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Immersition;
