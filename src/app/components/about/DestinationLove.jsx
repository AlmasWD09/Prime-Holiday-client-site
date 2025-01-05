"use client"

import Image from "next/image"
import Link from "next/link"

const DestinationLove = () => {
  const grounds = [
    {
      image: "/photo01.png",
      title1: "Immersion in cultural Qatar",
      title2: "9 Days From",
    },
    {
      image: "/photo02.png",
      title1: "Luxury of Morocco",
      title2: "9 Days From",
    },
    {

      image: "/photo03.png",
      title1: "Essence of Qatar",
      title2: "9 Days From",
    },
  ]
  return (
    <>
      <section className="container mx-auto px-4 pt-10 pb-10">
        <h2 className="text-primary font-Roboto text-2xl md:text-[28px] font-medium">Destinations you'll love</h2>

        {/* ************** */}
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3">
          {
            grounds.map((ground, idx) => {
              return (
                <div key={idx}>
                  <div className="relative max-w-md bg-[#135029] p-4 rounded-xl space-y-4">
                    <Image
                      className="object-cover object-center w-full h-64  lg:h-72 rounded-xl "
                      src={ground.image}
                      alt={ground.title1}
                      width={300}
                      height={300}
                    />
                    <div className="bg-[#135029] text-white">
                      <div className="space-y-2">
                        <h5 className="text-[24px] font-bold font-Roboto">{ground.title1}</h5>
                        <h5>{ground.title2} <span className="font-bold text-primary">$2525</span></h5>
                      </div>
                      <div className="w-full pt-4">
                        <Link href={`/destination/${idx}`}>
                        <button  className="w-full text-center bg-primary text-white px-4 py-1 rounded-xl">View</button>
                        </Link>
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
