"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-16 text-sm flex items-center justify-between mx-24 max-w-full">
      <div>©2023 Confident. All rights reserved.</div>
      <div className="flex items-center gap-4">
        <Image
          src="/1.png"
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="Confident Dev Facebook Account"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="Confident Dev"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="Confident Dev"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
          alt="Confident Dev"
        />
      </div>
    </div>
  );
};

export default Footer;
