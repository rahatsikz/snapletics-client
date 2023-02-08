import React from "react";

const Home = () => {
  return (
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
  );
};

export default Home;
