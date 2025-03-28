"use client";

import React from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import ConsultationContainer from "@/component/Dashboard/ConsultationContainer";
import FeatureServices from "@/component/Dashboard/FeatureServices";
import FeatureListing from "@/component/Dashboard/FeatureListing";
import FeatureNeighborhood from "@/component/Dashboard/FeatureNeighborhood";
import PropertyValue from "@/component/Dashboard/PropertyValue";
import ContentWrapper from "@/component/ContentWrapper";
import FindMyProperty from "@/component/Dashboard/FindMyProperty";
import GetContactDetails from "@/component/ContentWrapper/GetContactDetails";

const RealtorLandingPage: React.FC = () => {
  return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        <div className="relative">
          <div
            className={`max-h-76 overflow-hidden sm:max-h-[400px] md:max-h-[600px] lg:max-h-[100vh]  ${styles.container}`}
          >
            <ContentWrapper />
          </div>
        </div>
        <div className="flex gap-2 pt-2 md:hidden h-max w-full items-center bg-black justify-center flex-col mt-[-6px]">
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

export default RealtorLandingPage;
