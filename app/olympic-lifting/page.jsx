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
              CROSSFIT OLYMPIC LIFTING
            </h1>
            <h3 className="text-white mb-3">
              Ready to take your CrossFit training to new heights? Join our
              CrossFit Olympic Lifting classes and discover the power and
              precision of Olympic-style weightlifting. Our experienced coaches
              will guide you through each lift, helping you master technique,
              build strength, and unleash your full athletic potential. Whether
              you&apos;re a beginner looking to learn the basics or an
              experienced lifter aiming to refine your skills, our tailored
              sessions cater to all levels.
            </h3>
            <ul className="list-disc text-white p-3">
              <li className="mb-2">
                Choose Your Package: Select from our range of lesson packages
                tailored to your schedule and preferences.
              </li>
              <li className="mb-2">
                Reserve Your Spot: Secure your place in our upcoming classes
                today, either online or by reaching out to our team directly.
              </li>
              <li className="mb-2">
                Get Ready to Lift: Arrive at our state-of-the-art facility ready
                to push your limits, under the guidance of our dedicated
                coaches.
              </li>
            </ul>
            <p className="text-white">
              Don&apos;t miss out on the chance to revolutionize your CrossFit
              experience. Book your CrossFit Olympic Lifting sessions today and
              unleash your full potential on the platform!
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
              <source src="/olympiclifting.mp4" type="video/mp4" />
              <track
                src="/olympiclifting.mp4"
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
