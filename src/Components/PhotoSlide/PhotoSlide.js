import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import img1 from "../../assests/images/pexels-nappy-936094.jpg";
import img2 from "../../assests/images/pexels-mica-asato-1198174.jpg";
import img3 from "../../assests/images/pexels-jim-de-ramos-1263426.jpg";
import img4 from "../../assests/images/pexels-alexander-nadrilyanski-3684122.jpg";
import img5 from "../../assests/images/pexels-ruben-ascensao-9708237.jpg";

const PhotoSlide = () => {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <div className="container mx-auto mb-12">
      <p className="text-cyan-700 tracking-wider text-lg text-center">
        Photo Gallery
      </p>
      <h2 className="text-2xl text-center font-semibold mb-8">
        Dedicated galleries featuring Athletes
      </h2>
      <div className="relative w-full glide-03">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={img1}
                className="w-full max-w-full max-h-full m-auto"
                alt=""
              />
            </li>
            <li>
              <img
                src={img2}
                className="w-full max-w-full max-h-full m-auto"
                alt=""
              />
            </li>
            <li>
              <img
                src={img3}
                className="w-full max-w-full max-h-full m-auto"
                alt=""
              />
            </li>
            <li>
              <img
                src={img4}
                className="w-full max-w-full max-h-full m-auto"
                alt=""
              />
            </li>
            <li>
              <img
                src={img5}
                className="w-full max-w-full max-h-full m-auto"
                alt=""
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-white bg-white/20 text-white hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-white bg-white/20 text-white hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-white focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-white focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-white focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-white focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=4"
            aria-label="goto slide 5"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-white focus:outline-none"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlide;
