import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Home/Hero";
import FeatureSelection from "./Components/Home/FeatureSelection";
import Cards from "./Components/Home/Cards";
import OrderInfo from "./Components/Home/OrderInfo";
import CustomCake from "./Components/Home/CustomCake";
import CreditCards from "./Components/Home/CreditCards";
import Careers from "./Components/Careers/Careers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSelection />
      <Cards />
      <OrderInfo />
      <CustomCake />
      <CreditCards />
      <Footer />
      <Careers />
    </div>
  );
};

export default App;
