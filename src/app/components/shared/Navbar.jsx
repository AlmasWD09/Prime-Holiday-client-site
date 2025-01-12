"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "../modal/Modal";

const Navbar = () => {
  const [getMenu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [showDrower, setShowDrower] = useState(false);

  // background color add in navbar scroll
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      });
    }
    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);

  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About Us",
    },
    {
      path: "/destination",
      title: "Destinations",
    },
    // {
    //   path: "/oman",
    //   title: "Oman",
    // },

    // {
    //   path: "/conditions",
    //   title: "Terms & Conditions",
    // },
    // {
    //   path: "/privacy",
    //   title: "Privacy Policy",
    // },
    // {
    //   path: "/cancelation",
    //   title: "Cancelation & Refund",
    // },
  ];
  const handleDrawer = () => {
    setShowDrower(!showDrower);
  };

  // drower hide function
  const handleClick = () => {
    setMenu(false);
    setShowDrower(false);
  };

  // modal show function
  const handleModal = () => {
    setModal(true);
    setIsOpen(true);
  };


  // Mobile device modal sidebar remove
  const handleMobileModal = () => {
    setMenu(false);
    setShowDrower(false);
    setModal(true);
    setIsOpen(true);
  };


  return (
    <nav
      className={
        navbar
          ? "bg-[#135029] drop-shadow fixed w-full z-50 duration-150 transition-all"
          : " fixed w-full z-50 py-4 transition-all duration-150"
      }
    >
      <div className="grid grid-cols-3 justify-between items-center container mx-auto px-4 h-[70px] md:h-full ">

        {/* menu */}
        <div className="lg:hidden " onClick={() => setMenu(!getMenu)} >
          <div className="">
            {getMenu ? (
              <IoCloseSharp className="text-xl text-[#FFFFF0] w-10 h-10 hover:text-primary " />
            ) : (
              <GiHamburgerMenu className="text-xl text-[#FFFFF0] w-10 h-10 hover:text-primary" />
            )}
          </div>
        </div>

        {/* left section  */}
        <div className="relative hidden lg:block col-span-1">
          <GiHamburgerMenu
            onClick={() => handleDrawer()}
            className=" text-xl text-[#FFFFF0] w-[40px] h-[40px] cursor-pointer hover:text-primary"
          />

          {/* ================================= drower show start ================================================================== */}

          {showDrower && (
            <div className="absolute top-14 left-2 -20-left-0 w-[300px] bg-[#fffff0] rounded-md ">
              <div className="flex justify-between p-10 ">
                <ul className=" flex flex-col gap-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.path}
                      onClick={() => handleClick()}
                      href={item.path}
                    >
                      <li className="hover:text-primary">{item.title}</li>
                    </Link>
                  ))}

                  <div className="relative group inline-block">
                    <p className="text-[#4545458a]">Blogs</p>
                    <div className="absolute invisible group-hover:visible bg-primary opacity-60 text-[#FFFFF0]  rounded flex justify-center w-[150px] py-1 -top-1 left-[80%] transform -translate-x-[10px] transition-opacity duration-300">
                      Comming Soon
                    </div>
                  </div>

                </ul>
                <div
                  onClick={() => setShowDrower(false)}
                  className="bg-primary w-8 h-8 flex justify-center items-center rounded-full cursor-pointer "
                >
                  <IoCloseSharp className="text-xl text-[#FFFFF0] w-10 h-10 p-2" />
                </div>
              </div>
            </div>
          )}
          {/* ================================= drower show end ================================================================== */}
        </div>

        {/* image*/}
       <div className="flex justify-center items-center lg:hidden cursor-pointer pt-3">
       <Link
          href={"/"}>
          <Image
            src="/logo.png"
            alt="avater"
            width={100}
            height={100}
            className="w-[108px] md:h-[100px] object-cover"
          />
        </Link>
       </div>

       {/* button */}
        <div className="lg:hidden flex justify-end ">
          <button
            onClick={() => handleMobileModal()}
            className=" w-fit border border-primary text-primary hover:text-[#FFFFF0] rounded-xl hover:bg-primary text-[12px] font-Roboto uppercase font-semibold px-2 py-2"
          >
            Enquire now
          </button>
        </div>

 

        <div className="col-span-1 flex justify-center pt-12">
        <Link href={"/"} className="hidden lg:flex cursor-pointer">
          <Image src="/logo.png" alt="nav logo" width={300} height={300} className="h-[170px] object-contain" />
        </Link>
        </div>
     
        {/* navlinks / center section end  */}

        <div className="lg:gap-6 col-span-1 flex justify-end">
          {/* button start  */}
          <div className="group relative hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleModal()}
                className="text-[18px] font-Roboto border border-primary rounded-xl hover:bg-primary uppercase text-[#FFFFF0] font-bold px-4 py-2">
                Enquire now
              </button>
            </div>
          </div>
        </div>
      </div>
















      {/* mobile responsive section  */}
      <div
        className={`h-screen overflow-y-auto w-full lg:hidden  absolute z-[9999]  transition-all bg-[#fffff0] ease-in-out duration-300 transform ${getMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-10">
          <ul className=" flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                onClick={() => setMenu(false)}
                href={item.path}
              >
                <li className="hover:text-primary">{item.title}</li>
              </Link>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            {/* <div className="w-full flex justify-center items-center gap-4">
              <button
                onClick={() => handleMobileModal()}
                className="w-full border border-primary text-primary hover:text-[#FFFFF0] rounded-xl hover:bg-primary uppercasetext-[18px] font-Roboto uppercase font-bold py-2"
              >
                Enquire now
              </button>
            </div> */}
            <div className="relative group inline-block">
              <p className="text-[#4545458a]">Blogs</p>
              <div className="absolute invisible group-hover:visible bg-primary opacity-60 text-[#FFFFF0]  rounded flex justify-center w-[150px] py-1 -top-1 left-[20%] transform -translate-x-[10px] transition-opacity duration-300">
                Comming Soon
              </div>
            </div>
          </div>
        </div>
        {/* modal component */}
        {modal && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
      {/* modal component */}
      {modal && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;


