import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";

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
    <div>
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
        <div className="absolute inset-0 flex items-center left-16 z-10">
          <h2 className="w-60 md:w-[700px] text-6xl md:text-8xl font-Pacifico font-extrabold bg-clip-text text-transparent bg-gradient-to-bl from-red-600 via-white to-pink-600 mb-20">
            Order Your Favorites Now!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
