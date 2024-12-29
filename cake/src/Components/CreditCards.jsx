import React from "react";
import Bcards from "../assets/No Background PNG/CreditCards.png";
const CreditCards = () => {
  return (
    <div className="bg-gradient-to-b from-red-400 via-white to-white">
      <div className="flex justify-between items-center">
        <img src={Bcards} alt="/" className="w-96" />
        <div className="w-96">
          <p className="text-black font-Josefin-Sans text-3xl">
            Please be advised that the Credit Cards will be discontinued on
            October 31, 2024c
          </p>
          <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-200 hover:rounded-none font-semibold rounded-2xl font-Josefin-Sans px-5 text-lg md:text-xl py-2 mt-5">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
