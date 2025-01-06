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
          ? "bg-[#135029] drop-shadow fixed w-full z-50 duration-150 transition-all py-2"
          : " fixed w-full z-50 py-4 transition-all duration-150 "
      }
    >
      <div className=" flex items-center justify-between container mx-auto px-4 ">
        <div className="lg:hidden" onClick={() => setMenu(!getMenu)} >
          {getMenu ? (
            <IoCloseSharp className="text-xl text-white w-10 h-10 p-2 hover:text-primary " />
          ) : (
            <GiHamburgerMenu className="text-xl text-white w-10 h-10 p-2 hover:text-primary" />
          )}
        </div>

        {/* left section  */}
        <div className="relative hidden lg:block ">
          <GiHamburgerMenu
            onClick={() => handleDrawer()}
            className=" text-xl text-white  w-10 h-10 p-2 cursor-pointer hover:text-primary"
          />

          {/* ================================= drower show start ================================================================== */}

          {showDrower && (
            <div className="absolute top-10 left-2 -20-left-0 w-[300px] bg-[#fffff0] rounded-md ">
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

                  <div class="relative group inline-block">
                    <p>Blogs</p>
                    <div class="absolute invisible group-hover:visible bg-primary opacity-60 text-white  rounded flex justify-center w-[200px] py-1 -top-6 left-[40%] transform -translate-x-[10px] transition-opacity duration-300">
                      Comming Soon
                    </div>
                  </div>

                </ul>
                <div
                  onClick={() => setShowDrower(false)}
                  className="bg-primary w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
                >
                  <IoCloseSharp className="text-xl text-white w-10 h-10 p-2" />
                </div>
              </div>
            </div>
          )}
          {/* ================================= drower show end ================================================================== */}
        </div>

        <Link
          href={"/"}
          className="flex items-center ml-60 gap-8 lg:hidden cursor-pointer"
        >
          <Image
            className="w-[178px] h-[63px]"
            src="/logo.png"
            alt="avater"
            width={100}
            height={100}
          />
        </Link>

        <Link href={"/"} className="hidden lg:flex pt-2 cursor-pointer ">
          <Image
            src="/logo.png"
            alt="nav logo"
            width={200}
            height={200}
            className="w-[178px] h-[73px]"
          />
        </Link>
        {/* navlinks / center section end  */}

        <div className="flex items-center gap-2 lg:gap-6 ">
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
              <button
                onClick={() => handleMobileModal()}
                className="border border-primary rounded-xl hover:bg-primary uppercase px-6 py-2"
              >
                Enquire now
              </button>
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
