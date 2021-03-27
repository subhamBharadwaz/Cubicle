import axios from "axios";
import { byCityName } from "../api/weatherApi";

export const fetchWeather = (city) => async (dispatch) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  const weatherData = await axios.get(byCityName(city), config);

  dispatch({
    type: "FETCH_DATA",
    payload: {
      weatherInfo: weatherData.data,
    },
  });
};
