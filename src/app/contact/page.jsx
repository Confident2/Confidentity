import Button from "@/components/button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className=" mx-24 max-w-full">
      <h1 className="text-6xl mb-20 mt-10 font-bold">
        Let&rsquo;s Keep in Touch <hr className="mt-5" />
      </h1>

      <div className="flex justify-between gap-14 ">
        <div className="flex-1 h-96 relative mt-14 ">
          <Image
            src={"/contact.png"}
            alt="contact-image"
            className="object-contain w-full "
            fill={true}
          />
        </div>
        <form className="flex-1 flex-col flex gap-5">
          <input
            type="text"
            placeholder="Full-Name"
            className="p-5 bg-transparent border-0 outline-0 border-2"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-5 bg-transparent border-0 outline-0 border-2"
          />
          <textarea
            className="p-5 bg-transparent border-0 outline-0 border-2"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>

          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
