"use client"

import Banner from "@/app/components/home/Banner"
import Comment from "@/app/components/home/Comment"
// import Destination from "@/app/components/Destination"
import InclusivePackage from "@/app/components/home/InclusivePackage"
import PrimeDestination from "@/app/components/home/PrimeDestination"
import Testimonial from "@/app/components/home/Testimonial"

const HomePage = () => {
  return (
    <div>
     <Banner />
     <PrimeDestination />
     {/* <Destination /> */}
     <InclusivePackage />
     <Comment />
     {/* <Testimonial /> */}
    </div>
  )
}

export default HomePage
