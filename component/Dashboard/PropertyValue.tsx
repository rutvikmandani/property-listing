"use client";
import React from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import { IoLocationOutline } from "react-icons/io5";

const PropertyValue = () => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 text-black ${styles.calContainer} `}
    >
      <div className="bg-[#e5edfb] min-h-[275px] md:w-[33.33%] w-full border-2 border-[#93B1E5] flex items-center p-4  justify-center rounded-[3px] relative">
        <img alt="mortgageCal" src={"/images/mortgageCal.webp"} className="" />
      </div>
      <div className="flex flex-col items-start w-full">
        <h3 className="text-[27px] font-medium">WHAT'S MY HOME WORTH?</h3>
        <h6 className="text-[16px] font-semibold pb-2">
          Type Your Address Below To Find Out How Much Your Property Is Worth
        </h6>
        <div className="flex gap-2 flex-col md:flex-row md:gap-0  w-full">
          <div className="flex items-center  w-full pl-2 border-2 border-lightBlue rounded-tl-lg rounded-bl-lg">
            <IoLocationOutline size={25} color="#d62340" />
            <input
              type="text"
              id="placeSearch"
              name="address"
              placeholder="Type your address..."
              value=""
              onChange={() => null}
              className=" w-full py-4 pl-2 focus:outline-none"
            />
          </div>
          <button className="bg-lightBlue rounded-tr-lg rounded-br-lg py-3 text-white w-full md:max-w-[350px]">
            Show my property’s value
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyValue;
