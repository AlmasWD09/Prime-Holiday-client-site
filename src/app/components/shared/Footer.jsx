"use client"
import Image from "next/image";
import { useState } from "react";
import Modal from "../modal/Modal";
import Link from "next/link";
import ScrollTopButton from "./ScrollTopButton";
import Cookies from 'js-cookie';



const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);


  // modal show function
  const handleModal = () => {
    setModal(true);
    setIsOpen(true);
  };

  const role = 'admin'
  const token = Cookies.get('token');


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
          <div className="flex flex-col md:flex-row justify-between pb-0 space-y-4 md:space-y-0">
            <div>
              <div className="flex gap-4 border-b pb-[16px] text-primary">
                <Link href={'https://www.instagram.com/phdbyrizmali'}>
                  <Image src="/logo/instagram.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                </Link>

                <Link href={'https://www.facebook.com/phdbyrizmali'}>
                  <Image src="/logo/facebook.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                </Link>

                <Link href={'https://www.pinterest.com/phdbyrizmali'}>
                  <Image src="/logo/pinterest.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                </Link>
                <Link href={'https://www.youtube.com/@phdbyrizmali7'}>
                  <Image src="/logo/youtube.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                </Link>


              </div>

              <div className="border-b py-[16px] text-wrap">
                <Image src="/logo/location.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px] mb-[8px]" />
                {/* <p className="text-[18px] font-Roboto text-[#FFFFF0]">65 Hartfield Crescent</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Birmingham</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">B27 7QE</p> */}
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">83-85 Hagley Road</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Suite 2A, 6th Floor</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Cobalt Square</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Birmingham</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">B16 8QG</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">United Kingdom</p>
              </div>
              <div className="pt-[16px]">
                <Image src="/logo/sms.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px] mb-[8px]" />
                <p className="border-b font-Roboto text-[18px] text-[#FFFFF0] pb-[16px]">contact@primeholidaydestinations.com</p>
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
            <div className="md:pt-[16px]">
              <Image src="/logo/whatsapp.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px] mb-[8px]" />
              <p className="text-[18px] font-Roboto text-[#FFFFF0]">+44 7553 778086</p>
            </div>

            <div>
              <Image src="/logo.png" alt="nav logo" width={200} height={200} className=" md:w-[358px] md:h-[198px] object-contain" />
            </div>
          </div>
          {/* div three */}
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            <div>
              <p className="text-[18px] font-Roboto text-[#FFFFF0]"><Link href="/about">About</Link> | <Link href="/destination">Destinations</Link> | Blog | <Link href="/conditions">Terms & Conditions</Link> | <Link href="/privacy">Privacy</Link> | <Link href="/cancelation">Cancellation & Refund</Link> | <Link
                  href={`${(role === 'admin') && token ? '/admin/dashboard' : '/login'}`}>
                  Dashboard</Link>
              </p>



              <p className="text-[18px] font-Roboto text-[#FFFFF0]">© 2024 Rizmali Travel & Tours Limited</p>
            </div>

            <div className="md:text-end space-y-4 md:pb-10 2xl:pb-0">
              <div>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Prime Holiday Destinations <a href=""></a> Brand by Rizmali Travel & Tours Limited</p>
                <p className="text-[18px] font-Roboto text-[#FFFFF0]">Company Number 14730696  I  Registered in England</p>
              </div>
              <div className="lg:pb-0 flex md:flex-col lg:flex-row md:justify-end lg:items-center gap-2">
                <p>Colour palette inspired by</p>
                <a href="https://www.instagram.com/thehousewiththepinkbed" className="text-[16px] font-Roboto text-[#FFFFF0] hover:underline">thehousewiththepinkbed</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* scroll button */}
      <div className="absolute w-fit flex justify-end right-[30px] md:right-[16px] bottom-[240px] md:bottom-[185px] lg:bottom-[120px] 2xl:right-[120px] 2xl:bottom-[150px]">
        <ScrollTopButton />
      </div>


      <div className="bg-[#135029] py-[24px]">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row md:justify-between lg:items-center gap-8">
          <div>
            <p className="text-xs font-medium font-Roboto">Stay Up to Date</p>
            <h2 className="text-[24px] font-Roboto font-medium">Subscribe to Our Newsletter</h2>
          </div>
          <div>
            {/* Email form */}
            <form className="flex flex-col md:flex-row gap-[16px] ">
              <input type="email" name="email" id="" placeholder="Enter Your Email" className="bg-transparent outline-none border text-[#FFFFF0] text-start rounded-xl w-[298px] h-[35px] py-[10px] pl-[16px] flex items-center" />
              <input type="button" value="Subscribe" className="border text-start rounded-xl w-fit h-[35px] 4xl:h-0 px-[16px]  flex items-center cursor-pointer" />
            </form>
          </div>
        </div>
      </div>
      {/* modal component */}
      {modal && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </footer>
  )
}

export default Footer