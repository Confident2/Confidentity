"use client";

import Link from "next/link";
import React, { useContext } from "react";

// import { signOut, useSession } from "next-auth/react";

import { ThemeContext } from "../context/themecontext";
import DarkModeToggle from "./darkmodetoggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  //   const session = useSession();
  const { mode } = useContext(ThemeContext);
  return (
    <div
      className={`bg-${
        mode === "light" ? "white" : "black"
      } h-20 flex items-center justify-between px-4 `}
    >
      <Link
        href="/"
        className={`text-2xl font-bold ${
          mode === "light" ? "text-black" : "text-white"
        }`}
      >
        Confidentity
      </Link>

      <div className="flex items-center space-x-4 ">
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`text-gray-600 hover:text-green-500 ${
              mode === "black" ? "text-white" : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
            onClick={signOut}
          >
            Logout
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
