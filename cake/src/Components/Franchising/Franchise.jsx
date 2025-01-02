import React from "react";
import { motion } from "framer-motion";
import Bakery from "../../assets/Franchise/Bakery.png";

const Franchise = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 min-h-screen py-10 px-5 md:px-20 font-sans">
      <div className="bg-white py-10 px-5 md:px-10 lg:px-20 rounded-xl max-w-7xl mx-auto shadow-lg">
        {/* TEXT BODY */}
        <motion.div
          className="text-center justify-center mx-auto mb-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="text-black font-Josefin-Sans text-3xl font-bold mb-5">
            FRANCHISING
          </h1>
          <p className="text-sm text-black/70 font-Josefin-Sans">
            BUTTERCUP traces its roots to the collaboration and complementary
            talents of the women, whose collective love for good food fueled
            what has been transformed into the global enterprise today.
          </p>
        </motion.div>

        {/* IMAGE AND TEXT */}
        <motion.div
          className="text-center justify-center items-center mb-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <img
            src={Bakery}
            alt="Bakery"
            className="w-[90%] sm:w-[80%] md:w-[600px] mx-auto"
          />
        </motion.div>

        {/* CONTENT SECTION */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 lg:px-20 mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={sectionVariants} className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              BRAND LEADERSHIP
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              ButterCup is a leading name in the bakery industry, offering a
              wide array of delectable baked goods crafted with love and
              precision. Discover why our customers keep coming back for more!
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              MARK OF EXCELLENCE
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              Recognized for exceptional quality and service, ButterCup has
              earned numerous awards and accolades for its outstanding
              contributions to the bakery industry.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              SERVICE AND RELIABILITY
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              ButterCup's commitment to excellence extends beyond its products
              to its customer service. We ensure every customer enjoys a
              delightful experience.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              EXCELLENT OPERATING SYSTEMS
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              Our comprehensive training and support systems help franchisees
              deliver consistent quality and grow their businesses effectively.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              BREAKTHROUGH CONCEPTS
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              From unique product offerings to innovative business strategies,
              ButterCup continues to set trends in the bakery industry.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} className="text-left">
            <h2 className="text-black/60 font-Josefin-Sans text-lg font-bold mb-2">
              INNOVATIVE STORE DESIGNS AND LAYOUT
            </h2>
            <p className="text-sm text-black/70 font-Josefin-Sans">
              Our store designs are crafted to provide a welcoming and efficient
              experience for our customers. Join us and create an inviting space
              for all.
            </p>
          </motion.div>
        </motion.div>

        {/* BG TEXT */}
        <motion.div
          className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 px-10 py-5 mb-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <p className="text-center text-white font-Josefin-Sans">
            Little did the founders know that this "Whether you're a first-time
            franchisee or a seasoned investor, Buttercup has several franchise
            schemes to suit your investment needs."
          </p>
        </motion.div>

        {/* COLLAPSE SECTION */}
        <motion.div
          className="px-5 md:px-10 lg:px-20"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          {/* 1 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              What is the ButterCup Franchise Agreement?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                The Franchise Agreement grants the franchisee the right to
                operate a specific ButterCup Store, at a single address, for a
                period of 5 years. These rights include the use of the ButterCup
                trade name and trademarks, proprietary products, store design,
                signage, and the use of ButterCup methods of operation. In
                return, the franchisee agrees to operate the business in
                accordance with ButterCup's established standards of quality,
                service, cleanliness, and customer service. The franchisee is
                expected to do their utmost best to operate the store to achieve
                its fullest potential in terms of profitability and customer
                delight.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              What does ButterCup look for in a prospective Franchisee?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                ButterCup looks for a franchise applicant with the following
                characteristics:
              </p>
              <ul className="text-black font-Josefin-Sans">
                <li>
                  Highly motivated and shares the same values as ButterCup in
                  terms of commitment to quality and service.
                </li>
                <li>
                  Dedicated to running the business on a full-time basis, not as
                  an investor but as a hands-on operator (owner/manager).
                </li>
                <li>
                  Financially capable of meeting the financial requirements.
                </li>
                <li>
                  With an entrepreneurial drive, willing to take calculated
                  risks, and with a strong desire to succeed.
                </li>
                <li>
                  With business management skills, preferably with food or
                  retail experience.
                </li>
                <li>Very good interpersonal relationship skills.</li>
                <li>Willing to operate within the ButterCup system.</li>
              </ul>
            </div>
          </div>
          {/* 3 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              How much is the franchise fee?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                The franchise fee, which is paid upon the signing of the
                franchise agreement, is for the right to use ButterCup's
                trademark and business system as well as for the pre-opening
                activities at the start of the franchise agreement, such as site
                evaluation, assistance in recruitment, and training for the
                initial store team. Franchise fee for the bakeshop is P250,000.
                (Exclusive of VAT)
              </p>
            </div>
          </div>

          {/* 4 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              Does ButterCup provide financing?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                No, ButterCup does not provide financing.
              </p>
            </div>
          </div>
          {/* 5 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              How long is the Franchise Term?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                The Franchise term is for five (5) years.
              </p>
            </div>
          </div>
          {/* 6 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              How much is the Advertising Fee?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                The advertising fee is 3 % of the total sales derived from both
                bakeshop and foodshop items and is paid on a monthly basis.
              </p>
            </div>
          </div>
          {/* 7 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              Will ButterCup provide the manpower to operate the store?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                ButterCup team will assist the franchise in the recruitment of
                its personnel in terms of screening and testing free of charge
                for the initial store team but recruitment cost will be charged
                for succeeding hires. Transportation, lodging cost and out of
                pocket expenses incurred for localized hiring outside Metro
                Manila will be charged to the franchisee. The store personnel
                will be directly hired by the franchisee and will be responsible
                for their salaries and benefits.
              </p>
            </div>
          </div>
          {/* 8 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              Who looks for the location?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                When you apply for the ButterCup franchise, you may propose a
                site location, together with an initial market study of the
                proposed site, which will include the foot and vehicular count,
                and demographics (area profile). Our Business Development
                Department will assess the site and validate the market study.
              </p>
            </div>
          </div>
          {/* 9 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              What are the required sizes of the store space?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                For the Bakeshop – Minimum of 29-60sqm
              </p>
            </div>
          </div>
          {/* 10 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              Is there a standard store design?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                Yes, there is a standard ButterCup store design, lay out,
                equipment and facilities requirements for each type of store.
              </p>
            </div>
          </div>
          {/* 11 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              What continuing support will I receive?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                On going support includes regular in – store visits to help you
                identify areas of improvement, assistance in the development of
                marketing and customer relations programs and activities, new
                operating procedures, and much more.
              </p>
            </div>
          </div>
          {/* 12 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              What will my return in investment be?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                Although the brand name of ButterCup is a strong sales inducing
                factor, the amount of revenue a franchisee can expect to make
                will greatly depend on the ability of the franchisee to manage
                the business, drive sales volume, and control operating costs.
              </p>
            </div>
          </div>
          {/* 13 */}
          <div tabIndex={0} className="collapse">
            <div className="collapse-title text-xl font-medium text-black border-b-2 border-red-400">
              Is there territorial or area exclusivity?
            </div>
            <div className="collapse-content bg-pink-300 items-center">
              <p className="text-black font-Josefin-Sans">
                ButterCup does not grant territorial exclusivity. Stores may be
                situated depending on market and customer needs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
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

export default Franchise;
