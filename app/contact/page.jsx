"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Page = () => {
  const [isSubmited, setIsSubmited] = useState(true);

  const submitHandle = () => {
    setIsSubmited(!isSubmited);
    console.log(isSubmited);
  };
  return (
    <section className="h-[100vh] flex flex-col sm:flex-row items-center justify-evenly m-10">
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full mx-auto mt-20 sm:mt-10 p-6 bg-white rounded-lg shadow-md "
      >
        {isSubmited ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#1c1c1c] transition duration-300 ease-in-out"
                onClick={submitHandle}
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <p>Thank you for sending a message</p>
            <p>We will get back to you shortly!</p>
          </div>
        )}
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-white w-full flex items-center justify-center"
      >
        <ul className="flex flex-col items-start justify-center">
          <li>
            <p className="p-2 hover:text-[#1c1c1c] hover:cursor-pointer text-xl">
              Email: hello@fitnessworld@gmail.com
            </p>
          </li>
          <li>
            <p className="p-2 hover:text-[#1c1c1c] hover:cursor-pointer  text-xl">
              Number: (+381) 11 5555 555
            </p>
          </li>
          <li>
            <p className="p-2 hover:text-[#1c1c1c] hover:cursor-pointer  text-xl">
              Location: 23 Terazije Belgrade, Serbia
            </p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Page;
