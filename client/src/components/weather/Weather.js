import { motion } from "framer-motion";
import React from "react";
// Styles
import styled from "styled-components";

import weatherBg from "../../img/weatherBg.jpg";

// Components
import Greeting from "./Greeting";
import WeatherData from "./WeatherData";

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

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export default Weather;
