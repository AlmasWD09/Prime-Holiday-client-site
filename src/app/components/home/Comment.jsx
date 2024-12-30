"use client"
import Image from "next/image"

const Comment = () => {
  return (
    <>
      <section className="max-w-6xl px-4 mx-auto py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 ">
          {/* left side content */}
          <div className=" w-full ">
            <h1 className="font-semibold text-primary text-2xl md:text-4xl ">
              COMMITMENT TO EXCELLENCE
            </h1>
            <p className="max-w-xl mt-6 font-Roboto">
              At PHD, we are committed to transforming each holiday into a memorable experience, prioritizing our clients' comfort, enjoyment, and peace of mind from start to finish. When you travel with prime Holiday Destinations, you're not just exploring a new place, you're embarking on a journey crafted with passion, experience, and a commitment to excellence.
            </p>
          </div>

          {/* right side image */}
          <Image
            className="object-cover object-center h-[300px] rounded-xl lg:h-[400px] w-[500px] "
            src="/comment.png"
            alt="comment"
            width={100}
            height={100}
          />
        </div>
      </section>

      {/* video */}
      <div className="container mx-auto px-4 bg-no-repeat bg-cover bg-center rounded"
        style={{
          backgroundImage: "url(/videoBg.png)"
        }}
      >
        <video width="100%" controls className=" p-24">
          <source src="/video01.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}
export default Comment