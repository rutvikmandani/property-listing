import React from "react";
import Input from "../UIFields/input";
import Textarea from "../UIFields/Textarea";

const AskAboutProperty = () => {
  return (
    <div className="flex flex-col gap-4 sticky top-[110px] p-4 shadow-[0_0_13px_1px_rgba(0,0,0,0.1)]">
      <h3 className="text-[20px] font-bold mb-4">Ask about this property</h3>
      <Input
        type="text"
        placeholder="Full name"
        className="border bg-white w-full border-gray-400  text-black py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <Input
        type="text"
        placeholder="(555) 555-5555"
        className="border bg-white w-full border-gray-400  text-black py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <Input
        type="email"
        placeholder="Email"
        className="border bg-white w-full border-gray-400  text-black py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <Textarea
        placeholder="I would like to know more information regarding the property at 29 AGINCOURT Crescent, St. Catharines, ON"
        className="border bg-white w-full border-gray-400  text-black py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <button className="bg-[#7f9aee] rounded-tr-lg rounded-br-lg py-3 text-white w-full md:max-w-[350px]">
        Submit
      </button>
    </div>
  );
};

export default AskAboutProperty;
