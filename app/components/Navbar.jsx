"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-black fixed top-0 w-[100%] z-40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg-px-8">
          <div className="flex items-center justify-between h-[80px]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <Image
                    src="/gymlogo.png"
                    width={200}
                    height={200}
                    alt="Logo"
                  />
                </a>
              </div>
            </div>
            <div className="hidden xl:block">
              <div className="ml-4 items-center space-x-4">
                <a href="/" className="text-white p-4  hover:text-gray-600">
                  HOME
                </a>
                <a
                  href="/#whoweare"
                  className="text-white p-4  hover:text-gray-600 "
                >
                  WHO WE ARE
                </a>
                <a
                  href="/#meettheteam"
                  className="text-white p-4 hover:text-gray-600"
                >
                  MEET THE TEAM
                </a>
                <a
                  href="/#classes"
                  className="text-white p-4 hover:text-gray-600"
                >
                  CLASSES
                </a>
                <a
                  href="/#memberships"
                  className="text-white p-4 hover:text-gray-600"
                >
                  MEMBERSHIPS
                </a>
                <Link
                  href="/contact"
                  className="p-4 text-xl  bg-yellow-400 font-bold text-black hover:bg-[#1c1c1c] hover:text-white transition duration-400 ease-in-out "
                >
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="xl:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
                onClick={toggleNavbar}
              >
                {isClick ? <IoMdClose size={30} /> : <CiMenuFries size={30} />}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="xl:hidden">
            <div className="flex flex-col px-2 pt-2 pb-3 spa-y-1 sm:px-3 items-center gap-5">
              <a
                href="/"
                onClick={() => setisClick(false)}
                className="text-white hover:text-gray-400"
              >
                HOME
              </a>
              <a
                href="/#whoweare"
                onClick={() => setisClick(false)}
                className="text-white hover:text-gray-400"
              >
                WHO WE ARE
              </a>
              <a
                href="/#meettheteam"
                onClick={() => setisClick(false)}
                className="text-white hover:text-gray-400"
              >
                MEET THE TEAM
              </a>
              <a
                href="/#classes"
                onClick={() => setisClick(false)}
                className="text-white hover:text-gray-400"
              >
                CLASSES
              </a>
              <a
                href="/#memberships"
                onClick={() => setisClick(false)}
                className="text-white hover:text-gray-400"
              >
                MEMBERSHIPS
              </a>
              <Link
                href="/contact"
                className="p-4 text-xl  bg-yellow-400 font-bold text-black hover:bg-[#1c1c1c] hover:text-white transition duration-400 ease-in-out "
              >
                Contact
              </Link>
              <div className="flex flex-row gap-3">
                <div className="text-white text-3xl cursor-pointer hover:text-yellow-400 hover:translate-y-[-2px] transition duration-300 ease-in-out">
                  <FaInstagram />
                </div>
                <div className="text-white text-3xl cursor-pointer hover:text-yellow-400 hover:translate-y-[-2px] transition duration-300 ease-in-out">
                  <FaSquareTwitter />
                </div>
                <div className="text-white text-3xl cursor-pointer hover:text-yellow-400 hover:translate-y-[-2px] transition duration-300 ease-in-out">
                  <FaSquareFacebook />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
