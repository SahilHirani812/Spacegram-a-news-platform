import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-4 sm:px-6 lg:px-10 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo / Brand */}
        <h1 className="text-lg font-semibold">SpaceGram</h1>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            News
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            India Today
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Bookmark
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          2026 SpaceGram. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
