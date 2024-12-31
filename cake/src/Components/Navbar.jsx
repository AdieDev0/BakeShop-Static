import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import cake from "../assets/Cake.png";
import { BsSearchHeart } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [menuIconTransition, setMenuIconTransition] = useState(false);
  const loadingRef = useRef(null);

  useEffect(() => {
    if (loadingRef.current) {
      loadingRef.current.classList.add("hidden");
    }
  }, []);

  const toggleSidebar = () => {
    setMenuIconTransition(true);
    setIsSidebarOpen(!isSidebarOpen);
    setTimeout(() => setMenuIconTransition(false), 300); // Match the duration of the sidebar transition
  };

  const navItems = [
    { name: "MENU", path: "/menu" },
    { name: "LOCATION", path: "/location" },
    { name: "PROMOS", path: "/promos" },
    { name: "FRANCHISING", path: "/franchising" },
    { name: "CAREERS", path: "/careers" },
    { name: "ORDER ONLINE", path: "/order-online" },
  ];

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
      <div className="z-50 sticky bg-red-400 px-5 md:px-52 py-4 w-full shadow-lg shadow-red-500">
        <div className="flex justify-between items-center">
          {/* Logo and Bakeshop Name */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={cake} alt="/" className="w-12 cursor-pointer" />
            <h3 className="text-2xl text-white font-medium font-Pacifico cursor-pointer">
              ButterCup
            </h3>
          </NavLink>

          {/* Navigation for larger screens */}
          <div className="hidden md:flex gap-5 items-center">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `text-md font-semibold decoration-red-200 decoration-2 hover:underline underline-offset-[30px] duration-200 transition font-Josefin-Sans cursor-pointer ${
                    isActive ? "text-yellow-300" : "text-white"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
            <BsSearchHeart className="cursor-pointer text-xl text-white ml-5" />
          </div>

          {/* Menu Button for smaller screens */}
          <button
            className={`md:hidden text-white text-2xl focus:outline-none transition-transform duration-300 ${
              menuIconTransition && "rotate-90"
            }`}
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-red-400 text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full mt-5">
          {/* Close Button */}
          <div className="flex items-center justify-between p-4">
            <h3 className="text-xl font-Pacifico">ButterCup</h3>
            <button
              className="text-white text-2xl focus:outline-none"
              onClick={toggleSidebar}
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center py-2 px-4 rounded hover:bg-red-500 font-Josefin-Sans text-xl ${
                    isActive ? "bg-red-600" : ""
                  }`
                }
                onClick={toggleSidebar} // Close sidebar on navigation
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
