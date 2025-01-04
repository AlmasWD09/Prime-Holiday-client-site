"use client"

import AboutPrime from "@/app/components/about/AboutPrime"
import Banner from "@/app/components/about/Banner"
import DestinationLove from "@/app/components/about/DestinationLove"




const AboutPage = () => {
    return (
        <>
           <div className="pb-10">
           <Banner />
            <AboutPrime />
            <DestinationLove />
           </div>
        </>
    )
}

export default AboutPage
