"use client";
import React, { useState } from "react";

const UserType = () => {
  const [selectedType, setSelectedType] = useState("Buyer & Seller");

  return (
    <div className="flex flex-col md:flex-row text-[14px] items-center gap-3">
      <p className="text-lg font-semibold ">I AM A</p>
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
  );
};

export default UserType;
