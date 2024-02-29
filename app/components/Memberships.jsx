"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegCircleCheck } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Memberships = () => {
  return (
    <section
      id="memberships"
      className="relative bg-black w-full flex flex-col mb-20 pt-20"
    >
      <h1 className="text-white text-[50px] md:text-[90px] lg:text-[120px] italic font-bold absolute top-[5%] left-[5%] md:top-[10%] xl:top-[10%] ">
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
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-screen">
          <Swiper
            style={{
              "--swiper-pagination-color": "#FFBA08",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            slidesPerView={3}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={2}
            loop
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={true}
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
                      12 Classes Per Month
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />3 Classes Per Day
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      No joining fees
                    </div>
                  </div>
                  <Link
                    href="/"
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
                    href="/"
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
                      20 Classes Per Month
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />5 Classes Per Day
                    </div>
                    <div className="flex flex-row items-center justify-start gap-1 text-md">
                      <FaRegCircleCheck size={18} />
                      No joining fees
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
    </section>
  );
};

export default Memberships;
