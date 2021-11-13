import React from "react";
import { deleteCookie } from "../utils/cookie";

const Header = ({ city, setCity, setQuery }) => {
  const changeCity = () => {
    setCity({ item: "", coords: { lat: 0, lon: 0 } });
    deleteCookie("city");
    deleteCookie("lat");
    deleteCookie("lon");
  };
  return (
    <header className="mb-auto">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a className="nav-link px-2 text-white h3">Weather Forecast</a>
            </li>
          </ul>

          <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            {city.item ? (
              <button
                onClick={() => changeCity()}
                className="form-control btn-warning"
              >
                Change city
              </button>
            ) : (
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search for a city..."
                onChange={(e) => setQuery(e.target.value)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
