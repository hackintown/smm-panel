import React from "react";
import Index from "../../components/Admin/Services/ServicesIndex";
import ServicesTable from "../../components/Admin/Services/ServicesTable";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <Index />
      <ServicesTable />
    </div>
  );
};

export default Services;
