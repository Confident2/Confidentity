import Image from "next/image";
import Newsocial from "/public/newsocial.png";
import Button from "@/components/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex items-center gap-10 mx-24 max-w-full">
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-6xl h-40 bg-gradient-to-b from-orange-900 to-blue-300 bg-clip-text text-transparent">
          Better design for your digital products.
        </h1>
        <p className="text-xl font-light ">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={`flex-1 ${styles["animate-move"]}`}>
        <Image
          src={Newsocial}
          alt=""
          className="w-full h-500 object-contain"
          width={900}
          height={500}
        />
      </div>
    </div>
  );
}
