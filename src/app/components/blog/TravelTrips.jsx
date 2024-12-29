
"use client";

import Image from "next/image";
import { useState } from "react";

const TravelTrips = () => {
    const [expandedCardId, setExpandedCardId] = useState(null); 
    const travelTrips = [
        {
            id: 1,
            image: "/blog01.png",
            name: "Sri Lanka",
            date: "11 Dec 2024",
            description:
                "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly succ",
        },
        {
            id: 2,
            image: "/blog01.png",
            name: "Kerala",
            date: "11 Dec 2024",
            description:
                "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly succ",
        },
        {
            id: 3,
            image: "/blog01.png",
            name: "Sri Lanka",
            date: "11 Dec 2024",
            description:
                "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly succ",
        },
    ];

    const handleReadMore = (id) => {
        // Toggles the card expansion
        setExpandedCardId((prevId) => (prevId === id ? null : id));
    };

    return (
        <>
            <section className="container mx-auto px-4 pt-20">
                <h2 className="text-2xl md:text-4xl text-primary font-semibold">Travel Tips</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
                    {travelTrips.map((travel) => (
                        <div key={travel.id}>
                            <div className="relative max-w-md border p-4 rounded-md space-y-4">
                                <Image
                                    className="object-cover object-center w-full h-64 lg:h-72 rounded-md"
                                    src={travel.image}
                                    alt={travel.name}
                                    width={300}
                                    height={300}
                                />
                                <div>
                                    <div className="space-y-2">
                                        <h5 className="uppercase text-xs text-gray-500">{travel.date}</h5>
                                        <h5 className="uppercase font-Roboto font-semibold text-[#135029]">{travel.name}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {expandedCardId === travel.id
                                                ? travel.description
                                                : `${travel.description.slice(0, 150)}...`}
                                            <span
                                                onClick={() => handleReadMore(travel.id)}
                                                className="text-primary font-semibold cursor-pointer"
                                            >
                                                {expandedCardId === travel.id ? " Show Less" : " Read More"}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default TravelTrips;

