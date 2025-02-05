"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Banner = () => {
  const { id } = useParams();
  const [primeData, setPrimeData] = useState({});
  const [loading, setLoading] = useState(true); // Optional: Loading state

  useEffect(() => {
    fetch(`http://localhost:3000/api/admin/destination/country/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPrimeData(data.country);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading is false even on error
      });
  }, [id]);

  // Example: Fallback image if no image is fetched
  const bannerImage = primeData?.image || "/omanBanner.png";



  return (
    <section>
      {loading ? (
        <div className="flex justify-center items-center h-[356px] lg:h-[750px]">
          <p>Loading...</p>
        </div>
      ) : (
        <div
          className="relative w-full h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-center text-[#FFFFF0]"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h1
              className="text-center text-[24px] lg:text-[80px] text-primary font-semibold text-wrap"
              style={{ fontFamily: "MyFont, sans-serif" }}
            >
              {primeData?.name}
            </h1>
            <p>{primeData?.title}</p>
          </div>
          <div className="bg-[#135029] py-3">
            <div className="container mx-auto px-2">
              <h2>
                <Link className="cursor-pointer hover:text-primary" href={"/"}>
                  Home / </Link>
                Destination /<span className="px-2 text-primary">{primeData?.name}</span>
                
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
