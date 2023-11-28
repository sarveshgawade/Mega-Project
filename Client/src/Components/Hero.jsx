import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import hero from "../Assets/fpdl 1.png";
import { GiClick } from "react-icons/gi";

function Hero() {
  return (
    <div className="md:bg-wave bg-no-repeat bg-none md:block bg-purple-50">
      <div className="fixed">
        {" "}
        <Navbar />{" "}
      </div>

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 min-h-screen">
        <div className="mr-auto place-self-center lg:col-span-7 lg:mt-20">
          <h1 className="max-w-2xl mb-4 text-4xl font-sans font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
            EventSpectra
          </h1>

          <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl mt-5 lg:mt-8 font-play">
            Embark on a journey of innovation and effortless exploration with
            EventSpectra. We believe in simplifying your digital experience,
            providing you with tools and insights that propel you into the
            future. Discover the ease of connectivity and the power of
            streamlined solutions.
          </p>

          <Link
            to="/l"
            className="inline-flex items-center justify-center px-6 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-purple-700 hover:bg-purple-900 focus:ring-slate-950 animate-pulse"
          >
            Login
            <div className="w-5 h-5 ml-5 -mr-1 rotate-90 text-2xl">
              <GiClick />
            </div>
          </Link>

          <Link
            to="#"
            className="mt-3 inline-flex items-center justify-center px-4 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 hover:bg-slate-200 rounded-full bg-white"
          >
            Explore
          </Link>
        </div>

        <div className="order-first lg:order-last lg:mt-0 lg:col-span-5 lg:flex ml-5 mr-0">
          <img
            src={hero}
            alt="mockup"
            className="w-64 h-64 m-auto md:w-full md:h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
