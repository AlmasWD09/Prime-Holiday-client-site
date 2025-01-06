"use client";

import CustomBanner from "@/app/components/common/MainBanner/Banner";
import Comment from "@/app/components/home/Comment";
import InclusivePackage from "@/app/components/home/InclusivePackage";
import PrimeDestination from "@/app/components/home/PrimeDestination";
import Testimonial from "@/app/components/home/Testimonial";

const HomePage = () => {
  return (
    <div className="">
      {/* <Banner /> */}
      <CustomBanner
        title={"Your All-Inclusive Journey Starts Here"}
        subtitle={
          " “ The Essence of a Holiday is to Enrich Our Lives & Create Lasting Memories ”"
        }
        url={
          "http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735362515/ggcunfjclwi1fpcvw67n.png"
        }
      />
      <PrimeDestination />
      <InclusivePackage />
      <Comment />
      <Testimonial />
    </div>
  );
};

export default HomePage;
