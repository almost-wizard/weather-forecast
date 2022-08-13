import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useFetching } from "@/hooks/useFetching";
import WeatherService from "@/API/WeatherService";
import { Loader } from "@/components/ui";
import CurrentWeather from "@/components/weather/main/CurrentWeather";
import DailyTrackWeather from "@/components/weather/main/DailyTrackWeather";
import DailyWeather from "@/components/weather/daily/DailyWeather";
import classes from "./Weather.module.css";

const Weather = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(useLocation().search);
  const lat = urlParams.get("lat");
  const lon = urlParams.get("lon");
  const city = urlParams.get("city");

  const [data, setData] = useState({});

  const [fetchOneCall, isLoading] = useFetching(async (lat, lon) => {
    const result = await WeatherService.one_call(lat, lon);
    setData(result.data);
  });

  useEffect(() => {
    if (lat && lon) {
      fetchOneCall(lat, lon);
    }
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className={classes.loaderContainer}>{isLoading && <Loader />}</div>
      ) : (
        data.current && (
          <div className={classes.container}>
            <button
              className={classes.change_city}
              onClick={() => navigate("/")}
            >
              Вернуться к выбору города
            </button>
            <CurrentWeather city={city} data={data} />
            <DailyTrackWeather data={data} />
            <div className={classes.arrow_box}>
              <i className={classes.arrow_down}></i>
            </div>
            <DailyWeather data={data} />
          </div>
        )
      )}
    </main>
  );
};

export default Weather;
