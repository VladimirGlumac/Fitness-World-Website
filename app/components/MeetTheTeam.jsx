import Image from "next/image";
import React from "react";

const teamData = [
  {
    id: 1,
    name: "Mark Thompson",
    image: "/images/instructorsimages/image1.jpg",
    role: "Founder & Owner",
  },
  {
    id: 2,
    name: "Jessica Martinez",
    image: "/images/instructorsimages/image2.jpg",
    role: "Coach",
  },
  {
    id: 3,
    name: "David Smith",
    image: "/images/instructorsimages/image3.jpg",
    role: "Coach",
  },
  {
    id: 4,
    name: "Samantha Clark",
    image: "/images/instructorsimages/image4.jpg",
    role: "Coach",
  },
  {
    id: 5,
    name: "Jason White",
    image: "/images/instructorsimages/image5.jpg",
    role: "Coach",
  },
  {
    id: 6,
    name: "Chris Taylor",
    image: "/images/instructorsimages/image6.jpg",
    role: "Coach",
  },
  {
    id: 7,
    name: "Jennifer Lee",
    image: "/images/instructorsimages/image7.jpg",
    role: "Coach",
  },
  {
    id: 8,
    name: "Michael Brown",
    image: "/images/instructorsimages/image8.jpg",
    role: "Coach",
  },
];

const MeetTheTeam = () => {
  return (
    <section
      id="meettheteam"
      className="relative bg-center bg-no-repeat bg-cover w-full flex flex-col mb-20 pt-20"
      style={{ backgroundImage: "url('/images/image3.png')" }}
    >
      <h1 className="text-white text-[50px] md:text-[90px] lg:text-[120px] italic font-bold absolute top-[5%] left-[5%] md:top-[10%] xl:top-[10%] ">
        02
      </h1>
      <div className="w-full flex flex-col items-center justify-center p-2 pb-[100px]">
        <h1 className="text-[#1c1c1c] absolute text-4xl sm:text-6xl lg:text-8xl font-bold">
          MEET THE TEAM
        </h1>
        <h1 className="text-white text-2xl sm:text-4xl font-bold z-10 pt-10 md:pt-16">
          MEET THE TEAM
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 h-full w-full items-center justify-center p-10 gap-8">
        {teamData.map(({ id, name, image, role }) => {
          return (
            <div
              key={id}
              className="w-full h-[250px]  sm:w-[250px] sm:h-[250px] flex flex-col items-center justify-center relative"
            >
              <div className="h-full">
                <Image
                  src={image}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="coach"
                />
              </div>
              <div className=" opacity-0 hover:opacity-100 flex flex-col items-center justify-center absolute w-full h-full hover:bg-yellow-400 hover:shadow-xl z-10 transition duration-300 ease-in-out">
                <h2 className="text-2xl pb-3">{name}</h2>
                <div className="w-[80%] h-[1px] bg-black rounded-full"></div>
                <p className="pt-3">{role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MeetTheTeam;
