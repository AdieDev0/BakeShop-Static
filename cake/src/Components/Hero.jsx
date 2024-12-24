import React from "react";
import heroBg from "../assets/HeroBg.jpg";
import { FaRegHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="relative">
      <img
        src={heroBg}
        alt="background"
        className="object-cover w-full h-[600px] bg-black"
      />
      <div class="absolute inset-0 bg-black opacity-30"></div>

      {/* INSIDE TEXT AND BUTTON IN IMAGE */}
      <div className="absolute top-20 left-10 md:left-32">
        <h1 class=" w-60 md:w-96 text-6xl md:text-8xl font-Mountains-of-Christmas font-extrabold text-red-400 md:text-red-600 mb-20">
          Christmas Celebrate!
        </h1>

        <button className="flex gap-4 text-xl md:text-4xl font-bold text-red-400 hover:text-white items-center px-5 md:px-10 py-3 md:py-5 bg-white hover:bg-red-400 duration-150 p-2 rounded-full">
          TAP TO ORDER <FaRegHandPointRight/>
        </button>
      </div>
    </div>
  );
};

export default Hero;
