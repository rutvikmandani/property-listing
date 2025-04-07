import { EMAIL, MOBILE_NUMBER } from "@/lib/constant";
import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";

const GetContactDetails = () => {
  return (
    <>
      <div className="flex flex-col md:p-6 items-center text-white">
        <h3 className={`${styles.z2Index} text-lightBlue`}>Realtor</h3>{" "}
        <h6 className={`${styles.z2Index}`}>Designation</h6>
      </div>
      <div
        className={`border-0 md:border-r ${styles.z2Index} md:my-4  border-white`}
      />{" "}
      <div className="flex md:flex-col gap-4 md:gap-0 md:p-6 flex-wrap items-center justify-center">
        <a href="tel:+10000000000" className="flex items-center text-white space-x-2">
          <FaPhone color={"#7f9aee"} className={`text-gray-400 ${styles.z2Index}`} />
          <span className={`${styles.z2Index}`}>{MOBILE_NUMBER} (O)</span>
        </a>
        <a
          href="mailto:agent@agent.com"
          className={`flex items-center space-x-2 text-white ${styles.z2Index}`}
        >
          <FaEnvelope
            color={"#7f9aee"}
            className={`text-gray-400 ${styles.z2Index}`}
          />
          <span className={`${styles.z2Index}`}>{EMAIL}</span>
        </a>
      </div>
      <div
        className={`border-0 md:border-r ${styles.z2Index} md:my-4  border-white`}
      />
      <div className="flex pl-10 items-center">
        <div
          className={`${styles.z2Index} hidden md:block transform rotate-[270deg]`}
        >
          WE ARE
        </div>
        <img
          src="/images/logo.webp"
          className={`w-[70%] h-[70%] ${styles.z2Index}`}
          alt="logo"
        />
      </div>
    </>
  );
};

export default GetContactDetails;
