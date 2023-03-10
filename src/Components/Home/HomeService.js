import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useNavigate } from "react-router-dom";

const HomeService = ({ service }) => {
  const { img, name, description, price, ratings, _id } = service;
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/services/${_id}`);
  };
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
      {/*  <!-- Image --> */}
      <figure className="flex-1">
        {/* <img src={img} alt="card " className="object-cover min-h-full" /> */}
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" className="object-cover min-h-full" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      {/*  <!-- Body--> */}
      <div className="flex-1 p-6 sm:mx-6 sm:px-0">
        <header className="flex gap-4 mb-4">
          <div className="lg:min-h-[78px]">
            <h3 className="text-xl font-medium text-slate-700">{name}</h3>
            <p className="text-md text-cyan-700 font-medium"> ${price}.00</p>
          </div>
        </header>
        <div className="mb-4">
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
        </div>
        <p>{description.slice(0, 90)}...</p>
        <div className="mt-4 text-center">
          <button
            onClick={handleDetails}
            className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full bg-cyan-50 px-5 text-sm font-medium tracking-wide text-cyan-700 transition duration-300 hover:bg-cyan-100 hover:text-cyan-600 focus:bg-cyan-200 focus:text-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-100 disabled:text-cyan-400 disabled:shadow-none"
          >
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
