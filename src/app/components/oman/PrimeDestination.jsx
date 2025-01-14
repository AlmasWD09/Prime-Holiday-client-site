"use client"

import Image from "next/image"

const PrimeDestination = () => {
    const grounds = [
        {
            image: "https://i.ibb.co.com/qJFPFtT/immersion-Cultural-Oman-photo-1.png",
            title1: "Immersion in cultural Oman",
            title2: "7 Days From"
        },
        {
            image: "https://i.ibb.co.com/RcKjwcm/Picture6-1.png",
            title1: "Essence of Oman",
            title2: "7 Days From"
        },
        {

            image: "https://i.ibb.co.com/vJ5rW1J/Luxury-Oman-photo-1.png",
            title1: "Luxury Oman",
            title2: "7 Days From"
        },
    ]
    return (
        <>
            <section className="container mx-auto px-4 pt-20">
                <h2 className="text-primary font-Roboto text-[28px] font-medium">Oman Packages </h2>
                 <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3">
                          {
                            grounds.map((ground, idx) => {
                              return (
                                <div key={idx}>
                                  <div className="relative bg-[#135029] p-4 rounded-xl space-y-4">
                                    <Image
                                      className="object-cover object-center w-full h-64  lg:h-72 rounded-xl "
                                      src={ground.image}
                                      alt={ground.title1}
                                      width={300}
                                      height={300}
                                    />
                                    <div className="bg-[#135029] text-[#FFFFF0]">
                                      <div className="space-y-2">
                                        <h5 className="text-[24px] font-Roboto font-bold">{ground.title1}</h5>
                                        <h5>{ground.title2} <span className="font-bold text-primary">$5656.00</span></h5>
                                      </div>
                                      <div className="w-full pt-4">
                                        <button className="w-full text-center bg-primary text-[#FFFFF0] px-4 py-1 rounded-xl">View</button>
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
    )
}

export default PrimeDestination
