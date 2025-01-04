import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";
import cake from "../../assets/Order Online/miniCards/cake.png";
import desserts from "../../assets/Order Online/miniCards/desserts.png";
import goldCake from "../../assets/Order Online/miniCards/goldCake.png";
import inasal from "../../assets/Order Online/miniCards/inasal.png";
import kakanin from "../../assets/Order Online/miniCards/kakanin.png";
import merienda from "../../assets/Order Online/miniCards/merienda.png";
import pinoyMeals from "../../assets/Order Online/miniCards/pinoy meals.png";
import redCake from "../../assets/Order Online/miniCards/red cake.png";
import cakeRolls from "../../assets/Order Online/miniCards/cakeRolls.png";

// DATA IMAGE
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

const OrderOnline = () => {
  return (
    <div className="bg-white/80 min-h-screen font-sans">
      {/* Marquee Section */}
      <div className="relative">
        {/* Moving Images */}
        <Marquee autoFill speed={50} gradient={false}>
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
          {/* Background Overlay */}
          <div className="bg-black/40 absolute inset-0"></div>
        </Marquee>

        {/* Static Text Inside Marquee */}
        <div className="absolute inset-0  top-10 items-center left-16 z-10">
          <h2 className="w-60 md:w-[700px] text-6xl md:text-8xl font-Pacifico font-extrabold bg-clip-text text-transparent bg-gradient-to-bl from-red-600 via-white to-pink-600 mb-20">
            Order Your Favorites Now!
          </h2>

          <button className="flex gap-4 text-xl md:text-4xl font-bold text-red-400 hover:text-white items-center px-5 md:px-10 py-3 md:py-5 bg-white hover:bg-red-400 duration-150 rounded-full">
            TAP TO ORDER
          </button>
        </div>
      </div>

      {/* MINI CARDS */}
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
              className="border-4 bg-red-500 border-red-500 rounded-xl p-4 flex flex-col items-center cursor-pointer"
            >
              <h2 className="font-extrabold text-white text-lg mb-3">{item.name}</h2>
              <img src={item.img} alt={item.name} className="w-32 md:w-28" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
