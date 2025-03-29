"use client";

import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import { MdWifiCalling3, MdOutgoingMail } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";
import { EMAIL, MOBILE_NUMBER } from "@/lib/constant";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const getContactSection = () => {
    return (
      <div className="flex border-b pb-3 px-3 border-white flex flex-col md:flex-row gap-2">
        <a
          className="flex items-center pr-4 text-[17px]  font-medium gap-1"
          href="tel:+10000000000"
          id="header-phone"
        >
          <MdWifiCalling3 color={"#7f9aee"} />
        {MOBILE_NUMBER}
        </a>
        <a
          className="flex items-center text-[17px] font-medium pr-4  gap-1"
          href="mailto:agent@agent.com"
          id="header-mail"
        >
          <MdOutgoingMail color={"#7f9aee"} />
          {EMAIL}
        </a>
        <div className="text-[14px] border border-[#7f9aee] font-medium px-2 py-1 rounded">
          REQUEST A CALL
        </div>
      </div>
    );
  };

  const listMenuTabs = [
    "RESIDENTIAL",
    "CONDO",
    "COMMERCIAL",
    "OPEN HOUSES",
    "PRE-CONSTRUCTION",
  ];

  const getTabSection = () => {
    return (
      <>
        <li className="relative group">
          <button className="flex items-center gap-1 w-full flex items-center justify-center">
            LISTING <MdOutlineArrowDropDown color={"#7f9aee"} />
          </button>

          {/* Wrapper for dropdown to manage spacing on hover */}
          <div className="h-0 group-hover:h-auto transition-all duration-300 overflow-hidden">
            <ul className="md:absolute left-0 mt-2 cursor-pointe flex flex-col w-full md:w-[200px]  bg-blue-500 text-white rounded-lg shadow-lg opacity-0 scale-y-0 origin-top transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-y-100">
              {listMenuTabs.map((a) => (
                <Link href="/property-list" key={a} className="px-4 py-2">
                  {a}
                </Link>
              ))}
            </ul>
          </div>
        </li>
        <li className="relative group">
          <button className="flex items-center gap-1 w-full flex items-center justify-center">
            CONTACT <MdOutlineArrowDropDown color={"#7f9aee"} />
          </button>

          {/* Wrapper for dropdown to manage spacing on hover */}
          <div className="h-0 group-hover:h-auto transition-all duration-300 overflow-hidden">
            <ul className="md:absolute left-0 mt-2 cursor-pointer flex flex-col w-full md:w-40  bg-blue-500 text-white rounded-lg shadow-lg opacity-0 scale-y-0 origin-top transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-y-100">
              <Link href="/contact-us" className="px-4 py-2">
                CONTACT ME
              </Link>
              <Link href="/about-us" className="px-4 py-2">
                ABOUT ME
              </Link>
            </ul>
          </div>
        </li>
        <div className="text-[14px] border border-[#7f9aee] font-semibold px-2 py-1 rounded">
          LOGIN
        </div>
      </>
    );
  };

  return (
    <nav
      className={`bg-[#000] text-white max-w-full py-[10px] px-4 z-11  w-full top-0 fixed`}
    >
      <header className="container w-full max-w-full flex justify-between items-center">
        {/* Left - Logo/Icon */}
        <Link href="/">
          <img
            src="/images/logo.webp"
            className="w-[30%] md:w-auto z-1"
            alt="logo"
          />
        </Link>

        <div className="hidden md:flex flex-col">
          {getContactSection()}
          <ul className="hidden md:flex space-x-6 px-3 items-center pt-3">
            {getTabSection()}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <ul
          className={`md:hidden flex flex-col space-y-4 p-4 items-center ${
            isOpen ? styles.slideDownAnimation : styles.slideUpAnimation
          }`}
        >
          {getContactSection()}
          {getTabSection()}
        </ul>
      )}
    </nav>
  );
};

export default Header;
