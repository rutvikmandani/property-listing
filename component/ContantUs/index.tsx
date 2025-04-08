"use client";
import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import { EMAIL, MOBILE_NUMBER } from "@/lib/constant";
import InputField from "../UIFields/InputField";
import TextareaField from "../UIFields/TextareaField";
import UserType from "../Dashboard/UserType";

const ContactUs = () => {
  return (
    <div
      className={`${styles.mainContainer} !bg-white mt-[54px] md:mt-[107px]`}
    >
      <div
        className={`${styles.innerContent} w-full flex-col md:flex-row text-[#212529]`}
      >
        <div className="bg-neutral py-[75px] text-text-primary flex align-center justify-center text-xl sm:text-2xl font-semibold">
          Contact Me
        </div>
        <div className="flex justify-center mb-[-60px] transform -translate-y-1/2 z-1  mb-4">
          <img
            src="/images/realtor.webp"
            alt="Realtor"
            className="w-[120px] h-[120px]  rounded-full border-2 bg-cover bg-white border-black"
          />
        </div>
        <div className="flex justify-center flex-col items-center  mb-4">
          <h2 className="text-xl font-bold text-[24px]">Realtor</h2>
          <p className=" text-[18px]">Designation</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="px-6 max-w-5xl">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-bold text-[16px] mb-8">
              <a
                href="tel:+10000000000"
                className="flex items-center space-x-2"
              >
                <FaPhone
                  color={"var(--color-primary)"}
                  className="text-text-tertiary z-1 "
                />
                <span className="z-1 ">{MOBILE_NUMBER} (O)</span>
              </a>
              <a
                href="tel:+10000000000"
                className="flex items-center space-x-2"
              >
                <FaPhone
                  color={"var(--color-primary)"}
                  className="text-text-tertiary z-1 "
                />
                <span className="z-1 ">{MOBILE_NUMBER} (O)</span>
              </a>
              <a
                href="mailto:agent@agent.com"
                className="flex items-center space-x-2 z-1"
              >
                <FaEnvelope
                  color={"var(--color-primary)"}
                  className="text-text-tertiary z-1 "
                />
                <span className="z-1 ">{EMAIL}</span>
              </a>
              <a
                href="mailto:agent@agent.com"
                className="flex items-center space-x-2 z-1"
              >
                <FaEnvelope
                  color={"var(--color-primary)"}
                  className="text-text-tertiary z-1 "
                />
                <span className="z-1 ">{EMAIL}</span>
              </a>
            </div>
            <div className="flex flex-col gap-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  type="text"
                  placeholder="Name"
                  onChange={() => {}}
                />
                <InputField
                  type="text"
                  placeholder="Email Address"
                  onChange={() => {}}
                />
                <InputField
                  type="text"
                  placeholder="(555) 555-5555"
                  onChange={() => {}}
                />
              </div>
              <div>
                <TextareaField placeholder="Message" onChange={() => {}} />

                <p className="text-xs">
                  By submitting this form, you are providing express consent to
                  receive commercial electronic messages from
                  www.realtor.agentroof.ca. You may unsubscribe at any time.
                </p>
              </div>

              <UserType />

              <button className="bg-lightBlue flex items-center gap-2 rounded justify-center py-1.5 text-white w-full md:max-w-[215px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
