import React from "react";
import birthdayCake from "../assets/cards/BirthdayCake.jpg";
import foodShop from "../assets/cards/foodShop.jpg";
import party from "../assets/cards/party.jpg";
import cakeIcon from "../assets/cards/CakeIcon.png";
import Shop from "../assets/cards/Shop.png";
import Party from "../assets/cards/Party.png";

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
          {/* HOVER */}
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(251,168,180,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
            <img src={cakeIcon} alt="Cake Icon" className="size-36 mb-2" />
            <h3 className="text-white font-Pacifico font-medium text-5xl">
              Shop
            </h3>
          </div>
        </div>

        {/* IMAGE 2 */}
        <div className="border size-96 relative cursor-pointer group">
          <img
            src={foodShop}
            alt="Bake Shop"
            className="object-cover inset-0 w-full h-full absolute rounded-xl group-hover:opacity-40 transition-opacity duration-200"
          />
          {/* HOVER */}
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(251,168,180,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
            <img src={Shop} alt="Cake Icon" className="size-36 mb-2" />
            <h3 className="text-white font-Pacifico font-medium text-5xl">
              Bakeshop
            </h3>
          </div>
        </div>
        {/* IMAGE 3 */}
        <div className="border size-96 relative cursor-pointer group">
          <img
            src={party}
            alt="Party"
            className=" object-cover inset-0 w-full h-full absolute rounded-xl group-hover:opacity-40 transition-opacity duration-200"
          />
          {/* HOVER */}
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(251,168,180,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
            <img src={Party} alt="Cake Icon" className="size-36 mb-2" />
            <h3 className="text-white font-Pacifico font-medium text-5xl">
              Party's
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
