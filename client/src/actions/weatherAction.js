import axios from 'axios';
import { byCityName } from '../api/weatherApi';

export const fetchWeather = (city) => async (dispatch) => {
  const weatherData = await axios.get(byCityName(city));

  dispatch({
    type: 'FETCH_DATA',
    payload: {
      weatherInfo: weatherData.data,
    },
  });
};
