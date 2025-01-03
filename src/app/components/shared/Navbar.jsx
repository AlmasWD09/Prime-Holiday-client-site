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
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/destination",
      title: "Destination",
    },
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
  return (
    <nav
      className={
        navbar
          ? "bg-green-800  drop-shadow bg-opacity-40 fixed w-full z-50 py-0 duration-150 transition-all"
          : " fixed w-full z-50 py-4 transition-all duration-150"
      }
    >
      <div className=" flex items-center justify-between container mx-auto px-4 ">
        <div className="lg:hidden" onClick={() => setMenu(!getMenu)}>
          {getMenu ? (
            <IoCloseSharp className="text-xl text-white w-10 h-10 p-2 hover:text-primary" />
          ) : (
            <GiHamburgerMenu className="text-xl text-white w-10 h-10 p-2 hover:text-primary" />
          )}
        </div>

        {/* left section  */}
        <div className="relative hidden lg:block">
          <GiHamburgerMenu
            onClick={() => handleDrawer()}
            className=" text-xl text-white  w-10 h-10 p-2 cursor-pointer hover:text-primary"
          />

          {/* ================================= drower show start ================================================================== */}

          {showDrower && (
            <div className="absolute top-10 left-2 -20-left-0 w-[300px] bg-gray-300">
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
            className=""
            src="/logo.png"
            alt="avater"
            width={100}
            height={100}
          />
        </Link>

        <Link href={"/"} className="hidden lg:flex pt-2 cursor-pointer">
          <Image
            src="/logo.png"
            alt="nav logo"
            width={200}
            height={200}
            className={`object-contain ${navbar ? "h-16" : "h-20"}`}
          />
        </Link>
        {/* navlinks / center section end  */}

        <div className="flex items-center gap-2 lg:gap-6">
          {/* button start  */}
          <div className="group relative hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleModal()}
                className="border border-primary rounded-xl hover:bg-primary uppercase text-white px-6 py-2"
              >
                Enquire now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile responsive section  */}
      <div
        className={`h-screen overflow-y-auto w-full lg:hidden  absolute z-[9999]   transition-all bg-white ease-in-out duration-300 transform ${
          getMenu ? "translate-x-0" : "-translate-x-full"
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
                onClick={() => handleModal()}
                className="border px-6 py-2"
              >
                Enquire now
              </button>
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
