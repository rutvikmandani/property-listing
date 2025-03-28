import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import properties from "@/public/propertyData.json";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import SimilarProperties from "../DetailPageContent/SimilarProperties";
import Link from "next/link";

interface Property {
  title: string;
  sqft: number | string;
  beds: number | string;
  baths: number;
  images: string[];
  address: string;
  price: string;
  listingKey: string;
  transactionType: string;
  isFavorite: boolean;
  createdAt: string;
}

const FeatureListing = () => {
  const getData = (data: Property, index: number) => {
    return (
      <SwiperSlide>
        <div
          key={index}
          className={`w-[100%] max-w-[440px] relative shrink-0 bg-white shadow-lg rounded-lg overflow-hidden p-[15px] text-[#212529]`}
        >
          <SimilarProperties {...data} index={index} />
        </div>
      </SwiperSlide>
    );
  };

  return (
    <div className="bg-black text-center py-[25px] px-4 ">
      <h3 className="text-[27px] font-normal text-white">Featured Listings</h3>
      <Link
        href="/property-list"
        className="bg-[#000] text-white p-2 flex justify-center rounded cursor-pointer"
      >
        VIEW ALL
      </Link>

      <Swiper
        breakpoints={{
          420: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        modules={[Navigation, Pagination]}
        className={styles.swiperContainer}
        pagination={false}
      >
        {properties.map((property: Property, index: number) =>
          getData(property, index)
        )}
      </Swiper>
      <div className="flex gap-5 pt-4 justify-center items-center">
        <button className="prev-btn cursor-pointer bg-white p-2 rounded">
          <FaArrowLeft color={"#000"} />
        </button>
        <button className="next-btn cursor-pointer bg-white p-2 rounded">
          <FaArrowRight color={"#000"} />
        </button>
      </div>
    </div>
  );
};

export default FeatureListing;
