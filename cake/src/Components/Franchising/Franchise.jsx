import React from "react";

const Franchise = () => {
  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 min-h-screen py-10 px-5 md:px-20 font-sans">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl max-w-7xl mx-auto shadow-lg">
        {/* TEXT BODY */}
        <div className="text-center justify-center mx-80">
          <h1 className="text-black font-Josefin-Sans text-2xl font-semibold mb-5">FRANCHISING</h1>
          <p className="text-xs text-black/70 font-Josefin-Sans">
            BUTTERCUP traces its roots to the collaboration and complementary
            talents of the women, whose collective love for good food fueled
            what has been transformed into the global enterprise today.
          </p>
        </div>
        {/* image and text */}
      </div>
    </div>
  );
};

export default Franchise;
