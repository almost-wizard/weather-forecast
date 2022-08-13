import React from "react";
import classes from "./Error.module.css";

const Error = ({ code = 404 }) => {
  return (
    <main>
      <p className={classes.title}>{code}</p>
    </main>
  );
};

export default Error;
