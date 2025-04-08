import { EMAIL, MOBILE_NUMBER } from "@/lib/constant";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const AboutUs = () => {
  const images = [
    "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/E12044318/thumbnail/4ceddced-3889-4bdb-abdb-0de5f4db5e32-t.jpg",
    "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/E12044318/medium/4ceddced-3889-4bdb-abdb-0de5f4db5e32-m.jpg",
    "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/E12044318/thumbnail/03f24a6a-0fc1-4016-9d1b-2759b6caee94-t.jpg",
    "https://s3.ca-central-1.amazonaws.com/mls-trreb/properties/E12044318/large/e8350108-c514-47ae-988d-687879b5b7c3-l.jpg",
  ];
  return (
    <div className="mt-[54px] md:mt-[107px]">
      <div className="bg-lightBlue py-[30px] md:py-[40px] text-white flex align-center justify-center text-xl sm:text-2xl font-semibold">
        About Me
      </div>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-5xl  rounded-lg mb-8">
          <div className="flex flex-col sm:flex-row items-center mt-6">
            <div className="md:w-1/3 flex flex-col items-center text-center md:text-left px-6">
              <img
                src="/images/realtor.webp"
                alt="Realtor"
                className="w-48  object-cover rounded-lg"
              />
              <div className="bg-lightBlue text-white p-4 rounded-lg w-full flex flex-col gap-2">
                <h2 className="text-lg font-bold">REALTOR</h2>
                <p className="text-sm">Designation</p>
                <a
                  className="flex items-center pr-4 text-[17px]  font-medium gap-1"
                  href="tel:+10000000000"
                  id="header-phone"
                >
                  <FaPhone />
                  {MOBILE_NUMBER}
                </a>
                <a
                  className="flex items-center text-[17px] font-medium pr-4  gap-1"
                  href="mailto:agent@agent.com"
                  id="header-mail"
                >
                  <MdOutgoingMail />
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Right Section (Text Content & Images) */}
            <div className="md:w-2/3 px-6">
              <p className="text-gray-700 mb-4">
                I have a passion for assisting clients with various real estate
                needs. I am a trusted and well-trained professional who strives
                to provide you with the best solution.
              </p>
              <p className="text-gray-700 mb-4">
                Clients are impressed by the dedication and effort I put into
                making sure that they receive top-quality service and amazing
                results. Explore my website to find detailed listing
                information, buying guides, selling guides, and other features
                that suit your real estate requirements.
              </p>
              <p className="text-gray-700 mb-6">
                Discover why I love real estate and why I am the best choice for
                you.
              </p>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <img
                    src={img}
                    className={"w-full h-full object-cover"}
                    alt={`Image ${index + 1}`}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
