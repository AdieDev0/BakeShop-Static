import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-stone-700 px-6 py-8 md:px-16 md:py-12 lg:px-36 lg:py-16">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Navigation Links */}
        <motion.ul
          className="flex flex-wrap justify-center gap-4 md:gap-6 items-center mb-6 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {[
            "OUR STORY",
            "PRIVACY POLICY",
            "CONTACT US",
          ].map((text, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-md text-red-600 font-semibold decoration-red-400 decoration-2 hover:underline underline-offset-4 transition duration-200 cursor-pointer"
            >
              {text}
            </motion.li>
          ))}
          {[IoLogoGithub, FaInstagram, FaFacebookSquare].map((Icon, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-md text-white hover:text-red-400 transition duration-200 cursor-pointer"
            >
              <Icon />
            </motion.li>
          ))}
        </motion.ul>

        {/* Flag Section */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          {["ph", "us", "jp"].map((country, index) => (
            <span key={index} className={`fi fi-${country} text-lg`} />
          ))}
        </motion.div>
      </div>

      {/* Footer Text */}
      <motion.div
        className="text-center text-sm font-Josefin-Sans mt-8 text-red-600 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <p>©2024 ADIE.DEV. Merry Christmas and Happy New Year!</p>
      </motion.div>
    </div>
  );
};

export default Footer;
