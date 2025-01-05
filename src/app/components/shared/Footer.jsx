"use client"
import Image from "next/image";
import { useState } from "react";
import Modal from "../modal/Modal";




const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);


  // modal show function
  const handleModal = () => {
    setModal(true);
    setIsOpen(true);
  };

  return (
    <footer className="text-white font-Roboto"
      style={{
        backgroundImage: "url(/footer.png)",
        // backgroundImage: "url(http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735182160/lskef7d2q40k09xumb04.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>


      <section className="container mx-auto px-4 py-10  h-full">
        <div className="flex justify-center">
          <h1 className="text-[36px] md:text-5xl font-Roboto font-semibold text-primary">Connect with us</h1>
        </div>
        <div className="pt-10 space-y-20 md:space-y-0">
          {/* div onte */}
          <div className="flex flex-col md:flex-row justify-between pb-4 space-y-4 md:space-y-0">
            <div>
              <div className="flex gap-4 pb-4 text-primary">
                <Image src="/logo/instagram.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                <Image src="/logo/facebook.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                <Image src="/logo/paypal.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                <Image src="/logo/play.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
              </div>
              <div className="border-t py-4">
              <Image src="/logo/location.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                <p>65 Hartfield Crescent</p>
                <p>Birmingham
                </p>
                <p>B27 7QE</p>
              </div>
              <div className="border-t pt-4">
              <Image src="/logo/sms.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
                <p className="border-b pb-4">contact@primeholidaydestinations.com</p>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => handleModal()}
                className="text-[18px] font-Roboto border border-primary rounded-xl hover:bg-primary uppercase text-white px-6 py-2">Enquire now</button>
            </div>
          </div>
          {/* div two */}
          <div className="flex flex-col md:flex-row justify-between pb-16 space-y-4 md:space-y-0">
            <div className=" pt-4">
            <Image src="/logo/whatsapp.png" alt="icon" width={20} height={20} className="w-[24px] h-[24px]" />
              <p>+44 7553 778086</p>
            </div>
            <div>
              <Image src="/logo.png" alt="nav logo" width={200} height={200} />
            </div>
          </div>
          {/* div three */}
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            <div>
              <p>About | Terms & Conditions | Privacy | Cancellation & Refund</p>
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
      {/* modal component */}
      {modal && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </footer>
  )
}

export default Footer