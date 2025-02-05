"use client";

import Asia from "@/app/components/destination/Asia";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const PrimeDestination = () => {
  
  const [africaData, setafricaData] = useState([]);
  const [asiadata, setasiadata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/admin/country/continent/1?per_page=3");

        const result = await response.json();
        setafricaData(result?.countries?.data)
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/admin/country/continent/3?per_page=4");

        const result = await response.json();
        setasiadata(result?.countries?.data)
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  
  console.log(africaData)
  return (
    <section className="container mx-auto px-4 pt-16 md:pt-20">
      <h2 className="text-primary md:text-xl font-bold py-2">Africa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {africaData.map((ground, idx) => {
          return (

            <Link href={`/destination/${ground.id}`} key={idx}>

            <div>
              <div className="relative -z-10">
                <Image
                  className="object-cover object-center w-full h-96 lg:h-96 rounded-xl"
                  src={ground.image}
                  alt={ground.title}
                  width={300}
                  height={300}
                />

                <div className="absolute z-10  w-[93%]  bottom-4 mx-4  p-3 bg-[#B0B0B0] bg-opacity-30 rounded-xl text-[#FFFFF0] flex gap-2">
                  <div className="flex text-start z-20">
                    <div>
                      <FaLocationDot className="text-2xl pt-2" />
                    </div>
                    <div>
                      <h2 className="text-[24px] font-bold font-Roboto">{ground.name}</h2>
                      <h2 className="text-[16px] font-medium">{ground.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </Link>
          );
        })}
      </div>
      {/* asia component here... */}
      <Asia asiadata={asiadata} />
    </section>
  );
};

export default PrimeDestination;
