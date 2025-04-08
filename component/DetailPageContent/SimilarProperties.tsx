"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import { ImLocation } from "react-icons/im";
import { FaBed, FaBath } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const SimilarProperties = ({
  images,
  price,
  address,
  beds,
  baths,
  sqft,
  listingKey,
}: any) => {
  const handleRedirect = () => {};

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        observeParents={true}
        observer={true}
        navigation={{
          nextEl: ".homes-next",
          prevEl: ".homes-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        className={styles.imgSwiperContainer}
      >
        {images?.length !== 0 ? (
          images.slice(0, 4).map((img: any, index: number) => (
            <SwiperSlide key={img + index}>
              <div className=" w-full h-full" onClick={handleRedirect}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide key={"static"}>
            <div className="w-full h-full" onClick={handleRedirect}>
              <img
                src={"/images/slider-properties-2.jpg"}
                className={styles.image}
                alt={`Image`}
              />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      <div className="flex bg-lightBlue gap-2 p-3 items-center ">
        <ImLocation size={24} color="white" />
        <div className="text-white truncate text-[14px]">{address ?? "-"}</div>
      </div>
      <div className="flex items-center justify-between text-[14px] py-3 border-b border-[#212529]">
        <div className="flex flex-col gap-1">
          <div>Bed</div>
          <div className="flex gap-2 items-center">
            <FaBed size={14} color="#7f9aee" />
            {beds}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>Bath</div>
          <div className="flex gap-2 items-center">
            <FaBath size={14} color="#7f9aee" />
            {baths}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>Sqft</div>
          <div className="flex gap-2 items-center">
            <FaRepeat size={14} color="#7f9aee" />
            {sqft ?? "--"}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>Price</div>
          <div className="flex gap-2 items-center">{price ?? 0}</div>
        </div>
      </div>
      <div className="py-3 text-[16px] font-normal flex flex-col gap-1 items-start">
        <p>MLS&reg; {listingKey}</p>
        <p>{"TEK REALTY INC."}</p>
      </div>
      <Link
        href="/property-detail"
        className="bg-[#000] text-white p-2 flex justify-center rounded cursor-pointer"
      >
        READ MORE
      </Link>
    </>
  );
};

export default SimilarProperties;
