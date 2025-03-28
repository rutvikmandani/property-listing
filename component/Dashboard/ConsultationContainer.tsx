"use client";
import { useState } from "react";
import Select from "../UIFields/Select";
import Input from "../UIFields/input";

export default function ConsultationContainer() {
  const [selectedType, setSelectedType] = useState("Buyer & Seller");

  return (
    <div className="relative z-10 bg-black text-white py-[25px] px-4 md:mt-[-6px]">
      <div className="flex flex-col items-center gap-4">
        {/* Radio Options */}
        <div className="flex flex-col md:flex-row text-[17px] items-center gap-3">
          <p className="text-lg font-bold ">I AM A</p>
          <div className="flex gap-3 flex-wrap">
            {["Buyer & Seller", "Seller", "Buyer", "Renter"].map((type) => (
              <label
                key={type}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="buyerType"
                  value={type}
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                  className="hidden"
                />
                <div
                  className={`w-4 h-4 border-2 rounded-full ${
                    selectedType === type
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-400"
                  }`}
                />
                <span className="font-medium">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <Select
              className="border w-full border-gray-400 bg-white text-black py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder={"What type of Buyer..."}
              options={[]}
            />
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
          </div>

          {/* Button */}
          <button className="bg-[#7f9aee] text-white font-semibold py-2 px-6 rounded-md transition">
            GET A FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
}
