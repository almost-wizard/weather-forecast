import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.description}>
        Weather forecast app by{" "}
        <a
          href="https://github.com/almost-wizard"
          target="_blank"
          className={classes.link}
        >
          almost-wizard (Alexander)
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
