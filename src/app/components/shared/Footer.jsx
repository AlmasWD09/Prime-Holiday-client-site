"use client"
import Image from "next/image";
import { useState } from "react";
import Modal from "../modal/Modal";
import Link from "next/link";
import ScrollTopButton from "./ScrollTopButton";




const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);


  // modal show function
  const handleModal = () => {
    setModal(true);
    setIsOpen(true);
  };

  return (
    <footer className="relative text-[#FFFFF0] font-Roboto"
      style={{
        backgroundImage: "url(/footer.png)",
        // backgroundImage: "url(http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735182160/lskef7d2q40k09xumb04.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >

      <section className="container mx-auto px-4 pb-20 md:pb-[42px] h-full ">
        <div className="flex justify-center">
          <h1 className="text-[36px] md:text-5xl font-Roboto font-bold text-primary pt-[54px]">Connect With Us</h1>
        </div>
        <div className="pt-10  md:space-y-0">
          {/* div onte */}
          <div className="flex flex-col md:flex-row justify-between pb-4 space-y-4 md:space-y-0">
            <div>
              <div className="flex gap-4 border-b pb-[16px] text-primary">
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

              <div className="border-b py-[16px]">
                <Image src="/logo/location.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px] mb-[8px]" />
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">65 Hartfield Crescent</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Birmingham
                </p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">B27 7QE</p>
              </div>
              <div className="pt-[16px]">
                <Image src="/logo/sms.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px] mb-[8px]" />
                <a href="#" className="border-b font-Roboto text-[18px] text-[#FFFFF0] pb-[16px]">contact@primeholidaydestinations.com</a>
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
            <div className="pt-[16px]">
              <Image src="/logo/whatsapp.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px] mb-[8px]" />
              <p className="text-[18px] font-Roboto text-[#FFFFF0]">+44 7553 778086</p>
            </div>
            {/* small/laptob device for */}
            <div className="">
              <button
                onClick={() => handleModal()}
                className="font-Roboto border border-primary rounded-xl hover:bg-primary uppercase text-[#FFFFF0] text-xs font-semibold px-3 py-2 md:py-3 md:text-[18px] md:hidden">Enquire now</button>
            </div>

            <div>
              <Image src="/logo.png" alt="nav logo" width={200} height={200} className=" md:w-[358px] md:h-[198px] object-contain" />
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
              <div className="md:pb-16 lg:pb-0"><a href="/@thehousewiththepinkbed" className="text-[16px] font-Roboto text-[#FFFFF0]">Colour palette inspired by @thehousewiththepinkbed</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* scroll button */}
      <div className="absolute w-full flex justify-end right-[30px] md:right-[35px] bottom-[160px] md:bottom-[130px] lg:right-[120px] lg:bottom-[150px]">
        <ScrollTopButton />
      </div>


      <div className="bg-[#135029] py-[24px]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-xs font-medium font-Roboto">Stay Up to Date</p>
            <h2 className="text-[24px] font-Roboto font-medium">Subscribe to Our Newsletter</h2>
          </div>
          <div className="flex gap-[16px]">
            <button className="border text-start rounded-xl w-[298px] h-[35px] py-[10px] pl-[16px] flex items-center">Enter Your Email</button>
            <button className="border text-start rounded-xl w-[103px] h-[35px] py-[10px] pl-[16px] flex items-center">Subscribe</button>
          </div>
        </div>
      </div>
      {/* modal component */}
      {modal && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </footer>
  )
}

export default Footer