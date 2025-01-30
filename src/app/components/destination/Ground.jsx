"use client"

import Image from "next/image"

const Ground = () => {
    const grounds = [
        {
          image : "https://i.ibb.co.com/qJFPFtT/immersion-Cultural-Oman-photo-1.png",
        title1 : "Immersion in Cultural Oman",
        title2 : "9 Days From"
        },
        {
        image : "https://i.ibb.co.com/RcKjwcm/Picture6-1.png",
        title1 : "Immersion in Cultural Oman",
        title2 : "9 Days From"
        },
        {
       
        image : "https://i.ibb.co.com/vJ5rW1J/Luxury-Oman-photo-1.png",
        title1 : "Immersion in Cultural Oman",
        title2 : "9 Days From"
        },
    ]
  return (
    <>
    <section className="container mx-auto px-4 pt-10">
    <h2 className="text-primary text-center font-Roboto text-[38px] font-semibold">All-Inclusive ground packages</h2>

    {/* ************** */}
        <div className="grid grid-cols-1 gap-2 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {
            grounds.map((ground,idx)=>{
                return (
                    <div key={idx}>
                    <div className="relative max-w-md">
                        <Image
                            className="object-cover object-center w-full h-64  lg:h-96"
                            src={ground.image}
                            alt={ground.title1}
                            width={300}
                            height={300}
                        />
                        <div className="absolute w-full flex  items-center justify-between bottom-0 p-3 bg-[#135029] text-[#FFFFF0]">
                           <div>
                            <h5>{ground.title1}</h5>
                            <h5>{ground.title2} <span className="font-bold">$2525</span></h5>
                           </div>
                            <div className="">
                                <button className="bg-primary text-[#FFFFF0] px-4 py-2">View</button>
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

export default Ground
