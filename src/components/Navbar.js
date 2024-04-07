import React, { useState } from "react";
import DisconnectImage from "../assets/disconnect.svg";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const disconnectHandler = () => {
    alert("You clicked on the disconnect button !");
  };
  return (
    <nav class="border border-b-slate-300 border-t-0 border-x-0 mb-16">
      <div class="w-full flex flex-wrap items-center justify-between p-4">
        <a href="/" class="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/dtz38b1/vzion.png"
            class="h-16"
            alt="Logo"
          />
          <span class="hidden md:block self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-white">
            VZION
          </span>
        </a>
        <div className="flex items-center justify-center gap-1 md:gap-8">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <label class="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                onChange={handleCheckboxChange}
              />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${
                  isChecked ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </span>
            <div className="text-white text-lg md:text-2xl">
              Network: MaherWifi
            </div>
          </div>

          <button
            className="flex items-center justify-center gap-2 md:gap-3 p-3 bg-[#323b44] md:bg-slate-500 md:rounded-lg text-white transform duration-300 hover:scale-105"
            onClick={disconnectHandler}
          >
            <img src={DisconnectImage} class="h-8 w-8" alt="Logo" />
            <span className="text-lg md:text-xl hidden md:block ">
              Disconnect
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
