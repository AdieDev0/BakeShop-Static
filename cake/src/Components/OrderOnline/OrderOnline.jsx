import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

// Importing assets
import cake from "../../assets/Order Online/miniCards/cake.png";
import desserts from "../../assets/Order Online/miniCards/desserts.png";
import goldCake from "../../assets/Order Online/miniCards/goldCake.png";
import inasal from "../../assets/Order Online/miniCards/inasal.png";
import kakanin from "../../assets/Order Online/miniCards/kakanin.png";
import merienda from "../../assets/Order Online/miniCards/merienda.png";
import pinoyMeals from "../../assets/Order Online/miniCards/pinoy meals.png";
import redCake from "../../assets/Order Online/miniCards/red cake.png";
import cakeRolls from "../../assets/Order Online/miniCards/cakeRolls.png";

import Triple from "../../assets/Order Online/TripleChoco.jpg";
import Cake from "../../assets/Order Online/R.jpg";
import Cherry from "../../assets/Order Online/cherry.jpg";
import DarkChoco from "../../assets/Order Online/DarkChoco.jpg";
import sisig from "../../assets/Order Online/sisig.jpg";
import fiesta from "../../assets/Order Online/fiesta.jpg";
import shanghai from "../../assets/Order Online/shanghai.jpg";
import icedCoffee from "../../assets/Order Online/icedCoffee.jpg";
import Mocha from "../../assets/Order Online/Mocha.jpg";
import Cream from "../../assets/Order Online/Cream.jpg";

import candleCake from "../../assets/GreetingSelections/CandleCake.png";
import cheeryChoco from "../../assets/GreetingSelections/CherryChoco.jpg";
import ChocoTruffle from "../../assets/GreetingSelections/Chocolate truffle.png";
import CustardSponge from "../../assets/GreetingSelections/CustardSpongeCake.png";
import DrippingCake from "../../assets/GreetingSelections/DrippingCake.png";
import IceCreamCake from "../../assets/GreetingSelections/IceCreamCake.png";
import PastryMoonCake from "../../assets/GreetingSelections/PastryMoonCake.png";

const OrderOnline = () => {
  // State for the number stepper
  const [value, setValue] = useState(1);

  // Increment handler
  const handleIncrement = () => {
    setValue(value + 1);
  };

  // Decrement handler
  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <div className="bg-white/80 min-h-screen font-sans">
      {/* Marquee Section */}
      <div className="relative">
        <Marquee autoFill speed={50} gradient={false}>
          {/* Display scrolling images */}
          <div className="flex">
            <img src={Cake} alt="Cake" className="w-80" />
            <img src={icedCoffee} alt="Iced Coffee" className="w-80" />
            <img src={sisig} alt="Sisig" className="w-80" />
            <img src={Cherry} alt="Cherry" className="w-80" />
            <img src={Mocha} alt="Mocha" className="w-80" />
            <img src={fiesta} alt="Fiesta" className="w-80" />
            <img src={Triple} alt="Triple Chocolate" className="w-80" />
            <img src={shanghai} alt="Shanghai" className="w-80" />
            <img src={Cream} alt="Cream" className="w-80" />
            <img src={DarkChoco} alt="Dark Chocolate" className="w-80" />
          </div>
        </Marquee>

        {/* Overlay content */}
        <div className="absolute inset-0 top-10 items-center left-16 z-10">
          <h2 className="w-60 md:w-[700px] text-6xl md:text-8xl font-Pacifico font-extrabold bg-clip-text text-transparent bg-gradient-to-bl from-red-600 via-white to-pink-600 mb-20">
            Order Your Favorites Now!
          </h2>
          <button className="flex gap-4 text-xl md:text-4xl font-bold text-red-400 hover:text-white items-center px-5 md:px-10 py-3 md:py-5 bg-white hover:bg-red-400 duration-150 rounded-full">
            TAP TO ORDER
          </button>
        </div>
      </div>

      {/* Mini Cards Section */}
      <div className="py-10 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
          {[
            { name: "Greeting Cakes", img: cake },
            { name: "Premium Cakes", img: goldCake },
            { name: "Cake Rolls", img: cakeRolls },
            { name: "Pinoy Meals", img: pinoyMeals },
            { name: "Bundle Pinoy Meals", img: inasal },
            { name: "Snacks & Pasalubong", img: kakanin },
            { name: "Anytime Merienda", img: merienda },
            { name: "Drinks & Desserts", img: desserts },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-4 bg-red-600 border-red-600 rounded-xl flex flex-col items-center cursor-pointer"
            >
              <h2 className="font-extrabold text-white text-xs mb-3">
                {item.name}
              </h2>
              <img src={item.img} alt={item.name} className="w-32 md:w-20" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Greeting Cakes Section */}
      <div className="py-16 px-6 sm:px-16 md:px-32">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-black text-4xl font-extrabold">Greeting Cakes</h1>
        <motion.button
          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-200 font-extrabold px-8 py-3 rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          See More
        </motion.button>
      </div>

      {/* Cake Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          { name: "Candle Cake", img: candleCake },
          { name: "Cheery Choco", img: cheeryChoco },
          { name: "Choco Truffle", img: ChocoTruffle },
          { name: "Custard Sponge", img: CustardSponge },
          { name: "Dripping Cake", img: DrippingCake },
          { name: "Ice Cream Cake", img: IceCreamCake },
          { name: "Pastry Moon Cake", img: PastryMoonCake },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="border-2 border-red-600 bg-red-500 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-32 sm:w-28 md:w-20 lg:w-32 xl:w-40 mx-auto mb-4"
            />
            <h2 className="font-extrabold text-white text-xs mb-3 text-center">
              {item.name}
            </h2>
            <div className="flex justify-center items-center gap-4">
              {/* Counter with buttons */}
              <div className="flex items-center gap-3">
                <button
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={handleDecrement}
                >
                  <CiCircleMinus />
                </button>
                <h1 className="text-white font-bold text-lg">{value}</h1>
                <button
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={handleIncrement}
                >
                  <IoIosAddCircleOutline />
                </button>
              </div>
              <motion.button
                className="mt-3 px-6 py-3 bg-white text-red-500 font-bold rounded-md hover:bg-gray-200"
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Add to tray
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OrderOnline;
