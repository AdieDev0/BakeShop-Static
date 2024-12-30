import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-stone-700 h-40 px-36 py-10">
      <div className="flex justify-between">
        {/* unorder list */}
        <ul className="flex gap-5 items-center">
          <li className="text-md text-red-600 font-semibold decoration-red-400 decoration-2 hover:underline underline-offset-[17px] duration-200 transition font-Josefin-Sans cursor-pointer">
            OUR STORY
          </li>
          <li className="text-md text-red-600 font-semibold decoration-red-400 decoration-2 hover:underline underline-offset-[17px] duration-200 transition font-Josefin-Sans cursor-pointer">
            PRIVACY POLICY
          </li>
          <li className="text-md text-red-600 font-semibold decoration-red-400 decoration-2 hover:underline underline-offset-[17px] duration-200 transition font-Josefin-Sans cursor-pointer">
            CONTACT US
          </li>
          <IoLogoGithub className="text-md text-white font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer" />
          <FaInstagram className="text-md text-white font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer" />
          <FaFacebookSquare className="text-md text-white font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer" />
        </ul>

        {/* Flag */}
        <div>
        <span class="ph PH-gr"></span>
        </div>
      </div>
      {/* Origin */}
      <div className="text-center mt-14 text-red-600">
        <p>©2024 ADIE.DEV. Merry Christmas and Happy New Year!</p>
      </div>
    </div>
  );
};

export default Footer;
