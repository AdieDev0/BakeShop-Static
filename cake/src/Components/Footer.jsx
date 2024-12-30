import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-white/50 min-h-screen">
      <div>
        {/* unorder list */}
        <ul className="flex gap-5 items-center">
          <li className="text-md text-white font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer">
            OUR STORY
          </li>
          <li className="text-md text-white font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer">
            PRIVACY POLICY
          </li>
          <li className="text-md text-white font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer">
            CONTACT US
          </li>
          <IoLogoGithub className="text-md text-white font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer" />
          <FaInstagram className="text-md text-white font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer" />
          <FaFacebookSquare className="text-md text-white font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer" />
        </ul>

        {/* Flag */}
      </div>
    </div>
  );
};

export default Footer;
