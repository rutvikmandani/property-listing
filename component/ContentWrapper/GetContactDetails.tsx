import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const GetContactDetails = () => {
  return (
    <>
      <div className="flex flex-col md:p-6 items-center">
        <h3 className="z-1 text-[#7f9aee]">Realtor</h3>{" "}
        <h6 className="z-1">Designation</h6>
      </div>
      <div className="border-0 md:border-r z-1 md:my-4  border-white" />
      <div className="flex md:flex-col gap-4 md:gap-0 md:p-6 flex-wrap items-center justify-center">
        <a href="tel:+10000000000" className="flex items-center space-x-2">
          <FaPhone color={"#7f9aee"} className="text-gray-400 z-1 " />
          <span className="z-1 ">+1 (000) 000-0000 (O)</span>
        </a>
        <a
          href="mailto:agent@agent.com"
          className="flex items-center space-x-2 z-1"
        >
          <FaEnvelope color={"#7f9aee"} className="text-gray-400 z-1 " />
          <span className="z-1 ">agent@agent.com</span>
        </a>
      </div>
      <div className="border-0 md:border-r z-1 md:my-4  border-white" />
      <div className="flex pl-10 items-center">
        <div className="z-1 hidden md:block transform rotate-[270deg]">WE ARE</div>
        <img src="/images/logo.webp" className="w-[70%] h-[70%] z-1" alt="logo" />
      </div>
    </>
  );
};

export default GetContactDetails;
