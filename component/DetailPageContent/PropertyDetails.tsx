"use client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface PropertyData {
  Property: {
    "Property Type": string;
    Status: string;
    "Building Type": string;
    "Building Style": string;
    Size: string;
    Area: string;
    Community: string;
  };
  Land: {
    "Fronting On": string;
    "Lot Depth": string;
    Frontage: string;
    "Lot Size": string;
    Sewer: string;
    Zoning: string;
  };
  Inside: {
    Bedrooms: number;
    Bathrooms: number;
    Kitchen: number;
    Rooms: number;
    Fireplace: string;
    "Den/Family Room": string;
    "Central Vac": string;
    "Patio Terrace": string;
    "Air Conditioning": string;
  };
  Building: {
    Basement: string;
    Heating: string;
    "Fuel/Heating": string;
    Exterior: string;
  };
  Parking: {
    "Garage Type": string;
    "Garage Space": number;
  };
}

interface ExtraData {
  Fees: {
    Taxes: string;
    "Tax Year": number;
    "Maintenance Fee": string;
    "Central A/C Included": string;
    "Heating Included": string;
    "Parking Included": string;
  };
  "Additional Info": {
    Locker: string;
    "Condo Corporation": string;
    "Corporation Number": number;
    "Virtual Tour": string;
  };
}

const PropertyDetails = () => {
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const PropertyDetails: PropertyData = {
    Property: {
      "Property Type": "Condo",
      Status: "For Sale",
      "Building Type": "Condo Apt",
      "Building Style": "Apartment",
      Size: "0-499 Sqft",
      Area: "Toronto",
      Community: "Willowdale West",
    },
    Land: {
      "Fronting On": "West",
      "Lot Depth": "109.02",
      Frontage: "52.9",
      "Lot Size": "52.9 X 109.02 Feet",
      Sewer: "Sewer",
      Zoning: "R1",
    },
    Inside: {
      Bedrooms: 1,
      Bathrooms: 1,
      Kitchen: 1,
      Rooms: 4,
      Fireplace: "No",
      "Den/Family Room": "No",
      "Central Vac": "No",
      "Patio Terrace": "Open",
      "Air Conditioning": "Central Air",
    },
    Building: {
      Basement: "None",
      Heating: "Forced Air",
      "Fuel/Heating": "Gas",
      Exterior: "Concrete",
    },
    Parking: {
      "Garage Type": "Underground",
      "Garage Space": 1,
    },
  };

  const extraData: ExtraData = {
    Fees: {
      Taxes: "$2,424.83",
      "Tax Year": 2024,
      "Maintenance Fee": "$533.10",
      "Central A/C Included": "No",
      "Heating Included": "Yes",
      "Parking Included": "Yes",
    },
    "Additional Info": {
      Locker: "Owned",
      "Condo Corporation": "TSCC",
      "Corporation Number": 2737,
      "Virtual Tour": "https://link",
    },
  };

  const getData = (data: PropertyData | ExtraData) => {
    return Object.keys(data).map((a) => {
      return {
        title: a,
        data: Object.keys(data[a as keyof typeof data]).map((b) => {
          return {
            title: b,
            value: data[a as keyof typeof data][b as keyof (typeof data)[keyof typeof data]],
          };
        }),
      };
    });
  };

  const propertyData = getData(PropertyDetails);
  const extraPropertyData = getData(extraData);

  return (
    <div className="bg-neutral rounded p-4">
      <div className="flex pt-5 justify-between flex-col gap-3 sm:flex-row items-start">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold font-medium text-text-secondary">
            1003-5180 Yonge Street
          </h2>
          <p className="text-gray-600 font-medium">Toronto, ON</p>
          <div className="flex items-center space-x-4 text-text-tertiary">
            <p className="font-medium">1 Bed</p>
            <span className="text-text-gray">|</span>
            <p className="font-medium">1 Bath</p>
            <span className="text-text-gray">|</span>
            <p className="font-medium">0-499 sqft</p>
          </div>
        </div>
        <div className="flex sm:items-end flex-col gap-3">
          <p className="text-2xl font-semibold text-gray-900 font-medium">
            $650,000
          </p>
          <p className="text-text-gray3 text-sm font-medium">
            Added: 56 minutes ago
          </p>
          <span className="text-white w-max font-semibold text-green-700 bg-primary px-2 py-1 rounded-full">
            New
          </span>
        </div>
      </div>

      <button className="mt-3 w-full py-2 border border-black rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition">
        Virtual Tour
      </button>

      {/* Property Details */}
      <div className="grid grid-cols-2 gap-x-6 bg-gray-200 p-4 mt-4 rounded-lg text-sm text-gray-700">
        <div>
          <p className="font-semibold">MLS® #:</p>
          <p>C12046817</p>
        </div>
        <div>
          <p className="font-semibold">Listed By:</p>
          <p>REAL ESTATE HOMEWARD</p>
        </div>
        <div>
          <p className="font-semibold">Type:</p>
          <p>Condo</p>
        </div>
        <div>
          <p className="font-semibold">Source:</p>
          <p>VOW</p>
        </div>
        <div>
          <p className="font-semibold">Home Style:</p>
          <p>Apartment</p>
        </div>
        <div>
          <p className="font-semibold">Board:</p>
          <p>TRREB</p>
        </div>
        <div>
          <p className="font-semibold">Size:</p>
          <p>0-499 Sqft</p>
        </div>
        <div>
          <p className="font-semibold">Taxes:</p>
          <p>$2424.83</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Description</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Conveniently located in the heart of North York, this one bedroom
          condo is one that cannot be beat. This amazing layout features a
          spacious open floor plan and a large open balcony; the perfect place
          to wind down after a long day. Everything you need is right at your
          doorstep with direct underground access to North York Centre Subway
          station, Loblaws, and countless restaurants and businesses. Travel
          through the city is easily accessible with both the 401 and DVP
          located in your backyard. This unit also features an extra long
          parking spot and two lockers. Amenities feature a fitness room,
          theatre, yoga room, billiards, party room, steam/sauna room, outdoor
          terrace, and guest suites. Some images have been virtually staged.
        </p>
      </div>
      <div>
        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">Property Description</h2>
          <p className="text-gray-700 mb-6">
            This beautiful condo offers a comfortable and modern living space in
            the heart of Toronto.
          </p>

          {isFeatureOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-6">
                {propertyData.map((a, index) => (
                  <div key={`${index}-${a.title}`}>
                    <h3 className="text-xl font-bold mb-2">{a.title}</h3>
                    <div className="flex gap-1 flex-col">
                      {a.data.map((b, i) => (
                        <p className="text-[14px]" key={`${i}-${b.title}`}>
                          <strong>{b.title}:</strong> {b.value}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                {extraPropertyData.map((a, index) => (
                  <div key={`${index}-${a.title}`}>
                    <h3 className="text-xl font-bold mb-2">{a.title}</h3>
                    <div className="flex gap-1 flex-col">
                      {a.data.map((b, i) => (
                        <p className="text-[14px]" key={`${i}-${b.title}`}>
                          <strong>{b.title}:</strong> {b.value}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <button
            onClick={() => setIsFeatureOpen((prev) => !prev)}
            className="mt-3 w-full py-2 border rounded-lg border-black text-gray-800 flex justify-center items-center gap-3 font-semibold hover:bg-gray-100 transition"
          >
            {`See ${isFeatureOpen ? "less" : "more"} and features`}{" "}
            {isFeatureOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
