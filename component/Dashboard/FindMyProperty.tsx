"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import SelectField from "../UIFields/SelectField";

const FindMyProperty = () => {
  const [isAdvanceOptionOpen, setIsAdvanceOptionOpen] = useState(false);
  const fieldList = [
    {
      name: "Property Category",
      options: ["Residential", "Condo", "Commercial"],
    },
    {
      name: "Building Type",
      options: ["Commercial/Retail"],
    },
    {
      name: "Property Category",
      options: [
        "Building Style",
        "1 1/2 Storey",
        "2 1/2 Storey",
        "2-Storey",
        "3 Storey",
        "3-Storey",
        "Apartment",
        "Apparel",
        "Apts-13 To 20 Units",
        "Apts-2 To 5 Units",
        "Apts-6 To 12 Units",
        "Apts-Over 20 Units",
        "Art Gallery",
        "Art Supplies",
        "Automotive Related",
        "Bachelor/Studio",
        "Backsplit",
        "Backsplt-All",
        "Bakery",
        "Bank",
        "Banquet Hall",
        "Bar/Tavern/Pub",
        "Beauty Salon",
        "Bed & Breakfast",
        "Bungalow",
        "Bush",
        "Butcher/Meat",
        "Cabins/Cottages",
        "Cafe",
        "Campgrounds",
        "Car Wash",
        "Cash Crop",
        "Caterer/Cafeteria",
        "Church",
        "Coffee/Donut Shop",
        "Coin Laundromat",
        "Convenience/Variety",
        "Cooler/Freezer/Food Inspect",
        "Copy/Printing",
        "Dairy Products",
        "Day Care",
        "Delicatessen",
        "Delivery/Courier",
        "Distributing",
        "Drugstore/Pharmacy",
        "Dry Clean/Laundry",
        "Electronics",
        "Entertainment",
        "Fast Food/Take Out",
        "Fitness/Training",
        "Florist",
        "Food Court Outlet",
        "Footwear",
        "Fruit/Vegetable Market",
        "Furniture",
        "Garden/Landscaping",
        "Gas Stations",
        "Golf",
        "Gravel Pit/Quarry",
        "Grocery/Supermarket",
        "Hair Salon",
        "Hardware/Tools",
        "Health & Beauty Related",
        "Hobby",
        "Home Improvement",
        "Horse",
        "Hospitality",
        "Hotel/Motel/Inn",
        "Jewellery",
        "Laboratory",
        "Livestock",
        "Loft",
        "Manufacturing",
        "Marina",
        "Medical/Dental",
        "Multi-Level",
        "Office",
        "Other",
        "Parking Lot",
        "Pizzeria",
        "Recreational",
        "Residential",
        "Restaurant",
        "Restricted",
        "Retail",
        "Schools",
        "Self Storage",
        "Seniors Residence",
        "Service Related",
        "Sidesplit",
        "Sidesplt-All",
        "Spa/Tanning",
        "Sporting Goods",
        "Stacked Townhse",
        "Transportation",
        "Travel Agency",
        "Warehousing",
        "Waterfront",
        "Woodworking",
      ],
    },
    {
      name: "Listing Status",
      options: ["For Sale", "For Lease", "For Sub-Lease"],
    },
    { name: "Bed", options: ["1+", "2+", "3+", "4+", "5+", "6+"] },
    { name: "Bath", options: ["1+", "2+", "3+", "4+", "5+", "6+"] },
    { name: "Min price - Max price", options: [] },
    {
      name: "Square Feet",
      options: [
        "500+ sqft",
        "750+ sqft",
        "1000+ sqft",
        "1250+ sqft",
        "1500+ sqft",
        "1750+ sqft",
        "2000+ sqft",
        "2250+ sqft",
        "2500+ sqft",
        "2750+ sqft",
        "3000+ sqft",
        "3250+ sqft",
        "3500+ sqft",
      ],
    },
    {
      name: "Days On Market",
      options: ["1 Day", "7 Days", "14 Days", "30 Days"],
    },
    {
      name: "Sort By",
      options: ["Latest First", "Price Low to High", "Price High to Low"],
    },
  ];

  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];

  return (
    <div className="text-center py-[25px] px-4 text-black">
      <h3 className="text-[27px] font-normal text-black pb-4">
        Find Your Perfect Property
      </h3>
      <div className="flex gap-2 flex-col md:flex-row md:gap-0  w-full">
        <input
          type="text"
          id="placeSearch"
          name="address"
          placeholder="Type your address..."
          value=""
          className=" w-full py-4 pl-2 border-2 border-lightBlue rounded-tl-lg rounded-bl-lg focus:outline-none"
          onChange={() => {}}

        />
        <button className="bg-lightBlue flex items-center gap-2 rounded-tr-lg rounded-br-lg justify-center py-3 text-white w-full md:max-w-[350px]">
          <IoSearchSharp />
          SEARCH
        </button>
      </div>
      {isAdvanceOptionOpen && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
          {fieldList.map((a, index) => (
            <div key={index} className="flex">
              <SelectField
                className="max-w-xs"
                placeholder={a?.name}
                options={a?.options}
                value={undefined}
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center gap-2 py-4">
        <button
          className="flex items-center gap-2"
          onClick={() => setIsAdvanceOptionOpen((prev) => !prev)}
        >
          Advance Search{" "}
          {isAdvanceOptionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
    </div>
  );
};

export default FindMyProperty;
