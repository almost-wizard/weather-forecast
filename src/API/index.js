import axios from "axios";
import { API_KEY, API_URL } from "../utils/constants/api.constants";

const $api = axios.create({ baseURL: API_URL });

$api.interceptors.request.use((config) => {
  config.url += "&units=metric&lang=ru&appid=" + API_KEY;
  return config;
});

export default $api;
