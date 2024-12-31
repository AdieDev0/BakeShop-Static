import React from "react";
import { motion } from "framer-motion";
import ThreeCakes from "../assets/No Background PNG/ThreeCakes.png";

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
  tap: { scale: 0.95 },
};

const CustomCake = () => {
  return (
    <div className="bg-gradient-to-b from-white via-white to-red-400 w-full px-6 md:px-10 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Logo and Text */}
        <motion.div
          className="text-center"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="font-Pacifico text-4xl md:text-6xl text-red-400 font-bold mb-3">
            ButterCup{" "}
            <span className="font-bold font-Josefin-Sans">Delivery</span>
          </p>
          <h1 className=" text-lg md:text-xl font-bold text-white rounded-full bg-red-400  mx-40 py-1">
            Custom Cakes
          </h1>
          
          <p className="w-full max-w-md mx-auto mt-5 font-Josefin-Sans text-black/50 font-medium">
          Celebrate every milestone with a customized cake from ButterCup
          </p>
          <motion.button
            className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-200 hover:rounded-none font-semibold rounded-2xl font-Josefin-Sans px-5 text-lg md:text-xl py-2 mt-5"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            LEARN MORE!
          </motion.button>
        </motion.div>
        {/* Cake Image */}
        <motion.img
          src={ThreeCakes}
          alt="Choco Cake"
          className="w-[300px] md:w-[500px] lg:w-[700px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1.2, ease: "easeOut" },
          }}
        />
      </div>
    </div>
  );
};

export default CustomCake;
