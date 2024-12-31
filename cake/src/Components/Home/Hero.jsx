import React, { useState, useEffect } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Cards from "./Cards";

const Hero = () => {
  // IMAGE SLIDER DATA
  const slides = [
    { URL: "https://wallpaperaccess.com/full/7793868.jpg" },
    { URL: "https://wallpaperaccess.com/full/7793880.jpg" },
    { URL: "https://wallpaperaccess.com/full/7793887.jpg" },
    { URL: "https://wallpaperaccess.com/full/6172149.jpg" },
    { URL: "https://wallpaperaccess.com/full/5788695.jpg" },
    { URL: "https://wallpaperaccess.com/full/6450201.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next slide
  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <>
    <div className="relative shadow-lg shadow-red-500">
      {/* Dynamic Background Image */}
      <motion.div
        key={currentIndex}
        style={{ backgroundImage: `url(${slides[currentIndex].URL})` }}
        className="relative w-full h-[350px] sm:h-[590px] bg-center bg-cover bg-no-repeat duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Inside Text and Button */}
      <div className="absolute top-20 left-10 md:left-32">
        <motion.h1
          className="w-60 md:w-96 text-6xl md:text-8xl font-Mountains-of-Christmas font-extrabold text-red-400 md:text-red-600 mb-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Christmas Celebrate!
        </motion.h1>

        <motion.button
          className="flex gap-4 text-xl md:text-4xl font-bold text-red-400 hover:text-white items-center px-5 md:px-10 py-3 md:py-5 bg-white hover:bg-red-400 duration-150 rounded-full"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          TAP TO ORDER <FaRegHandPointRight />
        </motion.button>
      </div>
    </div>
    {/* Section */}
    
    <Cards/>
    </>
  );
};

export default Hero;
