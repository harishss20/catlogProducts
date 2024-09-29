import React from "react";

const Header = () => {
  return (
    <div>
      <h1 class="mb-4 mt-24 text-3xl font-extrabold text-gray-900 dark:text-gray-800 md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Experience the Best
        </span>{" "}
        Home Services.
      </h1>
      <p class="text-lg font-normal text-gray-900 lg:text-xl dark:text-gray-600">
        <strong class="text-red-500 font-Madimi">DoorBag</strong> க்கு உங்களை
        அன்புடன் வரவேற்கிறோம். எங்கள் சேவைகளை பயன்படுத்த விரும்பினால், கீழே உள்ள
        பட்டனை கிளிக் செய்யவும்.
      </p>
      <br />
      <button class="inline-flex items-center justify-center px-5 py-3 text-base font-Madimi text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none">
        Request
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
