"use client"

import Image from "next/image"

const DestinationLove = () => {
  const grounds = [
    {
      image: "/photo01.png",
      title1: "Qatar",
      title2: "9 Days From",
      title3: "Family tour with prime"
    },
    {
      image: "/photo02.png",
      title1: "sri lanka",
      title2: "9 Days From",
      title3: "Family tour with prime"
    },
    {

      image: "/photo03.png",
      title1: "Morocco",
      title2: "9 Days From",
      title3: "Family tour with prime"
    },
  ]
  return (
    <>
      <section className="container mx-auto px-4 pt-10 pb-10">
        <h2 className="text-primary font-Roboto text-2xl md:text-[38px] font-semibold">Destinations you'll love</h2>

        {/* ************** */}
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3">
          {
            grounds.map((ground, idx) => {
              return (
                <div key={idx}>
                  <div className="relative max-w-md bg-[#135029] p-4 rounded-md space-y-4">
                    <Image
                      className="object-cover object-center w-full h-64  lg:h-72 rounded-md "
                      src={ground.image}
                      alt={ground.title1}
                      width={300}
                      height={300}
                    />
                    <div className="bg-[#135029] text-white">
                      <div className="space-y-2">
                        <h5 className="uppercase">{ground.title1}</h5>
                        <h5 className="uppercase">{ground.title3}</h5>
                        <h5>{ground.title2} <span className="font-bold text-primary">$2525</span></h5>
                      </div>
                      <div className="w-full pt-4">
                        <button className="w-full text-center bg-primary text-white px-4 py-1 rounded-md">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default DestinationLove
