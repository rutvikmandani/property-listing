import DetailPageContent from "@/component/DetailPageContent";
import React from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";

export default function Preview() {
  return (
    <div className={`${styles.mainContainer} !bg-white`}>
      <DetailPageContent />
    </div>
  );
}
