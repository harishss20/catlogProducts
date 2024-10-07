import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-b from-[#41cdc9] to-[#0C9B7C] fixed w-full z-20 top-0 start-0 border-b border-gray-300 shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="NandhaKumar Milk Agancy" />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            NandhaKumar Milk Agancy
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer font-Madimi rounded-lg text-sm px-4 py-2 text-center"
            onClick={() => {
              navigate("/admin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
