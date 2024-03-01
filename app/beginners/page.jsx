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
            <h1 className="text-4xl text-white mb-10">CROSSFIT BEGINNERS</h1>
            <h3 className="text-white mb-3">
              Are you new to CrossFit and eager to take your fitness journey to
              the next level? Step into the world of CrossFit Beginners, where
              we cater specifically to newcomers like you, helping you build a
              strong foundation of strength, flexibility, and coordination. Our
              team of skilled coaches is here to guide you through each step of
              your journey, ensuring you feel confident and empowered every time
              you step into the gym.
            </h3>
            <ul className="list-disc text-white p-3">
              <li className="mb-2">
                Choose Your Package: Select from our range of lesson packages
                tailored to fit your schedule and preferences.
              </li>
              <li className="mb-2">
                Reserve Your Spot: Secure your place in our upcoming classes
                today, either online or by reaching out to our team directly.
              </li>
              <li className="mb-2">
                Get Ready to Train: Come prepared to sweat, learn, and challenge
                yourself in our state-of-the-art facility, surrounded by
                like-minded individuals on their own fitness journey.
              </li>
            </ul>
            <p className="text-white">
              Ready to get started? Don&apos;t let the opportunity to transform
              your CrossFit experience pass you by. Take the first step towards
              unlocking your full potential by booking your CrossFit Beginners
              sessions today. Together, we&apos;ll help you build the strength,
              agility, and confidence you need to conquer any challenge that
              comes your way. See you in class!
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
              <source src="/beginnners.mp4" type="video/mp4" />
              <track
                src="/beginnners.mp4"
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
