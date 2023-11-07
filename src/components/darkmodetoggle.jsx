"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/themecontext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="w-20 h-8 border border-green-500 border-opacity-75 rounded-full flex items-center justify-between p-2 relative cursor-pointer"
      onClick={toggle}
    >
      <div className="text-12">🌙</div>
      <div className="text-12">🔆</div>
      <div
        className={`w-6 h-6 bg-green-500 rounded-full absolute transition-all duration-300 ease-in-out ${
          mode === "dark" ? "left-2" : "right-2"
        }`}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
