import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeatureSelection from "./Components/FeatureSelection";
import Cards from "./Components/Cards";
import OrderInfo from "./Components/OrderInfo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSelection />
      <Cards/>
      <OrderInfo/>
    </div>
  );
};

export default App;
