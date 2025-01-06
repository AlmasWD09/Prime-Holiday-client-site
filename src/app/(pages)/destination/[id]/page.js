"use client";

import Banner from "@/app/components/oman/Banner";
import PrimeDestination from "@/app/components/oman/PrimeDestination";
import DestinationLove from "@/app/components/destination/destinationLove";
import Immersition from "@/app/components/destination/Immersition";
import Includes from "@/app/components/destination/Includes";

const DestinationDetails = ({params}) => {
  console.log(params, 'details page')
  return (
    <div className="pb-10">
      <Banner />
      <PrimeDestination />
      <Immersition />
      <Includes />
      <DestinationLove />
    </div>
  );
};

export default DestinationDetails;