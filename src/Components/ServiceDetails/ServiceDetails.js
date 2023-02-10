import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  const { name } = details;
  return (
    <div>
      <p>Service detail of: {name} </p>
    </div>
  );
};

export default ServiceDetails;
