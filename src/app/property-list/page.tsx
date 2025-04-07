import PropertyListingPageContent from "@/component/PropertyListingPageContent";
import React, { Suspense } from "react";

const Listing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertyListingPageContent />{" "}
    </Suspense>
  );
};

export default Listing;
