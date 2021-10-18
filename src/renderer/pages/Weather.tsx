import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import GlassContainer from '../components/GlassContainer/GlassContainer';

function Weather() {
  const [, setTimeInterval] = useState({});
  const [currentDate, setCurrentDate] = useState('');

  const getCurrentTime = () => {
    const date = new Date();

    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  useEffect(() => {
    setCurrentDate(getCurrentTime());

    setTimeInterval(setInterval(() => setCurrentDate(getCurrentTime()), 1000));

    return () => {
      setTimeInterval({});
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <GlassContainer containerSubClass="time-glass-container white-glass-container">
        <Box
          padding="25px 10px 25px 10px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className="weather-glass-container_title glass-container-title">
            Weather
          </h1>
          <h1 className="weather-glass-container_date glass-container-description">
            {currentDate}
          </h1>
        </Box>
      </GlassContainer>
    </Box>
  );
}

export default Weather;
