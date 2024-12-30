
// "use client"

// import Image from "next/image"
// import LinePath from "../shared/LinePath"

// const HolidayInspiration = () => {
//     const travelTrips = [
//         {
//             "image": "http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735114827/bsffr5koc9fm2xtvmj2d.png",
//             "name": "Sri Lanka",
//             "date": "11 Dec 2024",
//             "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"
//         },
//         {
//             "image": "http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735116792/ev7gqez3ngtmjorux714.png",
//             "name": "Kerala",
//             "date": "11 Dec 2024",
//             "description": "A bustling city captured at night with vibrant lights."
//         },
//         {
//             "image": "http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735114827/bsffr5koc9fm2xtvmj2d.png",
//             "name": "Sri Lanka",
//             "date": "11 Dec 2024",
//             "description": "A calm and peaceful beach with crystal-clear water."
//         }
//     ]

//     return (
//         <>
//             <section className="container mx-auto px-4 pt-20">
//                 <LinePath text={'Holiday Inspirations'}/>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
//                     {
//                         travelTrips.map((travel, idx) => {
//                             return (
//                                 <div key={idx} className="max-w-lg border">
//                                     <Image src={travel.image} alt={travel.name} width={200} height={200} className="object-cover object-center w-full  h-72" />
//                                     <div className="px-4 py-8 space-y-2">
//                                         <div className="space-y-2">
//                                             <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{travel.date}</span>
//                                             <h2 className="text-xl font-bold tracking-wide text-[#135029]">{travel.name}</h2>
//                                         </div>
//                                         <p className="dark:text-gray-800">{travel.description}<span className="text-primary font-semibold">...Read more</span> </p>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </section>
//         </>
//     )
// }

// export default HolidayInspiration


"use client";

import Image from "next/image";
import { useState } from "react";

const HolidayInspiration = () => {
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
                <h2 className="text-2xl md:text-4xl text-primary font-semibold">Holiday Inspirations</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
                    {travelTrips.map((travel) => (
                        <div key={travel.id}>
                            <div className="relative max-w-md border p-4 rounded-xl space-y-4">
                                <Image
                                    className="object-cover object-center w-full h-64 lg:h-72 rounded-xl"
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

export default HolidayInspiration;
