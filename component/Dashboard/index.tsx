import React from "react";
import ContentWrapper from "../ContentWrapper";
import GetContactDetails from "../ContentWrapper/GetContactDetails";
import ConsultationContainer from "./ConsultationContainer";
import FeatureServices from "./FeatureServices";
import FeatureListing from "./FeatureListing";
import FeatureNeighborhood from "./FeatureNeighborhood";
import PropertyValue from "./PropertyValue";
import FindMyProperty from "./FindMyProperty";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative">
        <div
          className={`max-h-[310px] overflow-hidden sm:max-h-[400px] md:max-h-[600px] lg:max-h-[100vh]  ${styles.container}`}
        >
          <div className={styles.imgContainer} />
          <ContentWrapper />
        </div>
      </div>
      <div className="flex gap-2 pt-2 relative md:hidden h-max w-full items-center bg-black justify-center flex-col mt-[-6px]">
        <GetContactDetails />
      </div>
      <ConsultationContainer />
      <FeatureServices />
      <FeatureListing />
      <FeatureNeighborhood />
      <PropertyValue />
      <FindMyProperty />
    </div>
  );
};

export default Dashboard;
