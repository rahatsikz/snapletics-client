import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  const { name, img, price, ratings, description } = details;
  return (
    <div>
      <div className="relative">
        <div
          className="hero h-[40vh]"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className=" text-5xl font-bold">{name}</h1>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 lg:w-1/3 mx-auto absolute -bottom-1/2 md:-bottom-20 left-1/3">
          <div className="p-6 grid md:grid-cols-2 justify-items-center gap-8">
            <h2 className="text-xl font-semibold">
              <span className="text-cyan-600">Price:</span> ${price}.00{" "}
            </h2>
            <h2 className="text-xl flex items-center font-semibold">
              <span className="text-cyan-600">Ratings:</span> &nbsp;
              {ratings === 5 ? (
                <div className="flex text-warning">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              ) : (
                <div className="flex text-warning">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              )}
            </h2>
            <h2 className="text-xl font-semibold">
              <span className="text-cyan-600">Hour rate: </span>
              {price > 30 ? "Mutable" : "Fixed"}
            </h2>
            <h2 className="text-xl font-semibold">
              <span className="text-cyan-600">Time limit:</span> Flexible
            </h2>
          </div>
        </div>
      </div>

      <div className="lg:mt-24 md:mt-36 mt-52 container mx-auto">
        <p className="text-cyan-700 tracking-wider text-lg text-center mb-4">
          Things you want to know
        </p>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
