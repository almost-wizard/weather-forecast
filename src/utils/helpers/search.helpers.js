import { REGIONS } from "../constants/regions.constants";
import { getCookie, setCookie } from "./cookie.helpers";

export const search_city = (elem, limit = 10) => {
  return REGIONS.filter((r) =>
    r.city?.toLowerCase().includes(elem.toLowerCase())
  ).slice(0, limit);
};

export const get_last_search = (is_full_data = true) => {
  let arr = [];
  try {
    const last_search = JSON.parse(getCookie("last_search"));
    if (last_search === null) {
      last_search = [];
    }
    arr = Array(...last_search);
  } catch {
    return [];
  }
  if (!is_full_data) {
    return arr;
  }

  const data = [];

  arr.map((elem) => {
    const elem_data = search_city(elem);
    if (elem_data[0]) {
      data.push(elem_data[0]);
    }
  });

  return data;
};

export const set_last_search = (city) => {
  let last_search = get_last_search(false);
  if (last_search.includes(city)) {
    return;
  }
  if (last_search.length >= 5) {
    last_search.shift();
    last_search.push(city);
  } else {
    last_search.push(city);
  }
  setCookie("last_search", JSON.stringify(last_search));
};
