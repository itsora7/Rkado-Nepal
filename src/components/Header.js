import React from "react";

import logo from "../assets/R22.png";
const Header = () => {
  return (
    <header className="bg-blue-300 py-3" id="home">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="home" className="w-20 h-100">
            <img src={logo} alt="logo" />
          </a>
          <button className="btn btn-sm">Join Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
