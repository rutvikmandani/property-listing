"use client";
import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import { EMAIL, MOBILE_NUMBER } from "@/lib/constant";

const Footer = () => {
  const soldPhotos = [
    "/images/sold/01.webp",
    "/images/sold/02.webp",
    "/images/sold/03.webp",
    "/images/sold/04.webp",
    "/images/sold/05.webp",
    "/images/sold/06.webp",
  ];
  return (
    <footer className="bg-black text-white text-[14px] md:text-[16px] font-medium">
      <div className=" relative">
        <div className="px-3">
          <Swiper
            breakpoints={{
              220: { slidesPerView: 2, spaceBetween: 0 },
              440: { slidesPerView: 4, spaceBetween: 0 },
              900: { slidesPerView: 6, spaceBetween: 0 },
            }}
            modules={[Navigation, Pagination]}
            pagination={false}
          >
            {soldPhotos.map((property: any) => (
              <SwiperSlide>
                <img src={property} className="w-full" alt="sold img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute bg-white h-[50%] w-full top-0">
          asdasd asdas asdas
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10  grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-start space-y-4">
          <div className="text-2xl font-bold">
            <span className="text-white">YOUR</span>{" "}
            <span className="text-red-500">LOGO</span>
          </div>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaXTwitter className="cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaYoutube className="cursor-pointer hover:text-gray-400" />
            <FaWhatsapp className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>Mississauga, Ontario, L4T 0A7</span>
          </div>
          <a href="tel:+10000000000" className="flex items-center space-x-2">
            <FaPhone className="text-gray-400" />
            <span>{MOBILE_NUMBER} (O)</span>
          </a>
          <a
            href="mailto:agent@agent.com"
            className="flex items-center space-x-2"
          >
            <FaEnvelope className="text-gray-400" />
            <span>{EMAIL}</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2 flex flex-col">
            <Link href="/property-list">Home</Link>
            <Link href="/property-list">Residential</Link>
            <Link href="/property-list">Condo</Link>
            <Link href="/property-list">Commercial</Link>
          </div>
          <div className="space-y-2">
            <p>City of Brampton</p>
            <p>City of Guelph</p>
            <p>City of Toronto</p>
            <p>City of Hamilton</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 px-6 text-center text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>Terms of Service | Privacy Policy | CRM Login</p>
          <p>©2025 www.realtor.agentroof.ca. All rights reserved</p>
        </div>
        <div className="mt-3">
          <p className="text-white font-semibold">
            AGENT<span className="text-red-500">ROOF</span>
          </p>
          <p>Designed and Developed by Agentroof</p>
          <p>MLS® trusted listings from Toronto Regional Real Estate Board</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
