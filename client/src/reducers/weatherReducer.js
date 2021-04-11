const initState = {
  weatherInfo: { weather: [], main: {}, clouds: {}, wind: {} },
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, weatherInfo: action.payload.weatherInfo };
    default:
      return { ...state };
  }
};

export default weatherReducer;
