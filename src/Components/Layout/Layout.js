import React from "react";
import MenuAppBar from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <MenuAppBar />
      <div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
