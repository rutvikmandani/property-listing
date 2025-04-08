import ContactUs from "@/component/ContantUs";
import React, { Suspense } from "react";

const Contact = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactUs />
    </Suspense>
  );
};

export default Contact;
