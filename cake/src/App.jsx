import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeatureSelection from "./Components/FeatureSelection";
import Cards from "./Components/Cards";
import OrderInfo from "./Components/OrderInfo";
import CustomCake from "./Components/CustomCake";
import CreditCards from "./Components/CreditCards";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSelection />
      <Cards />
      <OrderInfo />
      <CustomCake />
      <CreditCards/>
    </div>
  );
};

export default App;
