// "use client";

// import Link from "next/link";


// const CustomBanner = ({ title, subtitle, Breadcrumb, url }) => {
//   return (
//     <section
//       className="relative w-full h-[456px] lg:h-[850px] text-white"
//       style={{
//         backgroundImage: `url('${url}')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed",
//         // backgroundBlendMode: "overlay",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="flex flex-col justify-center items-center h-full  w-[94%] lg:w-[88%] mx-auto">
//         <h1 className="text-center text-[22px] sm:text-[26px] md:text-[48px] lg:text-[60px] xl:text-[80px] text-primary font-semibold text-wrap" style={{ fontFamily: 'MyFont, sans-serif' }}>
//           {title}
//         </h1>
//         <p className="xl:max-w-[680px] max-w-[300px] sm:max-w-full mx-auto sm:text-[22px] md:text-[40px] lg:text-[48px] xl:text-[36px] font-semibold  text-center">
//           {subtitle}
//         </p>
//       </div>
//       {Breadcrumb && (
//         <div className="bg-[#135029] py-3">
//           <div className="container mx-auto px-2">
//             {Breadcrumb?.map((item, index) => {
//               return (
//                 <div key={index} className="flex items-center">
//                   <Link
//                     className={
//                       item?.active
//                         ? `cursor-pointer text-primary font-medium text-base`
//                         : `cursor-pointer text-white font-medium text-base `
//                     }
//                     href={item.href}
//                   >
//                     {item.name}
//                   </Link>
//                   {index < Breadcrumb.length - 1 && (
//                     <span className="px-2">/</span>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default CustomBanner;

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CustomBanner = ({ title, subtitle, Breadcrumb, url }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the component only hydrates properly on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering mismatched elements on the server
  }

  return (
    <section
      className="relative w-full h-[456px] lg:h-[850px] text-white"
      style={{
        backgroundImage: `url('${url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full w-[94%] lg:w-[88%] mx-auto">
        <h1
          className="text-center text-[22px] sm:text-[26px] md:text-[48px] lg:text-[60px] xl:text-[80px] text-primary font-semibold text-wrap"
          style={{ fontFamily: "MyFont, sans-serif" }}
        >
          {title}
        </h1>
        <p className="xl:max-w-[680px] max-w-[300px] sm:max-w-full mx-auto sm:text-[22px] md:text-[40px] lg:text-[48px] xl:text-[36px] font-semibold text-center">
          {subtitle}
        </p>
      </div>
      {Breadcrumb && (
        <div className="bg-[#135029] py-3">
          <div className="container mx-auto px-2">
            {Breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center">
                <Link
                  className={
                    item?.active
                      ? "cursor-pointer text-primary font-medium text-base"
                      : "cursor-pointer text-white font-medium text-base"
                  }
                  href={item.href}
                >
                  {item.name}
                </Link>
                {index < Breadcrumb.length - 1 && <span className="px-2">/</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomBanner;


