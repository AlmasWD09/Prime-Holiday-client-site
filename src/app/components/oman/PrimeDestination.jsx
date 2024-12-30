"use client"

import Image from "next/image"

const PrimeDestination = () => {
    const grounds = [
        {
            image: "https://i.ibb.co.com/qJFPFtT/immersion-Cultural-Oman-photo-1.png",
            title1: "Egypt",
            title2: "The Gift of the Nile"
        },
        {
            image: "https://i.ibb.co.com/RcKjwcm/Picture6-1.png",
            title1: "Morocco",
            title2: "Land of Light"
        },
        {

            image: "https://i.ibb.co.com/vJ5rW1J/Luxury-Oman-photo-1.png",
            title1: "Zanzibar",
            title2: "Spice Island"
        },
    ]
    return (
        <>
            <section className="container mx-auto px-4 pt-20">
                <h2 className="text-primary text-center font-Roboto text-[38px] font-semibold">Prime Destinations</h2>

                {/* ************** */}
                    <h2 className="text-primary text-xl font-bold py-2">Africa</h2>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
                    {
                        grounds.map((ground, idx) => {
                            return (
                                <div key={idx}>
                                    <div className="relative max-w-md">
                                        <Image
                                            className="object-cover object-center w-full h-96  lg:h-96"
                                            src={ground.image}
                                            alt={ground.title1}
                                            width={300}
                                            height={300}
                                        />
                                        <div className="absolute z-10 w-full  bottom-10 text-center p-3 bg-gray-800 opacity-60 text-white">
                                            <div className="z-30">
                                                <h5 className="text-3xl font-bold uppercase">{ground.title1}</h5>
                                                <h5 className="font-bold">{ground.title2}</h5>
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
