import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="mx-24 max-w-full">
      <h1 className="text-8xl mt-9 text-orangeButton font-bold ">Our Works</h1>
      <h1 className="my-5 text-2xl">Choose a gallery</h1>
      {children}
    </div>
  );
};

export default Layout;
