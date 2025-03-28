import React from "react";
import styles from "@/styles/Homapage/TopcontentWrapper.module.scss";
import { FaPlus } from "react-icons/fa";

interface CityType {
  name: string;
  thumbnail: null;
  count: number;
}

const FeatureNeighborhood = () => {
  const images: string[] = [
    "/images/cities/Toronto.jpg",
    "/images/cities/Mississauga.jpg",
    "/images/cities/Brampton.jpg",
    "/images/cities/Hamilton.jpg",
    "/images/cities/Vaughan.jpg",
    "/images/cities/Markham.jpg",
    "/images/cities/Oakville.jpg",
    "/images/cities/London.jpg",
    "/images/cities/Richmond_Hill.jpg",
    "/images/cities/Barrie.jpg",
  ];
  const cities = [
    {
      name: "Toronto",
      thumbnail: null,
      count: 67908,
    },
    {
      name: "Mississauga",
      thumbnail: null,
      count: 13719,
    },
    {
      name: "Brampton",
      thumbnail: null,
      count: 10029,
    },
    {
      name: "Hamilton",
      thumbnail: null,
      count: 7704,
    },
    {
      name: "Vaughan",
      thumbnail: null,
      count: 7646,
    },
    {
      name: "Markham",
      thumbnail: null,
      count: 6550,
    },
    {
      name: "Oakville",
      thumbnail: null,
      count: 6412,
    },
    {
      name: "London",
      thumbnail: null,
      count: 5358,
    },
  ];
  return (
    <div className="text-center py-[25px] px-4">
      <h3 className="text-[27px] font-normal text-black pb-4">
        Featured Neighbourhoods
      </h3>

      <div className="flex flex-wrap justify-center">
        {cities.map((city: CityType, index: number) => (
          <div
            key={city.name}
            className={`relative w-[50%] lg:w-[25%] wow animate__animated animate__fadeInUp col-span-2 ${styles.cityWrapper}`}
            data-wow-delay={`${(index + 1) * 0.2}s`}
          >
            <img src={images[index]} alt={city.name} />
            <h3
              className={`absolute flex top-[20px] left-0 right-0  m-auto font-bold justify-center text-black  text-lg z-1 font-semibold ${styles.cityName}`}
            >
              {city.name}
            </h3>
            <div
              className={`absolute z-2 flex top-0 bottom-0 left-0 right-0 items-center bg-[#7f9aee]  m-auto font-bold justify-center flex-col gap-3 ${styles.hoverContent}`}
            >
              <h3 className="text-white">{city.name}</h3>
              <p className="text-white">BUY | SELL | INVEST</p>
              <div className="bg-white cursor-pointer rounded-full p-3 w-max h-max">
                <FaPlus color="#7f9aee" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureNeighborhood;
