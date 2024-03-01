"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Memberships = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="memberships"
      className="relative bg-black w-full flex flex-col mb-20 pt-20 items-center justify-center"
    >
      <h1 className="text-white text-[50px] sm:text-[80px] md:text-[120px] italic font-bold absolute top-40 md:top-40 left-[10%]">
        04
      </h1>
      <div className="w-full flex flex-col items-center justify-center p-2 pb-[100px]">
        <h1 className="text-[#1c1c1c] absolute text-4xl sm:text-6xl lg:text-8xl font-bold">
          MEMBERSHIPS
        </h1>
        <h1 className="text-white text-2xl sm:text-4xl font-bold z-10 pt-10 md:pt-16">
          MEMBERSHIPS
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-[80%]">
        <div className="w-full">
          <Swiper
            slidesPerView={3}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={2}
            loop
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-auto flex items-center justify-center ">
                <div className="bg-white w-80 h-[500px] flex flex-col items-center justify-evenly p-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-center">
                    FLEXI
                  </h1>
                  <Image
                    src="/images/timeleft.png"
                    height={100}
                    width={100}
                    alt="timeleft"
                  />
                  <p className="w-full flex flex-row items-center justify-center text-sm sm:text-xl text-center text-nowrap	">
                    <span className="font-bold">£ 99.99</span> / month
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-start gap-1 text-sm sm:text-md">
                      <FaRegCircleCheck size={18} />
                      <p className="text-sm ml-1">12 Classes Per Month</p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      <p className="text-sm ml-1">3 Classes Per Day</p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      <p className="text-sm ml-1">No joining fees</p>
                    </div>
                  </div>
                  <Link
                    href="/memberships"
                    className="bg-yellow-400 p-2 hover:bg-[#1c1c1c] transition duration-300 ease-in-out hover:text-white"
                  >
                    JOIN TODAY
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto flex items-center justify-center">
                <div className="bg-white w-80 h-[500px] flex flex-col items-center justify-evenly p-2">
                  <h1 className="text-2xl sm:text-3xl  font-bold text-center">
                    ALL ACCES
                  </h1>
                  <Image
                    src="/images/clock.png"
                    height={100}
                    width={100}
                    alt="clock"
                  />
                  <p className="w-full flex flex-row items-center justify-center text-sm sm:text-xl text-center text-nowrap	">
                    <span className="font-bold">£ 199.99</span> / month
                  </p>
                  <div className="flex flex-col gap-2 justify-start items-start p-2">
                    <div className="w-full flex flex-row  justify-center items-center gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      <p className="text-sm sm:text-md">
                        Unlimited Classes Per Month
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      <p className=" text-sm md:text-md">3 Classes Per Day</p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      <p className="text-sm sm:text-md"> No joining fees</p>
                    </div>
                  </div>
                  <Link
                    href="/memberships"
                    className="bg-yellow-400 p-2 hover:bg-[#1c1c1c] transition duration-300 ease-in-out hover:text-white"
                  >
                    JOIN TODAY
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-auto flex items-center justify-center ">
                <div className="bg-white w-80 h-[500px] flex flex-col items-center justify-evenly p-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-center">
                    OFF-PEAK
                  </h1>
                  <Image
                    src="/images/contrast.png"
                    height={100}
                    width={100}
                    alt="clock"
                  />
                  <p className="w-full flex flex-row items-center justify-center text-sm sm:text-xl text-center text-nowrap	">
                    <span className="font-bold">£ 149.99</span> / month
                  </p>
                  <div className="flex flex-col justify-start items-start  gap-2  p-2">
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      <p className="text-sm ml-1">20 Classes Per Month</p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      <p className="text-sm ml-1">5 Classes Per Day</p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      <p className="text-sm ml-1">No joining fees</p>
                    </div>
                  </div>
                  <Link
                    href="/memberships"
                    className="bg-yellow-400 p-2 hover:bg-[#1c1c1c] transition duration-300 ease-in-out hover:text-white"
                  >
                    JOIN TODAY
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Memberships;
