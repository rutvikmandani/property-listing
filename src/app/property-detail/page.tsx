import DetailPageContent from "@/component/DetailPageContent";
import React from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";

export default function Preview() {
  return (
    <div className={`${styles.mainContainer} !bg-white mt-[54px] md:mt-[107px] px-6`}>
      <DetailPageContent />
    </div>
  );
}
