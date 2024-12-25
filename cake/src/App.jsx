import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeatureSelection from "./Components/FeatureSelection";
import Cards from "./Components/Cards";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSelection />
      <Cards/>
    </div>
  );
};

export default App;
