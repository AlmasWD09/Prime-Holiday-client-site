"use client"
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";



const Footer = () => {

  return (
    <footer className="text-white"
      style={{
        backgroundImage: "url(/footer.png)",
        // backgroundImage: "url(http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735182160/lskef7d2q40k09xumb04.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>


      <section className="container mx-auto px-4 py-8  h-full">
        <div className="flex justify-center">
          <h1 className="text-[36px] md:text-[64px] font-Roboto font-semibold text-primary">Connect with us</h1>
        </div>
        <div className="pt-10 space-y-20 md:space-y-0">
          {/* div onte */}
          <div className="flex flex-col md:flex-row justify-between pb-4 space-y-4 md:space-y-0">
            <div>
              <div className="flex gap-4 pb-4 text-primary">
                <FaInstagram />
                <FaFacebook />
                <Image src="http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735185926/vsqrzow0aghuq7iskhmk.png" alt="icon" width={16} height={16} />
                <FaFacebook />
              </div>
              <div className="border-t py-4">
                <GoLocation className="text-primary" />
                <p>65 Hartfield Crescent</p>
                <p>Birmingham
                </p>
                <p>B27 7QE</p>
              </div>
              <div className="border-t pt-4">
                <RiMessage2Line className="text-primary" />
                <p className="border-b pb-4">contact@primeholidaydestinations.com</p>
              </div>
            </div>
            <div className="">
              <button  className="border border-primary rounded-xl hover:bg-primary uppercase text-white px-6 py-2 cursor-pointer">Enquire now</button>
            </div>
          </div>
          {/* div two */}
          <div className="flex flex-col md:flex-row justify-between pb-16 space-y-4 md:space-y-0">
            <div className=" pt-4">
              <FaWhatsapp className="text-primary" />
              <p>+44 7553 778086</p>
            </div>
            <div>
              <Image src="/logo.png" alt="nav logo" width={200} height={200} />
            </div>
          </div>
          {/* div three */}
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            <div>
              <p>About | Destinations | Blog | Terms & Conditions | Privacy | Cancellation & Refund</p>
              <p>© 2024 Rizmali Travel & Tours Limited</p>
            </div>

            <div className="md:text-end space-y-4">
              <div>
                <p>Prime Holiday Destinations a Brand by Rizmali Travel & Tours Limited</p>
                <p>Company Number 14730696  I  Registered in England</p>
              </div>
              <div><p>Colour palette inspired by @thehousewiththepinkbed</p></div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#135029] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <div>
            <p className="uppercase text-xs">Stay Up To Date</p>
            <h2 className="text-xl">Subscribe to Our Newsletter</h2>
          </div>
          <div className="flex gap-6">
            <button className="border pl-2 pr-16 text-start py-2 rounded-xl">Enter Your Email</button>
            <button className="border px-4 py-2 uppercase rounded-xl">Subscribe</button>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer