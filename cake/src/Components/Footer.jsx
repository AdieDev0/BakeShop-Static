import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-white/50">
      <div>
        <ul className="flex gap-5">
          <li>OUR STORY</li>
          <li>PRIVACY POLICY</li>
          <li>CONTACCT US</li>
          <IoLogoGithub />
          <FaInstagram />
          <FaFacebookSquare />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
