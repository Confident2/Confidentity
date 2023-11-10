"use client";

import Link from "next/link";
import React, { useContext } from "react";

import { signOut, useSession } from "next-auth/react";

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
  const session = useSession();

  return (
    <div className="h-20 flex items-center justify-between mx-24 max-w-full ">
      <Link href="/" className="text-2xl font-bold">
        Confidentity
      </Link>

      <div className="flex items-center space-x-4 ">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && ( */}
        <button
          className="px-4 py-2 bg-orangeButton text-white rounded-full cursor-pointer"
          onClick={signOut}
        >
          Logout
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
