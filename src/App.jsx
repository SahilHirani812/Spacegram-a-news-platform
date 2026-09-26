import React from "react";
import Home from "./Pages/Home";
import Showcase from "./Pages/Showcase";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import India from "./Pages/India";
import Sports from "./Pages/Sports";
import Entertainment from "./Pages/Entertainment";
import Health from "./Pages/Health";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Showcase" element={<Showcase />} />
          <Route path="/india" element={<India />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
