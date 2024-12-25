import React from "react";
import { motion } from "framer-motion";
import birthdayCake from "../assets/cards/BirthdayCake.jpg";
import foodShop from "../assets/cards/foodShop.jpg";
import party from "../assets/cards/party.jpg";
import cakeIcon from "../assets/cards/CakeIcon.png";
import Shop from "../assets/cards/Shop.png";
import Party from "../assets/cards/Party.png";

const cardVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.97,
  },
};

const Cards = () => {
  const cardsData = [
    {
      image: birthdayCake,
      icon: cakeIcon,
      title: "Shop Cakes",
      bgColor: "bg-[rgba(255,231,217,0.8)]",
    },
    {
      image: foodShop,
      icon: Shop,
      title: "Bakeshop",
      bgColor: "bg-[rgba(255,231,217,0.8)]",
    },
    {
      image: party,
      icon: Party,
      title: "Party Services",
      bgColor: "bg-[rgba(255,231,217,0.8)]",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen p-10 md:p-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-10 tracking-tight">
          Welcome to Sweet Moments
        </h1>
        <p className="text-lg text-center text-gray-600 mb-16">
          Your go-to bakeshop for delightful cakes, treats, and party services. 
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-64 sm:h-72 transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center ${card.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <img src={card.icon} alt={`${card.title} Icon`} className="w-14 h-14 mb-4" />
                <h3 className="text-gray-800 font-semibold text-2xl">{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
