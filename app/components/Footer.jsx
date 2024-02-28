import React from "react";

function Footer() {
  return (
    <footer className="w-full h-auto bg-yellow-400 flex flex-col md:flex-row items-center justify-evenly p-2 xl:p-10">
      <div className="w-full h-auto pb-2">
        <ul className="flex flex-col items-start justify-center">
          <li>
            <p className="p-2 hover:text-[#1c1c1c] hover:cursor-pointer text-sm sm:text-md">
              hello@fitnessworld@gmail.com
            </p>
          </li>
          <li>
            <p className="p-2 hover:text-[#1c1c1c] hover:cursor-pointer">
              (+381) 11 5555 555
            </p>
          </li>
          <li>
            <p className="p-2 hover:text-[#1c1c1c] hover:cursor-pointer">
              23 Terazije Belgrade, Serbia
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full h-auto pb-2">
        <ul className="flex flex-col items-start justify-center">
          <li>
            <p className="xl:p-1 hover:text-[#1c1c1c] hover:cursor-pointer">
              Careers
            </p>
          </li>
          <li>
            <p className="xl:p-1 hover:text-[#1c1c1c] hover:cursor-pointer">
              Contact
            </p>
          </li>
          <li>
            <p className="xl:p-1 hover:text-[#1c1c1c] hover:cursor-pointer">
              Privacy Policy
            </p>
          </li>
          <li>
            <p className="xl:p-1 hover:text-[#1c1c1c] hover:cursor-pointer">
              Terms & Conditions
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full h-auto">
        <form
          className="flex flex-col items-center
         justify-center"
        >
          <label htmlFor="submit" className="text-sm sm:text-xl font-bold">
            SUBSCRIBE TO OUR NEWSLETTER
          </label>
          <div className="w-full flex flex-row p-2">
            <input type="email" className="w-full mr-1" />
            <button className="bg-black text-white p-2 hover:bg-[#1c1c1c] transition duration-300 ease-in-out">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
