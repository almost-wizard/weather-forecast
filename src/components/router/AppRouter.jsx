import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((r) => (
        <Route key={r.path} path={r.path} element={<r.element />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
