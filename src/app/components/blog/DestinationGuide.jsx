
"use client"

import Image from "next/image"
import LinePath from "../shared/LinePath"
import { useState } from "react"

const DestinationGuide = () => {
    const [allText, setAllText] = useState(false)
    const travelTrips = [
        {
            "image": "/blog01.png",
            "name": "Sri Lanka",
            "date": "11 Dec 2024",
            "description": "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly succ"
        },
        {
            "image": "/blog01.png",
            "name": "Kerala",
            "date": "11 Dec 2024",
            "description": "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly succ"
        },
        {
            "image": "/blog01.png",
            "name": "Sri Lanka",
            "date": "11 Dec 2024",
            "description": "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly succ"
        }
    ]

    const handleReadMore = () => {
        setAllText(true)
    }
    return (
        <>
            <section className="container mx-auto px-4 pt-20">
                <LinePath text={'Destination Guides'} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
                    {
                        travelTrips.map((travel, idx) => {
                            return (
                                <div key={idx}>
                                    <div className="relative max-w-md border p-4 rounded-md space-y-4">
                                        <Image
                                            className="object-cover object-center w-full h-64  lg:h-72 rounded-md "
                                            src={travel.image}
                                            alt={travel.name}
                                            width={300}
                                            height={300}
                                        />
                                        <div className="">
                                            <div className="space-y-2">
                                                <h5 className="uppercase text-xs text-gray-500">{travel.date}</h5>
                                                <h5 className="uppercase font-Roboto font-semibold text-[#135029]">{travel.name}</h5>
                                                {
                                                    travel.description?.length > 20 && (allText === false) ? <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{travel.description.slice(0, 70)}<span
                                                        onClick={() => handleReadMore()}
                                                        className="text-primary font-semibold cursor-pointer">...Read More</span> </p>
                                                        :
                                                        <p>{travel.description}</p>
                                                }
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

export default DestinationGuide

