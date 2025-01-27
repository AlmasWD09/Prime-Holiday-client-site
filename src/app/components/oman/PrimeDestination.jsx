"use client"

import Image from "next/image"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PrimeDestination = () => {
  const { id } = useParams();
  const [singlePackage, setSinglePackage] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: Loading state

  useEffect(() => {
    fetch(`http://10.0.80.13:8000/api/admin/destination/country/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePackage(data.country);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading is false even on error
      });
  }, [id]);


  // const packageName = singlePackage.map((item)=>(item.country_name))
  // console.log(singlePackage)

  console.log(singlePackage)


  return (
    <>
      <section className="container mx-auto px-4 pt-20">
        <h2 className="text-primary font-Roboto text-[28px] font-medium">{"packageName"} Packages</h2>
        {/* <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3">
          {
            singlePackage.map((ground, idx) => {
              return (
                <div key={idx}>
                  <div className="relative bg-[#135029] p-4 rounded-xl space-y-4">
                    <Image
                      className="object-cover object-center w-full h-64  lg:h-72 rounded-xl "
                      src={ground.image}
                      alt={'ground photo'}
                      width={300}
                      height={300}
                    />
                    <div className="bg-[#135029] text-[#FFFFF0]">
                      <div className="space-y-2">
                        <h5 className="text-[24px] font-Roboto font-bold">{ground.country_name}</h5>
                        <h5>{ground.days} Days Form <span className="font-bold text-primary">$5656.00</span></h5>
                      </div>
                      <div className="w-full pt-4">
                        <button className="w-full text-center bg-primary text-[#FFFFF0] px-4 py-1 rounded-xl">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div> */}

      </section>
    </>
  )
}

export default PrimeDestination
