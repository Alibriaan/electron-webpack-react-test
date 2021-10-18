import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import GlassContainer from '../components/GlassContainer/GlassContainer';

function Time() {
  const [intervalId, setIntervalId] = useState({});
  const [currentDate, setCurrentDate] = useState('');

  const getCurrentTime = () => {
    const date = new Date();

    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  useEffect(() => {
    setCurrentDate(getCurrentTime());

    const interval: ReturnType<typeof setInterval> = setInterval(
      () => setCurrentDate(getCurrentTime()),
      1000
    );

    setIntervalId(interval);

    return () => {
      clearInterval(intervalId as number);
      setIntervalId({});
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <GlassContainer containerSubClass="time-glass-container black-glass-container">
        <Box
          padding="25px 10px 25px 10px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className="time-glass-container_title glass-container-title">
            Time
          </h1>
          <h1 className="time-glass-container_date glass-container-description">
            {currentDate}
          </h1>
        </Box>
      </GlassContainer>
    </Box>
  );
}

export default Time;
