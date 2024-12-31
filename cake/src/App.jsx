import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/feature-selection" element={<FeatureSelection />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/order-info" element={<OrderInfo />} />
        <Route path="/custom-cake" element={<CustomCake />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
