"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const AnimatedNumber = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achivementsList = [
  {
    metric: "DIFFERENT MODULES",
    value: 45,
  },
  {
    metric: "MINUTES PER CLASS",
    value: 60,
  },
  {
    metric: "CLASSES PER WEEK",
    value: 20,
  },
  {
    metric: "UNITED GOAL",
    value: 1,
  },
];

const classesData = [
  {
    id: 1,
    image: "/images/classesimages/image1.jpg",
    classname: "CROSSFIT - BEGINNERS CLASS",
    link: "/beginners",
  },
  {
    id: 2,
    image: "/images/classesimages/image2.jpg",
    classname: "CROSSFIT - GYMNASTICS",
    link: "/gymnastics",
  },
  {
    id: 3,
    image: "/images/classesimages/image3.jpg",
    classname: "CROSSFIT - OLYMPIC LIFTING",
    link: "/olympic-lifting",
  },
  {
    id: 4,
    image: "/images/classesimages/image4.jpg",
    classname: "CROSSFIT - FEMALE ONLY",
    link: "/female-only",
  },
];

const Classes = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="classes"
      className="w-full bg-black relative pt-20"
    >
      <h1 className="text-white text-[50px] sm:text-[80px] md:text-[120px] italic font-bold absolute top-40 md:top-40 right-[10%]">
        03
      </h1>
      <div className="w-full flex flex-col items-center justify-center p-2 pb-[100px]">
        <h1 className="text-[#1c1c1c] absolute text-3xl sm:text-6xl lg:text-8xl font-bold">
          FEATURED CLASSES
        </h1>
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold z-10 pt-6 md:pt-16">
          FEATURED CLASSES
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full place-items-center gap-8 p-2 md:p-20">
        {classesData.map(({ id, image, classname, link }) => {
          return (
            <div
              key={id}
              className="w-full h-[400px] flex flex-col justify-end relative"
            >
              <Image
                src={image}
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
                alt="coach"
                className=" absolute w-full h-full"
              />
              <div className="p-10 z-10">
                <h2 className="text-yellow-400 text-2xl font-bold pb-4">
                  {classname}
                </h2>

                <Link
                  href={link}
                  className="bg-yellow-400 hover:bg-[#1c1c1c] hover:text-white transition duration-300 ease-in-out py-4 px-6"
                >
                  BOOK
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-yellow-400 w-full h-40 flex flex-row justify-evenly items-center">
        {achivementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col items-center justify-center max-4 my-4 sm:my-0"
            >
              <h2 className="text-black text-3xl sm:text-6xl font-bold">
                <AnimatedNumber
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-black text-3xl sm:text-6xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 50,
                      friction: 500,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
              </h2>
              <p className="text-black text-sm sm:text-xl text-center">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Classes;
