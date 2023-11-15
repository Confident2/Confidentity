import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div>
      <h1 className="text-orangeButton">{params.category}</h1>

      {data.map((item) => (
        <div
          className="flex gap-10 mt-16 mb-20 even:flex-row-reverse  "
          key={item.id}
        >
          <div className="flex-1 flex flex-col gap-2 justify-center pl-10  ">
            <h1 className="text-5xl">{item.title}</h1>
            <p className="text-xl">{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className="flex-1 h-96 relative mt-14  ">
            <Image
              src={item.image}
              alt="contact-image"
              className="object-contain w-full"
              fill={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
