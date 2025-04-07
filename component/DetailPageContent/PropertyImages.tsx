"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";

import "swiper/css";
import "swiper/css/pagination";

const PropertyImages = ({ imgList }: any) => {
  return (
    <Swiper
      breakpoints={{
        420: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 1, spaceBetween: 0 },
        1024: { slidesPerView: 1, spaceBetween: 0 },
      }}
      modules={[Navigation, Pagination]}
      pagination={false}
    >
      {imgList.map((property: any, index: number) => (
        <SwiperSlide key={index}>
          <img
            src={property?.image_url}
            className={`w-full h-[340px] md:h-[490px] rounded ${styles.detailPageImg}`}
            alt="sold img"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PropertyImages;
