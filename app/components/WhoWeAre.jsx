import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section
      id="whoweare"
      className=" relative bg-black flex flex-col mb-20 pt-20"
    >
      <h1 className="text-white text-[50px] md:text-[120px] italic font-bold absolute top-[8%] md:top-[5%] xl:top-[10%] right-[10%]">
        01
      </h1>
      <div className="w-full flex flex-col items-center justify-center p-2 pb-[50px]">
        <h1 className="text-[#1c1c1c] absolute text-6xl lg:text-8xl font-bold">
          WHO WE ARE
        </h1>
        <h1 className="text-white text-4xl font-bold z-10 pt-16">WHO WE ARE</h1>
      </div>
      <div className="flex flex-col lg:flex-row h-full w-full items-center justify-center p-10">
        <div className="flex items-center justify-center w-full m-5 lg:w-[50%]">
          <Image
            src="/images/image1.jpg"
            width={800}
            height={800}
            alt="Who we are"
          />
        </div>
        <div className="w-full sm:w-[80%] lg:w-[50%] md:p-10 space-y-4">
          <p className="text-white text-xl">
            At Fitness World Belgrade we believe Crossfitters come in all shapes
            and sizes, we are all on a journey towards our own personal best
            health and fitness levels. A journey that makes us better as
            athletes, friends and people.
          </p>
          <p className="text-white text-xl">
            Our facility is unlike any other gym you`ve been to before. We pride
            ourselves not only in providing world class CrossFit training, but
            we also believe in creating a motivating and dynamic environment. We
            are the community dedicated to your human evolution, one workout at
            a time.
          </p>
          <p className="text-white text-xl">
            Come in for a free trial class! Lose some body fat, gain some
            friends, and get fit for life!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
