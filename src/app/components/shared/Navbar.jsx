"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "../modal/Modal";




const Navbar = () => {
  const [getMenu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [showDrower, setShowDrower] = useState(false);

  // background color add in navbar scroll
  const changeBackground = () => {
    if (window.scrollY >= 32) {
      setNavbar(true)
    }
    else { setNavbar(false) }
  }
  window.addEventListener('scroll', changeBackground)

  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    // {
    //   path: "/destination",
    //   title: "Destination",
    // },
    {
      path: "/oman",
      title: "Oman",
    },
    {
      path: "/about",
      title: "About Us",
    },
    {
      path: "/blog",
      title: "Blogs",
    },
    {
      path: "/conditions",
      title: "Terms & Conditions",
    },
    {
      path: "/privacy",
      title: "Privacy Policy",
    },
    {
      path: "/cancelation",
      title: "Cancelation & Refund",
    },
  ];
  const handleDrawer = () => {
    setShowDrower(!showDrower)
  }

  // drower hide function
  const handleClick = () => {
    setMenu(false)
    setShowDrower(false)
  }

  // modal show function
  const handleModal = () => {
    setModal(true)
    setIsOpen(true)
  }
  return (
    <nav className={navbar ? 'bg-black/90 fixed w-full z-50' : ' fixed w-full z-50'}>
      <div className=" flex items-center justify-between container mx-auto px-4 ">
        <div className="lg:hidden" onClick={() => setMenu(!getMenu)}>
          {getMenu ? (
            <IoCloseSharp className="text-xl text-white w-10 h-10 p-2" />
          ) : (
            <GiHamburgerMenu className="text-xl text-white w-10 h-10 p-2" />
          )}
        </div>

        {/* left section  */}
        <div className="relative hidden lg:block">
          <GiHamburgerMenu onClick={() => handleDrawer()} className=" text-xl text-white  w-10 h-10 p-2 cursor-pointer" />

          {/* ================================= drower show start ================================================================== */}

          {
            showDrower && <div className="absolute top-10 left-2 -20-left-0 w-[300px] bg-gray-300">
              <div className="flex justify-between p-10">
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
                </ul>
                <div onClick={() => setShowDrower(false)} className="bg-primary w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"><IoCloseSharp className="text-xl text-white w-10 h-10 p-2" /></div>
              </div>
            </div>
          }
          {/* ================================= drower show end ================================================================== */}
        </div>



        <div className="flex items-center ml-60 gap-8 lg:hidden">
          <Image className="" src="/logo.png" alt="avater" width={100} height={100} />
        </div>

        <div className="hidden lg:flex ">
          <Image src="/logo.png" alt="nav logo" width={200} height={200} />
        </div>
        {/* navlinks / center section end  */}

        <div className="flex items-center gap-2 lg:gap-6">
          {/* button start  */}
          <div className="group relative hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-4">
              <button onClick={() => handleModal()} className="border border-primary rounded-md hover:bg-primary uppercase text-white px-6 py-2">Enquire now</button>
            </div>
          </div>
        </div>
      </div>




      {/* mobile responsive section  */}
      <div
        className={`h-screen overflow-y-auto w-full lg:hidden  absolute z-[9999]   transition-all bg-white ease-in-out duration-300 transform ${getMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-10 ">
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
          <div className="flex items-center gap-4">
              <button onClick={() => handleModal()} className="border px-6 py-2">Enquire now</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal component */}
      {modal && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;



