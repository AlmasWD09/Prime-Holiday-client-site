"use client"

import Image from "next/image"

const Comment = () => {
  return (
    <>
      <section className="container px-4 mx-auto pt-10 border-2 border-red-500">
        <div className="flex justify-center items-center flex-col lg:flex-row py-20">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-[48px] font-Roboto font-semibold text-primary">COMMITMENT TO EXCELLENCE</h2>
            <p className="max-w-[634px] font-Roboto">At PHD, we are committed to transforming each holiday into a memorable experience, prioritizing our clients' comfort, enjoyment, and peace of mind from start to finish. When you travel with prime Holiday Destinations, you're not just exploring a new place, you're embarking on a journey crafted with passion, experience, and a commitment to excellence</p>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image className="w-full h-full max-w-md"
              src="/comment.png"
              alt="comment"
              width={500}
              height={500}
            />
          </div>
        </div>

      </section>
      {/* video */}
      <div className=" rounded-md mt-10 bg-gradient-to-r from-[#b6a69602] to-[#9d8e753d]  py-20">
        <iframe className="container mx-auto px-4 " width="100%" height="700" src="https://www.youtube.com/embed/fEErySYqItI?si=otaQYhvbetqggv2S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default Comment