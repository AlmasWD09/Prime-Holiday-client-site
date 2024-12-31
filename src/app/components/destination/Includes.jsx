
"use client"
import { PiShareFat } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { FcRating } from "react-icons/fc";
import ReadMoreModal from "../modal/ReadMoreModal";
import { useState } from "react";


const Includes = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [singleData, setSingleData] = useState(null)
    const Itinerarys = [
        {
            id: "01",
            day: "Day 01",
            lunchPeriod: "Dinner",
            description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
        },
        {
            id: "02",
            day: "Day 02",
            lunchPeriod: "Breakfast",
            description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
        },
        {
            id: "03",
            day: "Day 03",
            lunchPeriod: "Full-Board",
            description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
        },
        {
            id: "04",
            day: "Day 04",
            lunchPeriod: "Full-Board",
            description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
        },
        {
            id: "05",
            day: "Day 05",
            lunchPeriod: "Breakfast & Dinner",
            description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
        },
        {
            id: "06",
            day: "Day 06",
            lunchPeriod: "Breakfast & Dinner",
            description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
        },
        {
            id: "07",
            day: "Day 07",
            lunchPeriod: "Breakfast & Dinner",
            description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
        },
        {
            id: "08",
            day: "Day 08",
            lunchPeriod: "Breakfast & Dinner",
            description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
        },
        {
            id: "09",
            day: "Day 09",
            lunchPeriod: "Breakfast",
            description: "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a Muscat by Night tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the",
        },
    ]



    // handle modal show for single id
    const handleModalShow = (id) => {
        const findData = Itinerarys.find((item) => item.id === id)
        setSingleData(findData)
        setIsOpen(true)
    }
    return (
        <>
            <section className="container mx-auto px-4 mt-40">
                <div className="p-6 border border-[#135029] border-opacity-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 border-b border-gray-300 pb-6">
                        <button className="py-3 text-center text-lg font-semibold bg-[#135029] text-white">
                            INCLUDES & EXCLUDES
                        </button>
                        <button className="py-3 text-center text-lg font-bold border border-[#135029] text-[#135029] border-opacity-30">
                            HOTELS
                        </button>
                        <button className="py-3 text-center text-lg font-bold border border-[#135029] text-[#135029] border-opacity-30">
                            PRICE & VALIDITY
                        </button>
                        <button className="py-3 text-center text-lg font-bold border border-[#135029] text-[#135029] border-opacity-30">
                            ITINERARY
                        </button>
                    </div>

                    <div className="flex justify-evenly bg-[#135029] py-4">
                        <h3 className="text-white uppercase">Includes</h3>
                        <h3 className="text-white uppercase">Excludes</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                        {/* Includes Section */}
                        <div className="lg:border-r border-[#135029] border-opacity-30">
                            <ul className="p-6 space-y-4 text-gray-800">
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Return Airport Transfers.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>8 Nights Hotel Accommodation in Selected Hotel Category.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Meals Are Provided As Outlined In The Itinerary.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        Full Day City Tour Of Muscat By Sedan Car/SUV/10 Seat Van By
                                        English Speaking Guide.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Desert Safari Tour.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        Round Trip Transfer From Day 3 To Day 8 By 4x4 Jeep (4 Pax Per
                                        Jeep) With English Speaking Guide.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        Visit To Amouage Perfume Factory By Car/SUV/Van With English
                                        Speaking Guide.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Entrance Fee Wherever Applicable.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>All Applicable Taxes.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Excludes Section */}
                        <div>
                            <ul className="p-6 space-y-4 text-gray-800">
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Air Fare.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Travel Insurance.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Oman Visa.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Meals Other Than What Is Included The Itinerary.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        Tours & Activities Other What Is Included In The Itinerary.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        All Expenses Of Personal Nature Such As Laundry, Tips, Etc.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-end gap-6 mt-6">
                    <button className="flex items-center justify-center lg:justify-start gap-1 px-6 py-2 text-primary border border-yellow-600">
                        <GiSelfLove className="text-2xl" />
                        SAVE
                    </button>
                    <button className="flex items-center justify-center lg:justify-start gap-1 px-6 py-2 text-primary border border-yellow-600">
                        <PiShareFat className="text-2xl" />
                        SHARE
                    </button>
                    <button className="px-6 py-2 text-white bg-primary">
                        ENQUIRE NOW
                    </button>
                </div>


                {/* =============== Hotel Tab start =========================== */}
                <section className="my-20">
                    <div className="py-3 text-center text-lg font-semibold bg-[#135029] text-white">
                        <h2>Hotels</h2>
                    </div>

                    {/* tabs two */}
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 ">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="text-[#135029] font-bold">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-[#135029] font-bold "
                                                >
                                                    <div className="flex items-center gap-x-3">
                                                        <span>City</span>
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-12 py-3.5 text-[#135029] font-bold "
                                                >
                                                    4* Standard Hotel
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-[#135029] font-bold "
                                                >
                                                    Room Type
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-[#135029] font-bold "
                                                >
                                                    4* Superior Hotel
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-[#135029] font-bold "
                                                >
                                                    Room Type
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className=" ">
                                            {/* row one */}
                                            <tr className="bg-black">
                                                <td className="px-4 py-4 text-center text-sm font-medium text-white whitespace-nowrap">
                                                    Muscat
                                                </td>
                                                <td className="px-12 py-4 text-center text-sm font-normal text-white whitespace-nowrap">
                                                    Golden Tulip or similar
                                                </td>
                                                <td className="px-4 py-4 text-center text-sm text-white whitespace-nowrap">
                                                    Standard
                                                </td>
                                                <td className="px-4 py-4 text-center text-sm  text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    Radisson Blu or Similar
                                                </td>
                                                <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    Standard
                                                </td>

                                            </tr>
                                            {/* row two */}
                                            <tr className="bg-gray-400">
                                                <td className="px-4 py-4 text-center text-sm font-medium text-white whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3">

                                                        <div className="flex items-center gap-x-2">
                                                            <div>
                                                                <h2 className="font-normal text-white ">
                                                                    Muscat
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-12 py-4 text-center text-sm font-normal text-white whitespace-nowrap">
                                                    Golden Tulip or similar
                                                </td>
                                                <td className="px-4 py-4 text-center text-sm text-white whitespace-nowrap">
                                                    Standard
                                                </td>
                                                <td className="px-4 py-4 text-center text-sm  text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    Radisson Blu or Similar
                                                </td>
                                                <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    Standard
                                                </td>

                                            </tr>
                                            {/* row three */}
                                            <tr className="bg-black">
                                                <td className="px-4 py-4 text-center text-sm font-medium text-white whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3">

                                                        <div className="flex items-center gap-x-2">
                                                            <div>
                                                                <h2 className="font-normal text-white ">
                                                                    Muscat
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-12 py-4 text-center text-sm font-normal text-white whitespace-nowrap">
                                                    Golden Tulip or similar
                                                </td>
                                                <td className="px-4 py-4 text-center text-sm text-white whitespace-nowrap">
                                                    Standard
                                                </td>
                                                <td className="px-4 py-4 text-center text-sm  text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    Radisson Blu or Similar
                                                </td>
                                                <td className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    Standard
                                                </td>

                                            </tr>
                                            {/* Add other rows here */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
                {/* =============== Hotel Tab end ============================= */}



                {/* =============== Price & Validity Tab start =========================== */}
                <section className="my-20">
                    <div className="py-3 text-center text-lg bg-[#135029] text-white">
                        <h2 className="text-2xl font-semibold">Package Cost Per Person Sharing Twin/Double Occupancy in USD</h2>
                        <div className="flex justify-between px-3">
                            <h2>Validity 01 Oct 2024 - 30 Apr 2025</h2>
                            <h2 className="text-red-500">Not valid between 23 Dec 2024 - 04 Jan 2025</h2>
                        </div>
                    </div>

                </section>
                {/* =============== Price & Validity Tab end ============================= */}


                {/* =============== Itinerary Tab start =========================== */}
                <section className="my-20">
                    <div className="py-3 text-center text-lg font-semibold bg-[#135029] text-white">
                        <h2>Itinerary</h2>
                    </div>


                    <div>
                        {
                            Itinerarys.map((item, idx) => {
                                return (
                                    <div key={idx} className="border border-[#135029] rounded-lg p-2 mt-2 space-y-4">
                                        <div className="flex justify-between text-[#135029] font-bold">
                                            <h4>{item.day}</h4>
                                            <h4>{item.lunchPeriod}</h4>
                                        </div>
                                        <div>
                                            <p>{item.description} <span
                                                onClick={() => handleModalShow(item.id)}
                                                className="text-primary font-semibold cursor-pointer">... Read more</span>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                {/* =============== Itinerary Tab end ============================= */}
                {
                    isOpen && <ReadMoreModal isOpen={isOpen} setIsOpen={setIsOpen} singleData={singleData}/>
                }

            </section>
        </>
    )
}

export default Includes
