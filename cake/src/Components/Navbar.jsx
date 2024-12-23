import React from "react";
import cake from "../assets/Cake.png";
import { BsSearchHeart } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="z-50 sticky bg-pink-400 px-52 py-4 w-full shadow-md">
      <div className="flex justify-between">
        {/* LOGO AND BAKESHOP NAME */}
        <div className="gap-3 flex items-center">
          <img src={cake} alt="/" className="size-12 cursor-pointer" />
          <h3 className="text-2xl text-white font-medium font-Pacifico cursor-pointer">
            ButterCup
          </h3>
        </div>
        {/* NAVIGATION */}
        <div className="flex gap-5 items-center">
          <h2 className="text-md text-white font-semibold decoration-pink-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer">
            MENU
          </h2>
          <h2 className="text-md text-white font-semibold decoration-pink-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition  font-Josefin-Sans cursor-pointer">
            LOCATION
          </h2>
          <h2 className="text-md text-white font-semibold decoration-pink-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer">
            PROMOS
          </h2>
          <h2 className="text-md text-white  font-semibold decoration-pink-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer">
            FRANCHISING
          </h2>
          <h2 className="text-md text-white font-semibold decoration-pink-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer">
            CAREERS
          </h2>
          <h2 className="text-md text-white font-semibold decoration-pink-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer">
            ORDER ONLINE
          </h2>
          <BsSearchHeart className="cursor-pointer size-7 text-white ml-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
