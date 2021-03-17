import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// Actions
import { fetchWeather } from '../../actions/weatherAction';
import {
  dateBuilder,
  ampm,
  hourValue,
  minuteValue,
  curTime,
} from '../../api/time';

// Style and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Greeting = () => {
  const { weatherInfo } = useSelector((state) => state.weather);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather('Guwahati'));
  }, [dispatch]);
  return (
    <WeatherGreeting>
      <GreetingData>
        <>
          {user && (
            <>
              <h3>Good Morning,</h3>
              <h1>{user.data.name}</h1>
            </>
          )}
        </>

        <h3>{`${hourValue()}:${minuteValue()} ${ampm}`}</h3>
      </GreetingData>
      <CurrentWeather>
        <h1>
          <div className='temp'>{weatherInfo.main.temp}</div>
          <div className='degree'>°c</div>
        </h1>
        <h2>
          <div className='cityName'>{weatherInfo.name}</div>
          <div className='currentDate'>{dateBuilder(new Date())}</div>
        </h2>
        <h3>
          <div className='icon'>
            {weatherInfo.weather.map((data) => (
              <img
                key={data.id}
                src={`http://openweathermap.org/img/w/${data.icon}.png`}
                alt=''
              />
            ))}
          </div>
          <div className='weatherStatus'>
            {weatherInfo.weather.map((data) => data.description)}
          </div>
        </h3>
      </CurrentWeather>
    </WeatherGreeting>
  );
};

const WeatherGreeting = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4vh 7vw;
  flex-wrap: wrap;
`;

const GreetingData = styled(motion.div)`
  font-size: 3vw;
  color: #fff;

  h3 {
    font-size: 2.7vw;
  }
  @media (max-width: 48rem) {
    font-size: 1.5rem;

    h3 {
      font-size: 1.3rem;
    }
  }
`;

const CurrentWeather = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  color: #fff;
  width: 100%;
  position: relative;

  h1 {
    display: flex;
    font-size: 4rem;
  }
  h2,
  h3 {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
  h2 {
    .cityName {
      font-size: 2.5rem;
    }
    .currentDate {
      font-size: 1.3rem;
    }
  }

  h3 {
    padding: 0 2rem;
    .icon img {
      width: 4rem;
    }
    .weatherStatus {
      font-size: 1.7rem;
      justify-content: space-evenly;
    }
  }
  @media (max-width: 48rem) {
    margin-top: 5rem;
    margin-left: -2%;

    h1 {
      font-size: 3rem;
    }

    h2 {
      .cityName {
        font-size: 2rem;
      }
      .currentDate {
        font-size: 1.1rem;
      }
    }
    h3 {
      margin-left: -10%;
      .weatherStatus {
        margin-top: -1rem;
      }
    }
  }
`;

export default Greeting;
