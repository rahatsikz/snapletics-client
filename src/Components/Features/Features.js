import React from "react";
import tick from "../../assests/images/check.svg";

const Features = () => {
  return (
    <div className="mt-12 container mx-auto mb-12">
      <p className="text-cyan-700 tracking-wider text-lg text-center">
        Features
      </p>
      <h2 className="text-2xl text-center font-semibold">
        Trusted Sports Photographer
      </h2>
      <div className="grid grid-cols-12 gap-20 mt-8">
        <div className="md:col-span-6 col-span-7">
          <img
            src="https://images.unsplash.com/photo-1616858136942-c76763274a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="md:col-span-4 col-span-6 lg:mt-12">
          <p className="mb-4">
            With a commitment to professionalism and post-production skills, I
            bring each image to life and deliver the very best in sports
            photography.
          </p>
          <div className="flex items-center mb-2">
            <img src={tick} alt="" className="w-6 mr-2" />
            <span>Knowledge of photography techniques, lighting</span>
          </div>
          <div className="flex items-center mb-2">
            <img src={tick} alt="" className="w-6 mr-2" />
            <span>Creativity to capture visually stunning images</span>
          </div>
          <div className="flex items-center mb-2">
            <img src={tick} alt="" className="w-6 mr-2" />
            <span>Attention to detail to capture defining moments </span>
          </div>
          <div className="flex items-center mb-2">
            <img src={tick} alt="" className="w-6 mr-2" />
            <span>
              Quick reflexes to capture the best shots, even in fast-paced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
