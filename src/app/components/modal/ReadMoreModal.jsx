"use client"

import { IoCloseSharp } from "react-icons/io5";

const ReadMoreModal = ({ readMoreOpen, setReadMoreOpen, modalValue }) => {
    const { days, lunchTime, description } = modalValue || {}

    // modal close function
    const handleCloseModal = () => {
        setReadMoreOpen(false)
    }
    return (
        <div className="relative m-8 lg:m-0">

            {readMoreOpen && (
                <div className="fixed inset-0 z-[9999px] flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#fffff0] w-full max-w-3xl p-8 rounded shadow-lg relative">
                        <button
                            onClick={() => handleCloseModal()}
                            className="absolute top-4 right-4 text-red-500 hover:text-gray-800"
                        >
                            <div className="bg-primary w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"><IoCloseSharp className="text-xl text-[#FFFFF0] w-10 h-10 p-2" /></div>

                        </button>
                        {/* <h2 className="text-2xl font-bold text-center text-[#135029] mb-6">
                            {lunchPeriod}
                        </h2> */}

                        <form>

                            <div  className="border border-[#135029] rounded-lg p-2 mt-2 space-y-4">
                                <div className="flex justify-between ">
                                    <h4 className="text-[24px] text-[#135029] font-bold">Days {days}</h4>
                                    <h4 className="text-[24px] text-[#135029] font-bold">{lunchTime}</h4>
                                </div>
                                <div>
                                    <p className="text-[18px] text-[#454545] font-medium">{description} 
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReadMoreModal
