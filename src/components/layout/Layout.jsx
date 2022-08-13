import React from "react";
import { BrowserRouter } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <div className="layout">{children}</div>
    </BrowserRouter>
  );
};

export default Layout;
