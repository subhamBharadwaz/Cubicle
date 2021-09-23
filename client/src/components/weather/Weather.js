import React from "react";
// Components
import Greeting from "./Greeting";
import WeatherData from "./WeatherData";
import weatherBg from "../../img/weatherBg.jpg";

// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Weather = () => {
  return (
    <StyledWeather>
      <Greeting />
      <WeatherData />
    </StyledWeather>
  );
};

const StyledWeather = styled(motion.div)`
  background: url(${weatherBg}) center center/cover;
  height: 92vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 75rem) {
    flex-direction: column;
  }
`;

export default Weather;
