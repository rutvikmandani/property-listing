import React from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import propertyDetails from "@/public/propertyDetail.json";
import PropertyImages from "./PropertyImages";
import PropertyDetails from "./PropertyDetails";
import SimilarProperties from "./SimilarProperties";
import properties from "@/public/propertyData.json";
import AskAboutProperty from "./AskAboutProperty";

const DetailPageContent = () => {
  console.log("propertyDetail", propertyDetails);

  const propertyDetail = propertyDetails?.data;
  const soldDetail = propertyDetails?.sold_history;
  const imgList = propertyDetail?.images;

  return (
    <div
      className={`${styles.innerContent} py-[50px] flex gap-4 text-black flex-col md:flex-row text-[#212529]`}
    >
      <div className="w-[100%] md:w-[64%]">
        <PropertyImages imgList={imgList} />
        <PropertyDetails />
        <div className=" bg-[#F8F8F8] mt-4 rounded p-4 ">
          <h3 className="text-[20px] font-bold mb-4">Similar Properties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-[#F8F8F8] gap-4">
            {properties.map((a, index) => (
              <div
                key={index}
                className="bg-white p-[15px] shadow-md rounded-xl overflow-hidden w-full md:max-w-[260px] "
              >
                <SimilarProperties {...a} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[100%] md:w-[36%]">
        <AskAboutProperty />
      </div>
    </div>
  );
};

export default DetailPageContent;
