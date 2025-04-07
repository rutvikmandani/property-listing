"use client";
import SelectField from "../UIFields/SelectField";
import InputField from "../UIFields/InputField";
import UserType from "./UserType";

export default function ConsultationContainer() {
  return (
    <div className="relative z-10 bg-black text-white py-[25px] px-4 md:mt-[-6px]">
      <div className="flex flex-col items-center gap-4">
        <UserType />

        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <SelectField
              className="border w-full  bg-white text-black"
              placeholder={"What type of Buyer..."}
              options={[]}
              value={undefined}
            />
            <InputField type="text" placeholder="Full name" onChange={() => null} />
            <InputField
              type="text"
              placeholder="(555) 555-5555"
              onChange={() => null}
            />
            <InputField type="email" placeholder="Email" onChange={() => null} />
          </div>

          <button className="bg-lightBlue text-white font-semibold py-2 px-6 rounded-md transition">
            GET A FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
}
