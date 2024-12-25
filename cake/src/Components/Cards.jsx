import React from "react";
import birthdayCake from "../assets/cards/BirthdayCake.jpg";
import foodShop from "../assets/cards/foodShop.jpg";
import party from "../assets/cards/party.jpg";
import cakeIcon from "../assets/cards/CakeIcon.png";

const Cards = () => {
  return (
    <div className="bg-white p-20">
      <div className="flex gap-5 justify-between">
        {/* IMAGE 1 */}
        <div className="size-96 relative cursor-pointer group">
          <img
            src={birthdayCake}
            alt="Birthday Cake"
            className="object-cover inset-0 w-full h-full absolute rounded-xl group-hover:opacity-40 transition-opacity duration-200"
          />
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(251,168,180,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
            <img src={cakeIcon} alt="Cake Icon" className="w-24 h-24 mb-2" />
            <h3 className="text-white">Shop</h3>
          </div>
        </div>

        {/* IMAGE 2 */}
        <div className="border size-96 relative cursor-pointer group">
          <img
            src={foodShop}
            alt="Bake Shop"
            className="object-cover inset-0 w-full h-full absolute rounded-xl group-hover:opacity-40 transition-opacity duration-200"
          />
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(251,168,180,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
            <img src={cakeIcon} alt="Cake Icon" className="w-24 h-24 mb-2" />
            <h3 className="text-white">Bakeshop</h3>
          </div>
        </div>
        {/* IMAGE 3 */}
        <div className="border size-96 relative cursor-pointer group">
          <img
            src={party}
            alt="Party"
            className="object-cover inset-0 w-full h-full absolute rounded-xl group-hover:opacity-40 transition-opacity duration-200"
          />
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(251,168,180,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
            <img src={cakeIcon} alt="Cake Icon" className="w-24 h-24 mb-2" />
            <h3 className="text-white">Party's</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
