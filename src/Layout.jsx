import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Showcase from "./Pages/Showcase";
import India from "./Pages/India";
import Sports from "./Pages/Sports";
import Entertainment from "./Pages/Entertainment";
import Health from "./Pages/Health";

const Layout = () => {
  return (
    <div>
      <Home />
      <Showcase />
      <India />
      <Sports />
      <Entertainment />
      <Health />
    </div>
  );
};

export default Layout;
