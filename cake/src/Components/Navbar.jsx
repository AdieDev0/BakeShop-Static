import React, { useState, useRef, useEffect } from "react";
import cake from "../assets/Cake.png";
import { BsSearchHeart } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiHome, HiLogout } from "react-icons/hi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const loadingRef = useRef(null);

  useEffect(() => {
    if (loadingRef.current) {
      loadingRef.current.classList.add("hidden");
    }
  }, []);

  return (
    <div className="relative">
      {/* Loading Screen */}
      <div
        ref={loadingRef}
        className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-blue-600"
      >
        Loading.....
      </div>

      {/* Navbar */}
      <div className="z-50 sticky bg-pink-400 px-5 md:px-52 py-4 w-full shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo and Bakeshop Name */}
          <div className="flex items-center gap-3">
            <img src={cake} alt="/" className="w-12 cursor-pointer" />
            <h3 className="text-2xl text-white font-medium font-Pacifico cursor-pointer">
              ButterCup
            </h3>
          </div>

          {/* Navigation for larger screens */}
          <div className="hidden md:flex gap-5 items-center">
            {[
              "MENU",
              "LOCATION",
              "PROMOS",
              "FRANCHISING",
              "CAREERS",
              "ORDER ONLINE",
            ].map((item) => (
              <h2
                key={item}
                className="text-md text-white font-semibold decoration-pink-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer"
              >
                {item}
              </h2>
            ))}
            <BsSearchHeart className="cursor-pointer text-xl text-white ml-5" />
          </div>

          {/* Menu Button for smaller screens */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-pink-400 text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full mt-5">
          {/* Close Button */}
          <div className="flex items-center justify-between p-4">
            <h3 className="text-xl font-Pacifico">ButterCup</h3>
            <button
              className="text-white text-2xl focus:outline-none"
              onClick={() => setIsSidebarOpen(false)}
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            {[
              { name: "Home", icon: <HiHome /> },
              { name: "Logout", icon: <HiLogout /> },
              { name: "Menu", icon: <HiHome /> },
              { name: "Promos", icon: <HiHome /> },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center gap-2 py-2 px-4 rounded hover:bg-pink-500"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
