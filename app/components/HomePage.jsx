"use client";
import Image from "next/image";
import React from "react";
// import Lottie from "lottie-react";
import animationData from "../../public/animation/scrolly.json";
import dynamic from "next/dynamic";
import Link from "next/link";

const HomePage = () => {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <section className="h-[100vh] flex flex-row items-center">
      <div className="flex flex-col w-full z-10  xl:pl-40">
        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold gap-2 pl-4 lg:pl-10 xl:pl-0">
          THE ONLY <br />
          <span className="text-yellow-400 text-5xl  sm:text-6xl lg:text-7xl xl:text-8xl l font-bold">
            IMPOSSIBLE JOURNEY
          </span>{" "}
          <br />
          IS THE ONE YOU <br />
          <span className="text-yellow-400 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
            NEVER BEGIN
          </span>
        </h1>
        <div className="flex items-center justify-center w-full sm:justify-start pl-4 lg:pl-10 xl:pl-0">
          <Link
            href="#classes"
            className="bg-yellow-400 w-80 h-20 text-xl sm:text-2xl  mt-10 hover:bg-[#1c1c1c] hover:text-white flex items-center justify-center transtion duration-300 ease-in-out"
          >
            BEGIN YOUR JOURNEY
          </Link>
        </div>
      </div>
      <div className="absolute right-0 h-full w-full sm:w-[80%] md:w-[70%] xl:w-[60%]">
        <Image
          src="/images/image2.jpg"
          fill
          alt="home image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute bottom-0 rigt-[50%] w-full">
        <Lottie animationData={animationData} className="h-14" />
      </div>
    </section>
  );
};

export default HomePage;
