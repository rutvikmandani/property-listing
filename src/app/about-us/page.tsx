import React, { Suspense } from "react";
import AboutUs from "@/component/AboutUs";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutUs />
    </Suspense>
  );
};

export default page;
