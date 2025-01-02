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
import Promos from "./Components/Promos/Promos";
import Franchise from "./Components/Franchising/Franchise";
import Menu from "./Components/Menu/Menu";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
