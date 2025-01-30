"use client"

import Image from "next/image"
import Link from "next/link";
import { useParams } from "next/navigation";

const PrimeDestination = ({ singlePackage, setSingleData, countryName, singleData, country }) => {


// const packageTitle = singlePackage.map((item) => item.package_name)


  const handleSinglePackage = (value) => {
    setSingleData(value)

  }

  return (
    <>
      <section className="container mx-auto px-4 pt-20">
        <h2 className="text-primary font-Roboto text-[28px] font-medium">
          {countryName} Packages</h2>
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3">
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
                        <h5 className="text-[24px] font-Roboto font-bold">{ground.package_name
                        }</h5>
                        <h5>{ground.days} Days Form <span className="font-bold text-primary">$5656.00</span></h5>
                      </div>
                      <div className="w-full pt-4">
                        <button onClick={() => handleSinglePackage(ground)} className="w-full text-center bg-primary text-[#FFFFF0] px-4 py-1 rounded-xl">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      {/* Immersition section */}
      <section className="container mx-auto px-4 pt-[56px]">
        {/* <h1 className="font-bold font-Roboto text-[#135029] text-[28px] pb-[24px]">{packageTitle}</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* left side content */}
          <div className="max-w-[699px] max-h[332px] col-span-2">
            <div
              dangerouslySetInnerHTML={{
                __html: singleData.description,
              }}></div>
          </div>
          {/* right side image */}
          <div className=" ">
            <Image
              src={singleData.image}
              alt="immersition"
              width={500}
              height={200}
              className="w-[493px] h-[332px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default PrimeDestination
