import axios from "axios";
import { byCityName } from "../api/weatherApi";

export const fetchWeather = (city) => async (dispatch) => {
  const config = {
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "X-Requested-With": "XMLHttpRequest",
    // },
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "9588618ab9msh95a5fecfc233ed7p1274e1jsn39de38302645",
    },
  };
  // const weatherData = await axios.get(byCityName(city), config);
  const weather = await fetch(byCityName(city), {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  const weatherData = await weather.json();
  dispatch({
    type: "FETCH_DATA",
    payload: {
      weatherInfo: weatherData,
    },
  });
};
