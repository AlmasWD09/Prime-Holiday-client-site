
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DestinationLove = () => {
 
  const [destinationLoveData, setDestinationLoveData] = useState([]);


  useEffect(() => {
    fetch("http://10.0.80.13:8000/api/admin/random-destination/")
      .then((res) => res.json())
      .then((data) => {
        setDestinationLoveData(data?.destinations?.data)
      });
  }, []);


  return (
    <section className="container mx-auto px-4 pt-[56px] pb-10 ">
      <h2 className="text-primary font-Roboto text-[28px] font-medium">
        Destinations you'll love
      </h2>

      <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3">
        {
          destinationLoveData?.map((ground, idx) => {
            return (
              <div key={idx}>
                <Link href={`/destination/${ground.id}`}>
                  <div className="max-w-md bg-[#135029] p-4 rounded-xl space-y-4">
                    <Image
                      className="object-cover object-center w-full h-64  lg:h-72 rounded-xl "
                      src={ground.image}
                      alt="ground"
                      width={300}
                      height={300}
                    />
                    <div className="bg-[#135029] text-[#FFFFF0]">
                      <div className="space-y-2">
                        <h5 className="text-[24px] font-bold">{ground.name}</h5>
                        <h5>{ground.days} Days From <span className="font-bold text-primary">$2525</span></h5>
                      </div>
                      <div className="w-full pt-4">
                        <button className="w-full text-center bg-primary text-[#FFFFF0] px-4 py-1 rounded-xl">View</button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </section>

  );
};

export default DestinationLove;
