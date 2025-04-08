import React, { Suspense } from "react";
import Dashboard from "@/component/Dashboard";

const RealtorLandingPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
};

export default RealtorLandingPage;
