import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="mx-24 max-w-full">
      <h1 className="text-8xl mt-9 text-orangeButton-buttonOrange font-bold ">
        Our Projects
      </h1>
      {children}
    </div>
  );
};

export default Layout;
