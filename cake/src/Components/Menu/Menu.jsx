import React from "react";
import { motion } from "framer-motion";
import ChocoTruff from "../../assets/Menu/Chocolate truffle.png";
import BirthdayCake from "../../assets/Menu/BirthdayCake.png";
import TorteWedding from "../../assets/Menu/TorteWedding.png";
import FrostingCake from "../../assets/Menu/FrostingCake.png";
import CakeTart from "../../assets/Menu/CakeTart.png";
import CreamChocoCake from "../../assets/Menu/CreamChocolateCake.png";
import GermanCake from "../../assets/Menu/GermanCake.png";
import IceCreamCake from "../../assets/Menu/IceCreamCake.png";
import DrippingCake from "../../assets/Menu/DrippingCake.png";
import CustardSpongeCake from "../../assets/Menu/CustardSpongeCake.png";
import StrawberryCreamCake from "../../assets/Menu/StrawberryCreamCake.png";
import PastryMoonCake from "../../assets/Menu/PastryMoonCake.png";

const cakes = [
  { id: 1, name: "Chocolate Truffle", image: ChocoTruff },
  { id: 2, name: "Birthday Cake Cupcake", image: BirthdayCake },
  { id: 3, name: "Torte Wedding Cake", image: TorteWedding },
  { id: 4, name: "Frosting & Icing Wedding Cake", image: FrostingCake },
  { id: 5, name: "Chocolate cake Birthday cake Tart", image: CakeTart },
  { id: 6, name: "Cream Chocolate cake Bakery Birthday cake", image: CreamChocoCake },
  { id: 7, name: "German chocolate cake Fruitcake Layer cake Torte", image: GermanCake },
  { id: 8, name: "Ice cream Chocolate cake Chocolate brownie", image: IceCreamCake },
  { id: 9, name: "Dripping cake Chocolate cake Birthday cake", image: DrippingCake },
  { id: 10, name: "Torta Cupcake Bakery Custard Sponge cake", image: CustardSpongeCake },
  { id: 11, name: "Birthday cake Wedding cake Chocolate cake Strawberry cream cake Black Forest gateau", image: StrawberryCreamCake },
  { id: 12, name: "German chocolate cake Pastry Ice cream Gelato, pastry moon cake", image: PastryMoonCake },
];

const Menu = () => {
  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 min-h-screen py-10 px-5 md:px-20 font-sans">
      <div className="bg-white py-10 px-5 md:px-10 lg:px-20 rounded-xl max-w-7xl mx-auto shadow-lg">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-Josefin-Sans font-semibold text-2xl md:text-3xl text-black">
            GREETING CAKES
          </h1>
          {/* SEARCH */}
          <input
            type="search"
            placeholder="Search"
            className="w-64 bg-white border-2 border-red-300 text-black/80 font-Josefin-Sans font-medium rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <p className="text-black/70 font-Josefin-Sans font-medium mb-10">
          Disclaimer: For available products visit your nearest branch or{' '}
          <span className="underline italic text-red-400 cursor-pointer">
            ButterCup.ph
          </span>
        </p>

        {/* CAKE SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cakes.map((cake) => (
            <motion.div
              key={cake.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg border-4 border-red-400 cursor-pointer"
            >
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <p className="mt-2 text-black font-Josefin-Sans font-medium">
                {cake.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer text-base-content p-10 mt-10">
          <nav>
            <h6 className="footer-title text-xl text-black">Services</h6>
            <a className="link link-hover text-black">Branding</a>
            <a className="link link-hover text-black">Design</a>
            <a className="link link-hover text-black">Marketing</a>
            <a className="link link-hover text-black">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-xl text-black">Company</h6>
            <a className="link link-hover text-black">About us</a>
            <a className="link link-hover text-black">Contact</a>
            <a className="link link-hover text-black">Jobs</a>
            <a className="link link-hover text-black">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-xl text-black">Legal</h6>
            <a className="link link-hover text-black">Terms of use</a>
            <a className="link link-hover text-black">Privacy policy</a>
            <a className="link link-hover text-black">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title text-xl text-black">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-black">
                  Enter your email address
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="ButterCup@site.com"
                  className="input input-bordered join-item bg-white placeholder-black/60 border-2"
                />
                <button className="btn join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Menu;
