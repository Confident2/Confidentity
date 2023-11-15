import React from "react";
import Link from "next/link";
import Image from "next/image";

const works = [
  {
    title: "Illustrations",
    img: "/illustration.png",
  },
  {
    title: "Websites",
    img: "/websites.jpg",
  },
  {
    title: "Application",
    img: "/apps.jpg",
  },
];

const Portfolio = () => {
  return (
    <div className="flex gap-12 ">
      {works.map((work, index) => (
        <div key={index} className="relative">
          <Link href={`/portfolio/${work.title.toLowerCase()}`} legacyBehavior>
            <div className="flex border-4 border-solid border-gray-300 bg-cover h-96 w-80 rounded-md relative ">
              <Image
                src={work.img}
                alt={work.title}
                layout="fill"
                objectFit="cover"
              />
              <span className="absolute right-4 bottom-4 text-2xl font-bold text-white">
                {work.title}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
