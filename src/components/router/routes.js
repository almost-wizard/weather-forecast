import Error from "../screens/Error";
import Home from "../screens/Home";
import Weather from "../screens/Weather";

export const routes = [
  {
    path: "*",
    element: Error,
  },
  {
    path: "/",
    element: Home,
  },
  {
    path: "/weather",
    element: Weather,
  },
];
