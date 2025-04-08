import DetailPageContent from "@/component/DetailPageContent";
import React, { Suspense } from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";

export default function Preview() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className={`${styles.mainContainer} !bg-white mt-[54px] md:mt-[107px] px-6`}
      >
        <DetailPageContent />
      </div>
    </Suspense>
  );
}
