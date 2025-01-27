
"use client"
import ReadMoreModal from "../modal/ReadMoreModal";
import { useEffect, useState } from "react";
import HotalTable from "./table/HotalTable";
import PriceValidatyTable from "./table/PriceValidatyTable";
import ModalPage from "../modal/Modal";
import { useParams } from "next/navigation";



const Includes = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [readMoreOpen, setReadMoreOpen] = useState(false)
    const [readMoremodal, setMeadMoremodal] = useState(false);
    const [modal, setModal] = useState(false);
    const [singleData, setSingleData] = useState(null)
    const [buttonColor, setButtonColor] = useState(0);
    const [buttonText, setButtonText] = useState("INCLUDES & EXCLUDES")


    const { id } = useParams();
    const [singlePackage, setSinglePackage] = useState([]);
    const [loading, setLoading] = useState(true); // Optional: Loading state

    useEffect(() => {
        fetch(`http://10.0.80.13:8000/api/admin/destination/country/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log('response',data?.country?.destinations)
                setSinglePackage(data?.country?.destinations);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); // Ensure loading is false even on error
            });
    }, [id]);





    // const includeData = singlePackage.map((item) => (item.includes_excludes.includes))
    // const excludeData = singlePackage.map((item) => (item.includes_excludes.excludes))
    // const itineraryData = singlePackage.map((item) => (item))
    // const itineraryData_one = itineraryData.map((item) => (item))


// const itineraryDescriptions = singlePackage.map((packageItem) => {
//     return packageItem.itinerary.map((item) => item);
// });





//     const itineraryData_one = itineraryData.map((item) => (item))
// console.log("itnerarDaTA_ONE----",itineraryData_one)



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
        setMeadMoremodal(true);
        setReadMoreOpen(true);
    }

    // single button text get
    const handleButtonClick = (event, index) => {
        const buttonText = event.target.innerText;
        setButtonText(buttonText)
        setButtonColor(index);
    };

    // modal show function
    const handleModal = () => {
        setIsOpen(true);
        setModal(true);
    };

    return (
        <>
            <section className="container mx-auto px-4 pt-[56px]">
                <div className="p-6 border border-[#B0B0B0] border-opacity-20 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  border-gray-300 pb-6">
                        {["INCLUDES & EXCLUDES", "HOTELS", "PRICE & VALIDITY", "ITINERARY"].map((label, index) => (
                            <button
                                key={index}
                                onClick={(event) => handleButtonClick(event, index)}
                                className={`py-3 text-center text-[24px] font-bold border border-[#135029] rounded-xl text-[#135029] border-opacity-30 ${buttonColor === index ? "bg-[#135029] text-[#FFFFF0] " : ""
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* =============== INCLUDES & EXCLUDES Tab start =========================== */}
                    {
                        buttonText === "INCLUDES & EXCLUDES" && <div>
                            <div className="flex justify-evenly bg-[#135029] py-4">
                                <h3 className="text-[24px] font-bold text-[#FFFFFF]">Includes</h3>
                                <h3 className="text-[24px] font-bold text-[#FFFFFF]">Excludes</h3>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                                {/* Includes Section */}
                                <div className="lg:border-r border-[#D1D1D1] border-opacity-30">
                                    <ul className="p-6 space-y-4 text-gray-800">
                                        {/* {
                                            includeData.map((singleInclude, index) => {
                                                return (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <span className="text-primary">&#9679;</span>
                                                        <p className="text-[#5D5D5D] text-[16px] font-medium">{index}</p>
                                                    </li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </div>

                                {/* Excludes Section */}
                                <div>
                                    <ul className="p-6 space-y-4 text-gray-800">
                                        {/* {
                                            excludeData.map((singleExclude, index) => {
                                                return (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <span className="text-primary">&#9679;</span>
                                                        <p className="text-[#5D5D5D] text-[16px] font-medium">Return airport transfer.</p>
                                                    </li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {/* =============== INCLUDES & EXCLUDES Tab end ============================= */}



                    {/* =============== Hotel Tab start =========================== */}
                    {
                        buttonText === "HOTELS" && <div>
                            <div className="py-3 text-center text-lg font-semibold bg-[#135029] text-[#FFFFF0]">
                                <h2 className="text-[24px] font-bold">Hotels</h2>
                            </div>

                            <HotalTable />
                        </div>
                    }
                    {/* =============== Hotel Tab end ============================= */}


                    {/* =============== Price & Validity Tab start =========================== */}
                    {
                        buttonText === "PRICE & VALIDITY" && <div>
                            <div className="py-3 text-center text-lg bg-[#135029] text-[#FFFFF0]">
                                <h2 className="text-[24px] font-bold text-[#FFFFF0] pb-[16px]">Package Cost Per Person Sharing Twin/Double Occupancy in USD</h2>
                                <div className="flex justify-between px-3">
                                    <h2 className="text-[20px] font-medium">Validity 01 Oct 2024 - 30 Apr 2025</h2>
                                    <h2 className="text-[#E15E59] text-[20px] font-medium">Not valid between 23 Dec 2024 - 04 Jan 2025</h2>
                                </div>
                            </div>

                            <PriceValidatyTable />
                        </div>

                    }
                    {/* =============== Price & Validity Tab end ============================= */}



                    {/* =============== Itinerary Tab start =========================== */}
                    {
                        buttonText === "ITINERARY" && <div>
                            <div className="py-3 text-center text-lg font-semibold bg-[#135029] text-[#FFFFF0]">
                                <h2>Itinerary</h2>
                            </div>

                            <div>
                                {
                                    Itinerarys.map((item, idx) => {
                                        return (
                                            <div key={idx} className="border border-[#135029] rounded-lg p-2 mt-2 space-y-4">
                                                <div className="flex justify-between ">
                                                    <h4 className="text-[24px] text-[#135029] font-bold">{item.day}</h4>
                                                    <h4 className="text-[24px] text-[#135029] font-bold">{item.lunchPeriod}</h4>
                                                </div>
                                                <div>
                                                    <p className="text-[18px] text-[#454545] font-medium">{item.description} <span
                                                        onClick={() => handleModalShow(item.id)}
                                                        className="text-primary font-semibold cursor-pointer">... Read more</span>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                    {/* =============== Itinerary Tab end ============================= */}
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        onClick={() => handleModal()}
                        className="px-6 py-3 text-[#FFFFFF] font-medium bg-primary rounded-xl font-Roboto">
                        ENQUIRE NOW
                    </button>
                    {/* modal component */}
                    {modal && <ModalPage isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>

                {/* Read More modal */}
                {
                    readMoremodal && <ReadMoreModal readMoreOpen={readMoreOpen} setReadMoreOpen={setReadMoreOpen} singleData={singleData} />
                }

            </section>
        </>
    )
}

export default Includes
