import React from "react";

const FeatureServices = () => {
  const featuredServices = [
    { name: "HOME WORTH", img: "/images/features/service1.webp" },
    { name: "NEIGHBOURHOOD ALERTS", img: "/images/features/service2.webp" },
    { name: "NEW LISTING ALERTS", img: "/images/features/service3.webp" },
    { name: "MAP SEARCH", img: "/images/features/service4.webp" },
  ];

  return (
    <div className="container mx-auto text-center py-[25px] px-4">
      <h3 className="text-[27px] font-normal text-black mb-4">
        Featured Services
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredServices.map((service, index) => (
          <div key={index} className="relative max-w-max shadow-md rounded-lg">
            <img src={service.img} alt={service.name} />
            <h5 className="absolute flex top-0 left-0 right-0 bottom-0 m-auto items-center font-bold justify-center text-white  text-[14px] md:text-[22px] font-medium">
              {service.name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureServices;
