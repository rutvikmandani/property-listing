"use client";
import React from "react";
import InputField from "../UIFields/InputField";
import TextareaField from "../UIFields/TextareaField";

const AskAboutProperty = () => {
  return (
    <div className="flex flex-col gap-4 sticky top-[110px] p-4 shadow-[0_0_13px_1px_rgba(0,0,0,0.1)]">
      <h3 className="text-[20px] font-bold mb-4">Ask about this property</h3>
      <InputField type="text" placeholder="Full name" onChange={() => {}} />
      <InputField type="text" placeholder="(555) 555-5555" onChange={() => {}} />
      <InputField type="email" placeholder="Email" onChange={() => {}} />
      <TextareaField
        placeholder="I would like to know more information regarding the property at 29 AGINCOURT Crescent, St. Catharines, ON"
        onChange={() => {}}
      />
      <button className="bg-lightBlue rounded py-3 text-white w-full">
        Submit
      </button>
    </div>
  );
};

export default AskAboutProperty;
