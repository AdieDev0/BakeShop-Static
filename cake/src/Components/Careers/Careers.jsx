import React from "react";
import { motion } from "framer-motion";
import Baker from "../../assets/CareersIMG/Baker.jpg";
import Customer from "../../assets/CareersIMG/Customer.png";
import Girl from "../../assets/CareersIMG/Girl.jpeg";

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.97,
  },
};

const jobListings = [
  {
    title: "RESEARCH AND DEVELOPMENT OFFICER 1",
    description:
      "The Research and Development Officer conducts a thorough study to develop or improve a product and determine product specifications, production costs, and a production timeline.",
  },
  {
    title: "QUALITY ASSURANCE OFFICER 1",
    description:
      "The Quality Assurance Officer ensures the products meet quality standards. Implements and monitors Good Manufacturing Practices, inspects facilities for compliance with standards, and reviews customer feedback.",
  },
  {
    title: "ACCOUNTING CLERK",
    description:
      "The Accounting Clerk is responsible for providing accounting support to supervisors and managers, performing accounting and clerical functions.",
  },
  {
    title: "OFFICE CLERK",
    description: "Administrative and clerical works.",
  },
  {
    title: "AUDIT OFFICER",
    description:
      "Responsible for planning and reviewing processes, ensuring compliance with company policies, conducting pre-implementation system reviews, and recommending improvements to enhance efficiency and reduce costs.",
  },
  {
    title: "BILLING ACCOUNTANT",
    description:
      "The position involves timely and accurate billing of products and services, including royalties and advertising fees.",
  },
  {
    title: "MARKETING OFFICER",
    description:
      "Develops and maintains marketing strategies to meet corporate objectives through planning and evaluating strategies.",
  },
  {
    title: "ASSISTANT STORE MANAGER (M1)",
    description:
      "Oversees daily operations, ensures sales targets are met, and maintains outstanding customer service.",
  },
  {
    title: "COST ACCOUNTANT",
    description:
      "Responsible for compliance with cost and inventory accounting policies, coordinating with Plant Accountants to safeguard accuracy and efficiency.",
  },
];

const Careers = () => {
  const cardsData = [
    {
      image: Baker,
      title: "Interested? Submit your application today!",
      bgColor: "bg-[rgba(255,231,217,0.8)]",
    },
    {
      image: Customer,
      title:
        "Be a part of our team and send your resume to us at: ButterCup.ph",
      bgColor: "bg-[rgba(255,231,217,0.8)]",
    },
    {
      image: Girl,
      title: `You may also send your resume through Regular Postal Mail at:

HR Department
ButterCup Cake Plant Building
299 Quezon CircleGeometry, Metro Manila`,
      bgColor: "bg-[rgba(255,231,217,0.8)]",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-red-300 via-red-500 to-pink-500 min-h-screen py-10 px-5 md:px-20 font-sans">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl max-w-7xl mx-auto shadow-lg">
        {/* Heading */}
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 tracking-tight font-Josefin-Sans"
        >
          CAREERS
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg text-center text-gray-600 mb-10 font-Josefin-Sans max-w-3xl mx-auto"
        >
          Experience sweet success with our growing family and be part of the
          country's number one bakeshop today!
        </motion.p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-64 sm:h-72 transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center ${card.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <motion.h3
                  className="text-pink-600 font-bold text-xl md:text-2xl text-center px-4 font-Josefin-Sans"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  {card.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="min-h-screen py-10 px-5 md:px-20 font-sans">
          <div className="bg-white py-10 px-5 md:px-20 rounded-xl max-w-5xl mx-auto shadow-lg">
            {/* Heading */}
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 tracking-tight"
            >
              Open Positions
            </motion.h1>

            {/* Job Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {jobListings.map((job, index) => (
                <motion.div
                  key={index}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col space-y-2 bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <footer className="footer bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
      </div>
    </div>
  );
};

export default Careers;
