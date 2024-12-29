"use client"

import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";


const PrimeDestination = () => {
    return (
        <>
            <section className='container mx-auto px-4 pt-10'>
                <div className="flex justify-between items-center">
                    <h1 className='text-5xl font-bold text-primary'>Prime Destinations</h1>
                    <div className="flex gap-2">
                        <span><IoMdArrowDropleftCircle className="bg-gray-100 w-8 h-8 rounded-full hover:text-primary"/></span>
                        <span><IoMdArrowDroprightCircle className="bg-gray-100 w-8 h-8 rounded-full hover:text-primary"/></span>
                    </div>
                </div>
           
            </section>
        </>
    )
}

export default PrimeDestination
