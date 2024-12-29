"use client"

import Banner from "@/app/components/Banner"
import Comment from "@/app/components/Comment"
// import Destination from "@/app/components/Destination"
import InclusivePackage from "@/app/components/InclusivePackage"
import PrimeDestination from "@/app/components/PrimeDestination"
import Testimonial from "@/app/components/Testimonial"

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
