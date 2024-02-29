"use client";
import React from "react";
import ApplyForClassForm from "../components/ApplyForClassForm";

const page = () => {
  return (
    <div className="w-full h-auto bg-black ">
      <div className="w-full h-full mt-20">
        <div className="flex flex-row">
          <div className="w-full p-5">
            <h1 className="text-4xl text-white mb-10">CROSSFIT-GYMNASTICS</h1>
            <h3 className="text-white mb-3">
              Are you ready to elevate your CrossFit training? Join our CrossFit
              Gymnastics lessons to unlock new dimensions of strength, agility,
              and skill. Our expert coaches lead dynamic sessions tailored to
              all levels, from beginners mastering the basics to experienced
              athletes refining their skills. With personalized instruction,
              comprehensive training, and a supportive atmosphere, you&apos;ll
              conquer gymnastics challenges within the CrossFit framework. Book
              your lessons now to begin your CrossFit Gymnastics journey swiftly
              and easily.
            </h3>
            <ul className="list-disc text-white p-3">
              <li className="mb-2">
                Choose Your Package: Select from our range of lesson packages
                tailored to your schedule and preferences.
              </li>
              <li className="mb-2">
                Reserve Your Spot: Secure your place in our upcoming classes by
                booking online or contacting us directly.
              </li>
              <li className="mb-2">
                Get Ready to Train: Arrive at our state-of-the-art facility
                prepared to sweat, learn, and grow with the guidance of our
                dedicated coaches.
              </li>
            </ul>

            <p className="text-white">
              {" "}
              Don&apos;t miss out on this opportunity to revolutionize your
              CrossFit training. Book your CrossFit Gymnastics lessons today and
              unleash your full potential!
            </p>
            <ApplyForClassForm />
          </div>
          <div className="hidden w-full md:flex justify-center items-center">
            <video
              className="w-full"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
            >
              <source src="/gymnasticsvideo.mp4" type="video/mp4" />
              <track
                src="/gymnasticsvideo.mp4"
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
