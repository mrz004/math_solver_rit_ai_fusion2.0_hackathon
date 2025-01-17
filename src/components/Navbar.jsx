import React from "react";
import logo from "/logo.jpeg";

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src={logo} alt="logo" className="h-8 aspect-square" />
          <span className="ml-3 text-xl">Ramanujan</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white">About Us</a>
          <a className="mr-5 hover:text-white">Donate</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
