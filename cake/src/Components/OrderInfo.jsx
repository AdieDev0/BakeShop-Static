import React from "react";
import cake from "../assets/Cake.png";
import ChocoCake from "../assets/No Background PNG/ChocoCake.png";
const OrderInfo = () => {
  return (
    <div className="bg-white w-full px-10">
      <div className="flex items-center">
        <img src={ChocoCake} alt="" className="w-[800px]" />
        {/* LOGO AND NAME */}
        <div className="text-center">
          <p className="font-Pacifico text-6xl text-red-400 font-bold mb-3">
            ButterCup{" "}
            <span className="font-bold font-Josefin-Sans">Delivery</span>
          </p>
          <h1 className="text-3xl italic font-bold text-red-400">
            9999-5-201
          </h1>
          <h1 className="text-2xl italic font-semibold text-red-400">
            buttercupdelivery.ph
          </h1>
          <h1 className="text-sm italic font-bold text-red-400">
            For Metro Manila and rizal areas only
          </h1>

          <p className="w-96 mx-auto mt-5 font-Josefin-Sans text-black/50 font-medium">
            Order from ButterCup Delivery and have your favorite Pinoy products
            delivered at your doorstep!
          </p>

          <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-100 hover:rounded-none font-semibold rounded-2xl font-Josefin-Sans px-5 text-xl py-2 mt-5 ">
            ORDER NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
