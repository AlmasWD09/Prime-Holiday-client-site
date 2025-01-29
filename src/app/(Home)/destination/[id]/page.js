"use client";

import Banner from "@/app/components/oman/Banner";
import PrimeDestination from "@/app/components/oman/PrimeDestination";
import DestinationLove from "@/app/components/destination/destinationLove";
import Immersition from "@/app/components/destination/Immersition";
import Includes from "@/app/components/destination/Includes";
import { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";

const DestinationDetails = ({params}) => {
 
  const [singlePackage, setSinglePackage] = useState([]);
 const  [loading,setLoading] = useState(true)
  const [countryName, setCountryName] = useState(null);
  const [singleData, setSingleData] = useState({})

  // console.log("SSSSSSSSSSSSSSSSSS", params)

  const {id} = useParams();


  useEffect(() => {
    setLoading(true)
    fetch(`http://10.0.80.13:8000/api/admin/destination/country/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePackage(data.country.destinations);
        setCountryName(data.country.name)
        setLoading(false)
        // Set default value for singleData based on fetched data
        if (data.country.destinations && data.country.destinations.length > 0) {
          setSingleData(data.country.destinations[0]); // Default to the first item in the destinations array
        }
       
      })
      .catch((error) => {
        setLoading(false)
        console.error("Error fetching data:", error);
       
      });
  }, [id]);

  // console.log(singlePackage)

  if(!singlePackage?.length && !loading){
    redirect("/not-found")
  }



  return (
    <div className="pb-10">
      <Banner />
      <PrimeDestination  singleData={singleData} countryName={countryName} singlePackage={singlePackage} setSingleData={setSingleData} />
      {/* <Immersition /> */}
      <Includes singleData={singleData} setSingleData={setSingleData}/>
      <DestinationLove />
    </div>
  );
};

export default DestinationDetails;