"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const duration = 0.5;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/userForm");
  };

  return (
    <div>
      <div className="mb-4 mt-24 flex justify-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={framerProps}
          transition={{ duration }}
          className="text-3xl font-extrabold md:text-5xl lg:text-6xl drop-shadow-sm"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
            Experience the Best
          </span>{" "}
          <span className="text-gray-900 dark:text-gray-800">
            Home Services.
          </span>
        </motion.h1>
      </div>
      <div>
        <p className="text-lg font-normal text-gray-900 lg:text-xl dark:text-gray-600">
          <strong className="text-red-500 font-Madimi">DoorBag </strong>
          <span className="font-semibold">
            க்கு உங்களை அன்புடன் வரவேற்கிறோம். எங்கள் சேவைகளை பயன்படுத்த
            விரும்பினால், கீழே உள்ள பட்டனை கிளிக் செய்யவும்.
          </span>
        </p>
        <br />
        <button
          className="inline-flex items-center justify-center px-5 py-3 text-base font-Madimi text-center text-white cursor-pointer bg-blue-700 rounded-lg hover:bg-blue-800 "
          onClick={handleClick}
        >
          Request
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
