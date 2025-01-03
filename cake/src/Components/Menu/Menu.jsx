import React from "react";
import ChocoTruff from "../../assets/Menu/Chocolate truffle.png";
const Menu = () => {
  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 min-h-screen py-10 px-5 md:px-20 font-sans">
      <div className="bg-white py-10 px-5 md:px-10 lg:px-20 rounded-xl max-w-7xl mx-auto shadow-lg">
        {/* SEARCH */}
        <input
          type="search"
          placeholder="Search"
          className="bg-white border-2 border-red-300 text-black/80 font-Josefin-Sans font-medium rounded-lg py-1 px-2 "
        />
        {/* CAKE SECTION */}
        <div className="text-center">
          <h1 className="font-Josefin-Sans font-semibold text-2xl text-black mb-2">
            GREETING CAKES
          </h1>
          <p className="text-black/70 font-Josefin-Sans font-medium mb-10">
            Disclaimer: For availble products visit your nearest branch or {""}
            <span className="underline italic text-red-400 cursor-pointer">
              ButterCup.ph
            </span>
          </p>

          {/* CAKE IMAGE */}
          <div className="flex justify-between">
            <div>
              <img
                src={ChocoTruff}
                alt=""
                className="w-64 border-4 border-red-400 rounded-md cursor-pointer p-5 relative hover:bg-pink-200 duration-300"
              />
            </div>
            <div>
              <img
                src={ChocoTruff}
                alt=""
                className="w-64 border-4 border-red-400 rounded-md cursor-pointer p-5 relative hover:bg-pink-200 duration-300"
              />
            </div>
            <div>
              <img
                src={ChocoTruff}
                alt=""
                className="w-64 border-4 border-red-400 rounded-md cursor-pointer p-5 relative hover:bg-pink-200 duration-300"
              />
            </div>
            <div>
              <img
                src={ChocoTruff}
                alt=""
                className="w-64 border-4 border-red-400 rounded-md cursor-pointer p-5 relative hover:bg-pink-200 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
