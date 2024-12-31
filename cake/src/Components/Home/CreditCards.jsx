import React from "react";
import { motion } from "framer-motion";
import Bcards from "../../assets/No Background PNG/CreditCards.png";

const CreditCards = () => {
  return (
    <div className="bg-gradient-to-b from-red-400 via-white to-white p-4 md:px-16 lg:px-72 w-full h-auto">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={Bcards}
          alt="Credit Cards"
          className="w-64 md:w-80 lg:w-96 mb-4 md:mb-0"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="md:w-1/2 lg:w-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-black font-Josefin-Sans font-medium text-xl md:text-2xl lg:text-3xl mb-4">
            Please be advised that the Credit Cards will be discontinued on
            October 31, 2024
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-200 hover:rounded-none font-semibold rounded-2xl font-Josefin-Sans px-5 text-lg md:text-xl py-2 mt-5"
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CreditCards;
