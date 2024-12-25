import React from "react";

const FeatureSelection = () => {
return (
<div className="bg-red-400 p-20 shadow-lg shadow-red-500">
    <h3 className="text-5xl text-white font-Josefin-Sans font-bold text-center mb-10">
    Featured Selections
    </h3>
    <div className="carousel w-full bg-white rounded-xl shadow-md">
    <div id="item1" className="carousel-item w-full">
        <img
        src="https://wallpaperaccess.com/full/6450353.jpg"
        className="w-full h-[500px] object-cover"
        />
    </div>
    <div id="item2" className="carousel-item w-full">
        <img
        src="https://wallpaperaccess.com/full/12937153.jpg"
        className="w-full h-[500px] object-cover"
        />
    </div>
    <div id="item3" className="carousel-item w-full">
        <img
        src="https://wallpaperaccess.com/full/6450420.jpg"
        className="w-full h-[500px] object-cover"
        />
    </div>
    <div id="item4" className="carousel-item w-full">
        <img
        src="https://wallpaperaccess.com/full/6450504.jpg"
        className="w-full h-[500px] object-cover"
        />
    </div>
    </div>
    <div className="flex w-full justify-center gap-2 py-2">
    <a
        href="#item1"
        className="border px-3 rounded-lg font-bold font-Josefin-Sans bg-white text-red-500 border-red-500 hover:bg-red-600 hover:text-white duration-200"
    >
        1
    </a>
    <a
        href="#item2"
        className="border px-3 rounded-lg font-bold font-Josefin-Sans bg-white text-red-500 border-red-500 hover:bg-red-600 hover:text-white duration-200"
    >
        2
    </a>
    <a
        href="#item3"
        className="border px-3 rounded-lg font-bold font-Josefin-Sans bg-white text-red-500 border-red-500 hover:bg-red-600 hover:text-white duration-200"
    >
        3
    </a>
    <a
        href="#item4"
        className="border px-3 rounded-lg font-bold font-Josefin-Sans bg-white text-red-500 border-red-500 hover:bg-red-600 hover:text-white duration-200"
    >
        4
    </a>
    </div>
</div>
);
};

export default FeatureSelection;
