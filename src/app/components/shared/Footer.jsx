"use client"
import Image from "next/image";
import { useState } from "react";
import Modal from "../modal/Modal";
import Link from "next/link";




const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);


  // modal show function
  const handleModal = () => {
    setModal(true);
    setIsOpen(true);
  };

  return (
    <footer className="text-[#FFFFF0] font-Roboto"
      style={{
        backgroundImage: "url(/footer.png)",
        // backgroundImage: "url(http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735182160/lskef7d2q40k09xumb04.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>

      <section className="container mx-auto px-4 pt-10 pb-20 md:pt-20 md:pb-20 h-full">
        <div className="flex justify-center">
          <h1 className="text-[36px] md:text-5xl font-Roboto font-bold text-primary">Connect With Us</h1>
        </div>
        <div className="pt-10  md:space-y-0">
          {/* div onte */}
          <div className="flex flex-col md:flex-row justify-between pb-4 space-y-4 md:space-y-0">
            <div>
              <div className="flex gap-4 pb-4 text-primary">
                <Link href={'https://www.instagram.com/'}>
                  <Image src="/logo/instagram.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                </Link>

                <Link href={'https://developers.facebook.com/docs/facebook-login/'}>
                  <Image src="/logo/facebook.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                </Link>

                <Link href={'https://www.paypal.com/bd/home'}>
                  <Image src="/logo/paypal.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                </Link>
                <Link href={'https://www.videolan.org/'}>
                  <Image src="/logo/play.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                </Link>



              </div>
              <div className="border-t py-4">
                <Image src="/logo/location.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">65 Hartfield Crescent</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Birmingham
                </p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">B27 7QE</p>
              </div>
              <div className="border-t pt-4">
                <Image src="/logo/sms.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                <p className="border-b font-Roboto text-[18px] text-[#FFFFF0] pb-4">contact@primeholidaydestinations.com</p>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => handleModal()}
                className="text-[18px] font-Roboto border border-primary rounded-xl hover:bg-primary uppercase text-[#FFFFF0] font-bold px-4 py-2 hidden md:block">Enquire now</button>
            </div>
          </div>
          {/* div two */}
          <div className="flex flex-col md:flex-row justify-between  space-y-4 md:space-y-0">
            <div className=" pt-4">
              <Image src="/logo/whatsapp.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
              <p className="text-[18px] font-Roboto text-[#FFFFF0]">+44 7553 778086</p>
            </div>
            {/* small/laptob device for */}
            <div className="">
              <button
                onClick={() => handleModal()}
                className="text-[18px] font-Roboto border border-primary rounded-xl hover:bg-primary uppercase text-[#FFFFF0] font-bold px-4 py-2 md:hidden">Enquire now</button>
            </div>

            <div>
              <Image src="/logo.png" alt="nav logo" width={200} height={200} className=" md:w-[358px] md:h-[198px]"/>
            </div>
          </div>
          {/* div three */}
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            <div>
              <p className="text-[18px] font-Roboto text-[#FFFFF0]">About | Destinations | Blogs | Terms & Conditions | Privacy | Cancellation & Refund</p>
              <p className="text-[18px] font-Roboto text-[#FFFFF0]">© 2024 Rizmali Travel & Tours Limited</p>
            </div>

            <div className="md:text-end space-y-4">
              <div>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Prime Holiday Destinations a Brand by Rizmali Travel & Tours Limited</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Company Number 14730696  I  Registered in England</p>
              </div>
              <div><p className="text-[16px] font-Roboto text-[#FFFFF0]">Colour palette inspired by @thehousewiththepinkbed</p></div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#135029] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <div>
            <p className="text-xs font-medium font-Roboto">Stay Up to Date</p>
            <h2 className="text-[24px] font-Roboto font-medium">Subscribe to Our Newsletter</h2>
          </div>
          <div className="flex gap-6">
            <button className="border pl-2 pr-16 text-start py-2 rounded-xl">Enter Your Email</button>
            <button className="border px-4 py-2 uppercase rounded-xl">Subscribe</button>
          </div>
        </div>
      </div>
      {/* modal component */}
      {modal && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </footer>
  )
}

export default Footer