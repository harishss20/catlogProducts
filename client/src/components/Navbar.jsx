import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-[#41cdc9] to-[#0C9B7C] fixed w-full z-20 top-0 start-0 border-b border-gray-300 shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="doorBag" />
          <span className="self-center text-2xl font-Madimi whitespace-nowrap text-white">
            DoorBag
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-Madimi rounded-lg text-sm px-4 py-2 text-center"
          >
            Request
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
