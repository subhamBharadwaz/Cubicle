import React from 'react';
// Import components
import Weather from '../components/weather/Weather';
import News from '../components/news/News';

const Home = () => {
  return (
    <div>
      <Weather />
      <News />
    </div>
  );
};

export default Home;
