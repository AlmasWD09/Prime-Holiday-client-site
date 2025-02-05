"use client";

import Banner from "@/app/components/oman/Banner";
import PrimeDestination from "@/app/components/oman/PrimeDestination";
import DestinationLove from "@/app/components/destination/destinationLove";
import Includes from "@/app/components/destination/Includes";
import { useEffect, useState } from "react";
import { redirect, useParams, useSearchParams } from "next/navigation";

const DestinationDetails = ({ params }) => {

  const [singlePackage, setSinglePackage] = useState([]);
  const [loading, setLoading] = useState(true)
  const [countryName, setCountryName] = useState(null);
  const [singleData, setSingleData] = useState({})

  const { id } = useParams();
  const paramsId = useSearchParams();


  useEffect(() => {
    setLoading(true)
    fetch(`http://10.0.80.13:8000/api/admin/destination/country/${id}`)
      .then((res) => res.json())
      .then((data) => {

        console.log('data', data)
        setSinglePackage(data.country.destinations);
        setCountryName(data.country.name)
        setLoading(false)
        // Set default value for singleData based on fetched data
        if (data.country.destinations && data.country.destinations.length > 0) {
          setSingleData(data.country.destinations[0]);
        }

      })
      .catch((error) => {
        setLoading(false)
        console.error("Error fetching data:", error);

      });
  }, [id]);


console.log(singleData)


  return (
    <div className="pb-10">
      <Banner />
      {
        singleData?.description ? <div>
          <PrimeDestination singleData={singleData} countryName={countryName} singlePackage={singlePackage} setSingleData={setSingleData} />

          <Includes singleData={singleData} setSingleData={setSingleData} />
        </div>
          :
          <div className="flex justify-center pt-40">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">Data Not Found</h1>
              <p className="text-gray-800">Please Data Add!! </p>
            </div>
          </div>

      }

      <DestinationLove />
    </div>
  );
};

export default DestinationDetails;