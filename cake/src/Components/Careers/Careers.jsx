import React from "react";
import { motion } from "framer-motion";
import Baker from "../../assets/CareersIMG/Baker.jpg";
import Customer from "../../assets/CareersIMG/Customer.png";
import Girl from "../../assets/CareersIMG/Girl.jpeg";

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.97,
  },
};

const Careers = () => {
  const cardsData = [
    {
      image: Baker,
      title: "Interested? Submit your application today!",
      bgColor: "bg-[rgba(255,231,217,0.8)]",
    },
    {
      image: Customer,
      title: "Be a part of our team and send your resume to us at: ButterCup.ph",
      bgColor: "bg-[rgba(255,231,217,0.8)]",
    },
    {
      image: Girl,
      title: `You may also send your resume through Regular Postal Mail at:

HR Department
ButterCup Cake Plant Building
299 Quezon CircleGeometry, Metro Manila`,
      bgColor: "bg-[rgba(255,231,217,0.8)]",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 min-h-screen py-10 px-5 md:px-20 font-sans">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl max-w-7xl mx-auto shadow-lg">
        {/* Heading */}
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 tracking-tight font-Josefin-Sans"
        >
          CAREERS
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg text-center text-gray-600 mb-10 font-Josefin-Sans max-w-3xl mx-auto"
        >
          Experience sweet success with our growing family and be part of the
          country's number one bakeshop today!
        </motion.p>

        {/* Cards */}
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
                <motion.h3
                  className="text-pink-600 font-bold text-xl md:text-2xl text-center px-4 font-Josefin-Sans"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  {card.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
