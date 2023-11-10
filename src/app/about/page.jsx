import React from "react";
import Image from "next/image";
import Button from "@/components/button";

const About = () => {
  return (
    <div className="">
      <div className="relative h-72">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          layout="fill"
          objectFit="cover"
          className="filter grayscale w-full"
          alt="Digital Storytellers Image"
        />
        <div className="absolute bottom-5 left-28 bg-orange-500 p-2 rounded-md text-white ">
          <h1 className="text-2xl font-bold">Digital Storytellers</h1>
          <h2 className="text-lg">
            Handcrafting award-winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex gap-5 mt-10 mx-24 max-w-7xl justify-around p-8 ">
        <div className="flex-2">
          <h1 className="text-3xl font-bold mb-5">Who Are We?</h1>
          <p className="text-base leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-2">
          <h1 className="text-3xl font-bold mb-5">What We Do?</h1>
          <p className="text-base leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br /> - Fast and Handy
            <br /> - Mobile Apps
          </p>
          <br />
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
