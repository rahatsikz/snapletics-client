import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Features from "../Features/Features";
import PhotoSlide from "../PhotoSlide/PhotoSlide";
import HomeService from "./HomeService";

const Home = () => {
  const services = useLoaderData();
  const navigate = useNavigate();
  const handletoAll = () => {
    navigate("/services");
  };
  return (
    <section>
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1473663065522-33361623fa27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className=" text-5xl font-bold">Freeze the Moment</h1>
            <h1 className="mb-5 text-5xl font-bold">
              Sports Photography with a Story
            </h1>
            <p className="mb-5">
              Capturing the thrill and excitement of athletic moments is my
              passion. From high-energy games to intense training, I strive to
              deliver stunning images that tell the story of each athlete and
              their sport.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 container mx-auto">
        <p className="text-cyan-700 tracking-wider text-lg text-center">
          Services
        </p>
        <h2 className="text-2xl text-center font-semibold">
          Types of services Sami provides
        </h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mt-12">
          {services.map((service) => (
            <HomeService key={service._id} service={service}></HomeService>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handletoAll}
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-cyan-600 px-5 text-sm font-medium tracking-wide text-cyan-700 transition duration-300 hover:border-cyan-600 hover:text-cyan-600 focus:border-cyan-700 focus:text-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:text-cyan-300 disabled:shadow-none"
          >
            <span>See all services</span>
          </button>
        </div>
      </div>

      <Features></Features>
      <PhotoSlide></PhotoSlide>
    </section>
  );
};

export default Home;
