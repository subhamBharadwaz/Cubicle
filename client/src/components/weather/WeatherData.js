import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
// Actions
import { fetchWeather } from "../../actions/weatherAction";
// Icons
import * as BsIcons from "react-icons/bs";

import Spinner from "../layout/Spinner";
// Style and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const WeatherData = () => {
  const { weatherInfo, loading } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  // Handlers
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(input));
    setInput("");
  };

  return (
    <StyledWeatherData>
      <div className="search" onClick={searchHandler}>
        <BsIcons.BsSearch id="search" />
      </div>
      <form onSubmit={searchHandler} className="form">
        <label htmlFor="searchWeather">Another City</label>
        <input
          onChange={onChangeHandler}
          value={input}
          type="text"
          name="searchWeather"
        />
      </form>

      <WeatherDetails>
        <h2>Weather Details</h2>
        {loading ? (
          <div className="loading">
            <Spinner />
          </div>
        ) : (
          <CurrentWeatherDetails>
            <div className="weather-holders">
              <h3>
                <span>Cloudy</span>
                <span className="w-data">{`${weatherInfo.clouds.all}%`}</span>
              </h3>
            </div>
            <div className="weather-holders">
              <h3>
                <span>Humidity</span>
                <span className="w-data">{`${weatherInfo.main.humidity}%`}</span>
              </h3>
            </div>
            <div className="weather-holders">
              <h3>
                <span>Wind</span>
                <span className="w-data">{`${weatherInfo.wind.speed}km/h`}</span>
              </h3>
            </div>
            <div className="weather-holders">
              <h3>
                <span>Pressure</span>
                <span className="w-data">{`${weatherInfo.main.pressure}mb`}</span>
              </h3>
            </div>
          </CurrentWeatherDetails>
        )}
      </WeatherDetails>
    </StyledWeatherData>
  );
};

const StyledWeatherData = styled(motion.div)`
  h2 {
    color: #ffffff;
  }
  h3 {
    color: #f7f7f7;
  }
  height: 100%;
  width: 40vw;
  background-color: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(8px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4vh 4vw;
  color: #fff;
  font-size: 1.1rem;

  .search {
    position: absolute;
    right: 0;
    top: 0;
    width: 5rem;
    height: 4rem;
    background-color: rgba(8, 8, 8, 0.7);
    cursor: pointer;
  }
  #search {
    font-size: 2.5rem;
    color: #1a83ff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .form {
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    input {
      width: 90%;
      height: 50px;
      color: #fff;
      padding-top: 20px;
      border: none;
      outline: 0;
      background: transparent;
      border-bottom: 1px solid #ddd;
      font-size: 1.5rem;

      &:focus {
        border-bottom-color: #1a83ff;
      }
    }

    label {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 75rem) {
    width: 100%;
    font-size: 1rem;
  }
`;

const WeatherDetails = styled(motion.div)`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 48rem) {
    height: 60%;
    font-size: 1rem;
  }
`;

const CurrentWeatherDetails = styled(motion.div)`
  font-size: 1.3rem;
  height: 60%;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .weather-holders {
    margin-bottom: 2rem;
    h3 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: rgba(255, 255, 255, 0.89);
    }
  }
  @media (max-width: 48rem) {
    font-size: 1rem;
    height: 40%;
    flex-direction: row;
    padding-bottom: 1.5rem;
    .weather-holders {
      h3 {
        flex-direction: column;
        .w-data {
          margin-top: 0rem;
        }
      }
    }
  }
`;

export default WeatherData;
