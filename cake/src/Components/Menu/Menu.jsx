import React from "react";

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
          <p className="text-black/70 font-Josefin-Sans font-medium">
            Disclaimer: For availble products visit your nearest branch or {""}
            <span className="underline italic text-red-400 cursor-pointer">ButterCup.ph</span>
          </p>


          {/* CAKE IMAGE */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
