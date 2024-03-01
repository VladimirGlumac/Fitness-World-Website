"use client";
import React from "react";
import ApplyForClassForm from "../components/ApplyForClassForm";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const page = () => {
  return (
    <div className="w-full h-auto bg-black ">
      <div className="w-full h-full mt-20">
        <div className="flex flex-row">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full p-5"
          >
            <h1 className="text-4xl text-white mb-10">
              CROSSFIT - FEMALE ONLY{" "}
            </h1>
            <h3 className="text-white mb-3">
              Are you ready to elevate your CrossFit training? Join our
              exclusive Females CrossFit program and unlock new levels of
              strength, agility, and endurance. Our expert coaches lead dynamic
              sessions tailored to all fitness levels, from beginners just
              starting their fitness journey to experienced athletes looking to
              push their limits. With personalized instruction, comprehensive
              training, and a supportive atmosphere, you&apos;ll conquer
              challenges and achieve your fitness goals. Book your sessions now
              and join our empowering community of strong and determined women.
            </h3>
            <ul className="list-disc text-white p-3">
              <li className="mb-2">
                Choose Your Package: Select from our range of membership options
                tailored to fit your schedule and goals.
              </li>
              <li className="mb-2">
                Reserve Your Spot: Secure your place in our classes by booking
                online or contacting us directly.
              </li>
              <li className="mb-2">
                Get Ready to Train: Arrive at our state-of-the-art facility
                ready to sweat, push your limits, and achieve greatness with the
                guidance of our dedicated coaches.
              </li>
            </ul>
            <p className="text-white">
              Don&apos;t miss out on this opportunity to revolutionize your
              fitness journey. Join Females CrossFit today and unleash your full
              potential!
            </p>
            <ApplyForClassForm />
          </motion.div>
          <div className="hidden w-full md:flex justify-center items-center">
            <video
              className="w-full"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
            >
              <source src="/femaleonly.mp4" type="video/mp4" />
              <track
                src="/femaleonly.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
