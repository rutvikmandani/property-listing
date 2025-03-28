import React from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import GetContactDetails from "./GetContactDetails";

const ContentWrapper = () => {
  return (
    <>
      <div className="absolute w-full h-full z-3 flex   pr-20 text-white">
        <div className="w-[50%] relative">
          <img
            src="/images/realtor.webp"
            alt="banner"
            className="absolute w-[140px] sm:w-[60%] md:mb-[96px] bottom-0 right-[10%]"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center mt-[150px]">
          <h2 className="font-bold text-[14px] md:text-[24px] lg:text-[40px]">
            WHERE DREAMS BECOME REALITY
          </h2>
          <h3 className="font-semibold text-[10px] md:text-[20px] lg:text-[30px]">
            BUY, SELL AND INVEST WITH REALTOR
          </h3>
        </div>
      </div>
      <div
        className={`absolute hidden md:block  bottom-0 w-full items-center text-white l-0 z-3 ${styles.bannerWrapper}`}
      >
        <div
          className={`flex max-w-full flex-col md:flex-row lg:max-w-[918px]  ${styles.innerBanner}`}
        >
          <GetContactDetails />
        </div>
      </div>
    </>
  );
};

export default ContentWrapper;
