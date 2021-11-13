import React, { useState } from "react";
import { getCookie } from "./utils/cookie";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState({
    item: getCookie("city"),
    coords: {
      lat: getCookie("lat"),
      lon: getCookie("lon"),
    },
  });

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header city={city} setCity={setCity} setQuery={setQuery} />
      <Cover city={city} setCity={setCity} query={query} />
      <Footer />
    </div>
  );
};

export default App;
