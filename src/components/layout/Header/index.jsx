import React from "react";
import classes from "./Header.module.css"

const Header = () => {
  return (
    <header className={classes.header}>
      <p className={classes.logo}>Weather Forecast</p>
    </header>
  );
};

export default Header;
