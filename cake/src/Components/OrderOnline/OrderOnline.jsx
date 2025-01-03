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
      <Marquee autoFill>
        <div className="flex relative">
          <img src={Cake} alt="/" className="w-80" />
          <img src={icedCoffee} alt="/" className="w-80" />
          <img src={sisig} alt="/" className="w-80" />
          <img src={Cherry} alt="/" className="w-80" />
          <img src={Mocha} alt="/" className="w-80" />
          <img src={fiesta} alt="/" className="w-80" />
          <img src={Triple} alt="/" className="w-80" />
          <img src={shanghai} alt="/" className="w-80" />
          <img src={Cream} alt="/" className="w-80" />
          <img src={DarkChoco} alt="/" className="w-80" />
          {/* BACKGROUND COLOR */}
          <div className="bg-black/40 absolute inset-0"></div>
        </div>
      </Marquee>
    </div>
  );
};

export default OrderOnline;
