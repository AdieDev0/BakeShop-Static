import React from "react";
import Bakery from "../../assets/Franchise/Bakery.png";
const Franchise = () => {
  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 min-h-screen py-10 px-5 md:px-20 font-sans">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl max-w-7xl mx-auto shadow-lg">
        {/* TEXT BODY */}
        <div className="text-center justify-center mx-80 mb-5">
          <h1 className="text-black font-Josefin-Sans text-2xl font-semibold mb-5">
            FRANCHISING
          </h1>
          <p className="text-xs text-black/70 font-Josefin-Sans">
            BUTTERCUP traces its roots to the collaboration and complementary
            talents of the women, whose collective love for good food fueled
            what has been transformed into the global enterprise today.
          </p>
        </div>
        {/* image and text */}
        <div className="text-center justify-center items-center mb-16">
          <img src={Bakery} alt="/" className=" w-[600px] mx-auto" />
        </div>

        {/* CONTENT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 px-60 gap-10 mb-10">
          <div className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              BRAND LEADERSHIP
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              ButterCup is a leading name in the bakery industry, offering a
              wide array of delectable baked goods crafted with love and
              precision. Discover why our customers keep coming back for more!
            </p>
          </div>

          <div className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              MARK OF EXCELLENCE
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              Recognized for exceptional quality and service, ButterCup has
              earned numerous awards and accolades for its outstanding
              contributions to the bakery industry.
            </p>
          </div>

          <div className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              SERVICE AND RELIABILITY
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              ButterCup's commitment to excellence extends beyond its products
              to its customer service. We ensure every customer enjoys a
              delightful experience.
            </p>
          </div>

          <div className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              EXCELLENT OPERATING SYSTEMS
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              Our comprehensive training and support systems help franchisees
              deliver consistent quality and grow their businesses effectively.
            </p>
          </div>

          <div className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              BREAKTHROUGH CONCEPTS
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              From unique product offerings to innovative business strategies,
              ButterCup continues to set trends in the bakery industry.
            </p>
          </div>

          <div className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              INNOVATIVE STORE DESIGNS AND LAYOUT
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              Our store designs are crafted to provide a welcoming and efficient
              experience for our customers. Join us and create an inviting space
              for all.
            </p>
          </div>
        </div>

        {/* BG TEXT */}
        <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 px-10 py-5 mb-10">
          <p className="text-center text-white font-Josefin-Sans">
            Little did the founders know that this "Whether you're a first-time
            franchisee or a seasoned investor, Buttercup has several franchise
            schemes to suit your investment needs."
          </p>
        </div>

        {/* COLLAPSE SECTION */}
        <div>
          <div tabIndex={0} className="collapse bg-base-200">
            <div className="collapse-title text-xl font-medium">
              Focus me to see content
            </div>
            <div className="collapse-content">
              <p>
                tabindex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
