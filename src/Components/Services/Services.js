import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="container mx-auto my-12">
      <p className="text-cyan-700 tracking-wider text-lg text-center">
        Services
      </p>
      <h2 className="text-2xl text-center font-semibold">
        Photography services which I provide
      </h2>
      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
