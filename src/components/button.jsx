import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="bg-orange-500 px-5 py-3 cursor-pointer rounded-md text-black">
        {text}
      </button>
    </Link>
  );
};

export default Button;
