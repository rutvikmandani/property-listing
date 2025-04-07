"use client";
export const dynamic = "force-dynamic";

import FindMyProperty from "@/component/Dashboard/FindMyProperty";
import React from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import properties from "@/public/propertyData.json";
import SimilarProperties from "@/component/DetailPageContent/SimilarProperties";
import { useRouter, useSearchParams } from "next/navigation";
import { IoMdClose } from "react-icons/io";

const PropertyListingPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const listingType = searchParams.get("listingType");
  const cityName = searchParams.get("cityName");

  const onFilterRemove = () => {
    router.replace(`?`, { scroll: false });
  };
  return (
    <div
      className={`${styles.mainContainer} !bg-neutral-light mt-[54px] md:mt-[107px] px-6`}
    >
      <div
        className={`${styles.innerContent} w-full flex-col md:flex-row text-[#212529]`}
      >
        <FindMyProperty />
        {(listingType || cityName) && (
          <div
            className={`border-[#bec0c4] rounded-lg border p-2 max-w-max flex items-center gap-2 mb-[25px]`}
          >
            {`${cityName ? cityName : `Property Type - ${listingType}`}`}
            <IoMdClose
              onClick={onFilterRemove}
              className="cursor-pointer"
              color={"red"}
            />
          </div>
        )}
        <h3 className="text-[27px] capitalize font-normal text-black pb-4">
          {`${listingType ? listingType?.toLowerCase() : ""} Property Listings`}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-20 lg:grid-cols-4 bg-neutral gap-4">
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

export default PropertyListingPageContent;
