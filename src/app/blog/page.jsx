import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// Generate static metadata
export const metadata = {
  title: "blog",
  description: "Generated by the creative",
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className="mx-24 max-w-full mt-20">
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className="flex align-center gap-10 mb-10 mt-10"
          key={item._id}
        >
          <div className="flex-1 h-96 relative">
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              objectFit="cover"
            />
          </div>
          <div className="mt-16 text-7xl">
            <h1 className="mb-5">{item.title}</h1>
            <p className="text-3xl">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
