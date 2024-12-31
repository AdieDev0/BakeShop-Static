import React from "react";
import { motion } from "framer-motion";

const FeatureSelection = () => {
  return (
    <div className="bg-red-400 p-10 md:p-20 shadow-lg shadow-red-500">
      <motion.h3
        className="text-3xl md:text-5xl text-white font-Josefin-Sans font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Selections
      </motion.h3>
      <motion.div
        className="carousel w-full bg-white rounded-xl shadow-md overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div id="item1" className="carousel-item w-full">
          <motion.img
            src="https://wallpaperaccess.com/full/6450353.jpg"
            className="w-full h-[300px] md:h-[500px] object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <motion.img
            src="https://wallpaperaccess.com/full/12937153.jpg"
            className="w-full h-[300px] md:h-[500px] object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <motion.img
            src="https://wallpaperaccess.com/full/6450420.jpg"
            className="w-full h-[300px] md:h-[500px] object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <motion.img
            src="https://wallpaperaccess.com/full/6450504.jpg"
            className="w-full h-[300px] md:h-[500px] object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </motion.div>
      <motion.div
        className="flex w-full justify-center gap-2 py-4 md:py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[1, 2, 3, 4].map((item) => (
          <motion.a
            key={item}
            href={`#item${item}`}
            className="border px-3 md:px-5 py-1 rounded-lg font-bold font-Josefin-Sans bg-white text-red-500 border-red-500 hover:bg-red-600 hover:text-white duration-200"
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureSelection;
