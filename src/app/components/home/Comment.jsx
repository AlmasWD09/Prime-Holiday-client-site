
"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const Comment = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <section className="container mx-auto px-4 py-20 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Left side content */}
          <div className="w-full ">
            <h1 className="font-bold font-Roboto text-primary text-2xl lg:text-5xl">
            Commitment To Excellence
            </h1>
            <p className="max-w-2xl mt-6 font-Roboto text-[20px] lg:text-[28px] text-[#454545] text-justify">
              At PHD, we are committed to transforming each holiday into a
              memorable experience, prioritizing our clients' comfort,
              enjoyment, and peace of mind from start to finish. When you travel
              with Prime Holiday Destinations, you're not just exploring a new
              place, you're embarking on a journey crafted with passion,
              experience, and a commitment to excellence.
            </p>
          </div>

          {/* Right side image */}
          <Image
            className="object-cover object-center h-[300px] rounded-xl lg:h-[394px] md:w-[350px] lg:w-[440px]"
            src="/comment.png"
            alt="comment"
            width={500}
            height={400}
          />
        </div>
      </section>

      {/* Video Section */}
      <div
        className=" bg-no-repeat bg-cover bg-center rounded h-[480px] md:h-[900px] flex items-center justify-center"
        style={{
          backgroundImage: "url(/videoBg.png)",
        }}
      >


        <div className=" container mx-auto px-4  relative w-full h-[400px]  md:h-[700px] ">
          <video
            style={{ width: "100%", height: "100%" }}
            ref={videoRef}
            src="/video01.mp4" // Correct path to the video
            className="w-full h-56 object-cover rounded-md"
            onClick={handlePlayPause}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls={false} // Hide default controls
          />
          {!isPlaying && (
            <div className="absolute inset-0 bg-black bg-opacity-30 mx-4 flex items-center justify-center rounded-md">
              <button
                onClick={handlePlayPause}
                className="text-white text-4xl"
                aria-label="Play Video"
                role="button"
              >
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 6C30.0666 6 24.2664 7.75947 19.3329 11.0559C14.3994 14.3524 10.5543 19.0377 8.28363 24.5195C6.013 30.0013 5.4189 36.0333 6.57646 41.8527C7.73401 47.6721 10.5912 53.0176 14.7868 57.2132C18.9824 61.4088 24.3279 64.266 30.1473 65.4236C35.9667 66.5811 41.9987 65.987 47.4805 63.7164C52.9623 61.4458 57.6477 57.6006 60.9441 52.6671C64.2405 47.7336 66 41.9334 66 36C66 32.0603 65.224 28.1593 63.7164 24.5195C62.2088 20.8797 59.999 17.5726 57.2132 14.7868C54.4275 12.001 51.1203 9.79126 47.4805 8.28361C43.8408 6.77597 39.9397 6 36 6ZM30 49.5V22.5L48 36L30 49.5Z"
                    fill="#B0B0B0"
                    fillOpacity="0.5"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Comment;