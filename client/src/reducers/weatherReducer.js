const initState = {
  weatherInfo: { weather: [], main: {}, clouds: {}, wind: {} },
  loading: true,
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        weatherInfo: action.payload.weatherInfo,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default weatherReducer;
