import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full h-18 bg-black drop-shadow-white backdrop-blur-md flex px-5 py-5   justify-between text-white text-[15px] ">
      <h1 className="font-['Space_Grotesk'] text-2xl font-bold text-slate-50 flex">
        SpaceGram
      </h1>

      <Link to={"/"}>Home</Link>
      <Link to={"/showcase"}>Showcase</Link>
      <Link to={"/india"}>India</Link>
      <Link to={"/sports"}>Sports</Link>
      <Link to={"entertainment"}>Entertainment</Link>
      <Link to={"/health"}>Health</Link>
    </nav>
  );
};

export default Navbar;
