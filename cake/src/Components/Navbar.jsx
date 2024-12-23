import React from "react";
import cake from '../assets/Cake.png'
import { BsSearchHeart } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="z-50 sticky">
      <div className="flex justify-between">
        {/* LOGO AND BAKESHOP NAME */}
        <div className="gap-5 flex items-center">
            <img src={cake} alt="/" className="size-12" />
            <h3>ButterCup</h3>
        </div>
        {/* NAVIGATION */}
        <div className="flex gap-5 items-center">
            <h2 className="text-lg">MENU</h2>
            <h2 className="text-lg">LOCATION</h2>
            <h2 className="text-lg">PROMOS</h2>
            <h2 className="text-lg">FRANCHISING</h2>
            <h2 className="text-lg">CAREERS</h2>
            <h2 className="text-lg">ORDER ONLINE</h2>
            <BsSearchHeart className="cursor-pointer size-7"/> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
