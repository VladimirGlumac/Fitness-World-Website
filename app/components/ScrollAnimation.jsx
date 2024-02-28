"use client";
import React, { useEffect } from "react";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6";

function ScrollAnimation() {
  useEffect(() => {
    const progressBar = document.getElementById("progressbar");
    progressBar.style.height = "1%"; // Initialize progress bar height

    const handleScroll = () => {
      const scroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (scroll / height) * 100;

      if (scrolled <= 1) {
        progressBar.style.height = "1%";
      } else if (scrolled >= 2 && scrolled <= 99.9) {
        progressBar.style.height = scrolled + "%";
      } else if (scrolled === 100) {
        progressBar.style.height = scrolled + "%";
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="hidden fixed inset-y-0 right-0 md:flex flex-col items-center justify-center z-20 mr-6">
      <h1 className="text-white text-xl tracking-wide">01</h1>
      <div className="w-1 h-[400px] bg-gray-200 flex justify-center items-start">
        <div id="progressbar" className="w-4 bg-yellow-400"></div>
      </div>
      <h1 className="text-white text-xl tracking-wide">04</h1>
      <div className="flex flex-col gap-2 pt-2">
        <div className="text-white text-3xl cursor-pointer hover:text-yellow-400 hover:translate-x-[-2px] transition duration-300 ease-in-out">
          <FaInstagram />
        </div>
        <div className="text-white text-3xl cursor-pointer hover:text-yellow-400 hover:translate-x-[-2px] transition duration-300 ease-in-out">
          <FaSquareTwitter />
        </div>
        <div className="text-white text-3xl cursor-pointer hover:text-yellow-400 hover:translate-x-[-2px] transition duration-300 ease-in-out">
          <FaSquareFacebook />
        </div>
      </div>
    </div>
  );
}

export default ScrollAnimation;
