import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
  get_last_search,
  set_last_search,
  search_city,
} from "@/utils/helpers/search.helpers";
import classes from "./Home.module.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const lastSearch = get_last_search();

  const navigate = useNavigate();
  useMemo(() => {
    if (search == "") {
      setResults([]);
    } else {
      setResults(search_city(search));
    }
  }, [search]);

  const go = (r) => {
    set_last_search(r.city);
    navigate(`/weather?lat=${r.lat}&lon=${r.lon}&city=${r.city}`);
  };

  return (
    <main>
      <div className={classes.search_city_control}>
        <p className={classes.search_city_title}>Узнайте прогноз погоды</p>
        <input
          className={classes.search_city_input}
          placeholder="Введите название вашего города здесь..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={classes.search_city_results}>
        <div className={classes.search_city_list}>
          {search && !results.length && (
            <div className={classes.search_city_subtitle}>
              По данному запросу ничего не найдено...
            </div>
          )}
          {lastSearch &&
            !search &&
            lastSearch.map((r) => (
              <button
                key={r.city}
                className={classes.search_city_item}
                onClick={() => go(r)}
              >
                {r.city}
              </button>
            ))}
          {results &&
            results.map((r) => (
              <button
                key={r.city}
                className={classes.search_city_item}
                onClick={() => go(r)}
              >
                {r.city}
              </button>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
