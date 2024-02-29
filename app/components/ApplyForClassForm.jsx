"use client";
import React, { useState } from "react";
import animationData from "../../public/animation/okayanimation.json";
import dynamic from "next/dynamic";

const ApplyForClassForm = () => {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  const currentDate = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    date: currentDate,
    name: "",
    email: "",
    package: "FLEXI £ 99.99 / month",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(true);
  };

  const handleConfirm = () => {
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="mt-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Thank you for your purchase!
        </h2>
        <div>
          <Lottie animationData={animationData} loop={false} className="h-40" />
        </div>
      </div>
    );
  }

  if (confirmation) {
    return (
      <div className="mt-8 bg-yellow-400 flex flex-col items-center justify-center rounded-md p-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Confirm Your Selection</h2>
          <p className="text-black mb-4">First Lesson : {formData.date}</p>
          <p className="text-black mb-4">Name: {formData.name}</p>
          <p className="text-black mb-4">Email: {formData.email}</p>
          <p className="text-black mb-4">Package: {formData.package}</p>
          <button
            onClick={handleConfirm}
            className="bg-black hover:bg-[#1c1c1c] text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out w-full"
          >
            Confirm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-yellow-400 p-5 rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full mx-auto"
      >
        <h2 className="text-black mb-2 w-full text-xl text-center pb-4">
          Please fill out the form below to apply for our classes:
        </h2>
        <div className="mb-4 w-full">
          <label htmlFor="date" className="block text-black">
            Starting Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={currentDate}
            className="rounded-md border-yellow-400 border w-full py-2 px-3 text-black bg-white"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="name" className="block text-black">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-md border-yellow-400 border w-full py-2 px-3 text-black bg-white"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block text-black">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-md border-yellow-400 border w-full py-2 px-3 text-black bg-white"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="package" className="block text-black">
            Choose Your Package:
          </label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="rounded-md border-yellow-400 border w-full py-2 px-3 text-black bg-white"
            required
          >
            <option value="FLEXI £ 99.99 / month">FLEXI £ 99.99 / month</option>
            <option value="OFF-PEAK £ 149.99 / month">
              OFF-PEAK £ 149.99 / month
            </option>
            <option value="ALL ACCES £ 199.99 / month">
              ALL ACCES £ 199.99 / month
            </option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-black hover:bg-[#1c1c1c] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out w-full"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ApplyForClassForm;
