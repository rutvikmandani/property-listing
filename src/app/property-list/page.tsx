import FindMyProperty from "@/component/Dashboard/FindMyProperty";
import React from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import properties from "@/public/propertyData.json";
import SimilarProperties from "@/component/DetailPageContent/SimilarProperties";

const Listing = () => {
  return (
    <div className={`${styles.mainContainer} !bg-[#F5F5F5]`}>
      <div
        className={`${styles.innerContent} w-full flex-col md:flex-row text-[#212529]`}
      >
        <FindMyProperty />
        <h3 className="text-[27px] font-normal text-black pb-4">
          Residential Property ListingsMap
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-20 lg:grid-cols-4 bg-[#F8F8F8] gap-4">
          {[
            ...properties,
            ...properties,
            ...properties,
            ...properties,
            ...properties,
          ].map((a, index) => (
            <div
              key={index}
              className="bg-white p-[15px] shadow-md rounded-xl overflow-hidden w-full  "
            >
              <SimilarProperties {...a} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
