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
              <h3 className="">
                Immersion in Cultural Oman - 8 Nights 9 Days
              </h3>
            </div>
            <h2 className="text-[#135029] text-xl font-bold">Immuration in cultural Oman</h2>
          </div>
          <div className="max-w-3xl">
            <h3 className="font-bold opacity-80 text-xl">
              From $2525/person in sharing twin/double room
            </h3>
            <p>
              Immersion in Cultural Oman itinerary is the deep cultural
              immersion combined with exclusive and authentic Omani experiences
              that offer a rare glimpse into the traditional life and heritage
              of Oman.
            </p>
          </div>
          <div className="max-w-3xl">
            <h3 className="text-[#135029] font-bold">Highlights:</h3>
            <h3 className="font-bold opacity-80">Exclusive Cultural Encounters:</h3>
            <p>
              From visiting the Sidab Women's
              Group to learning about traditional Omani handicrafts and enjoying
              a meal at a local's home, your clients will engage in authentic
              interactions with local communities that most tourists don't get
              to experience.
            </p>
          </div>
          <div className="max-w-3xl">
            <h3 className="font-bold opacity-80">Spectacular Landscape & Off Road Adventure:</h3>
            <p>
              Immersion in Cultural Oman itinerary is the deep cultural immersion combined with exclusive and authentic Omani experiences that offer a rare glimpse
              <span className="text-primary font-bold cursor-pointer"> ...Read more</span>
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
            className="h-[480px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Immersition;
