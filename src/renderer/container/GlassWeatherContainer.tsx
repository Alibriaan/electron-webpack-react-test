import React from 'react';
// import { useSelector } from 'react-redux';
import GlassContainer from '../components/GlassContainer/GlassContainer';
// import { RootState } from '../store/index';

export default function GlassWeatherContainer() {
  // const weather = useSelector((state: RootState) => state.weather.weather);

  return (
    <GlassContainer containerSubClass="weather-glass-container light-glass-container">
      {/* <div className='headline-2'>
        { weather?.name || 'Неизвестно'}
      </div>
      <div className='weather-glass-container_temperature-section'>
        <span>
          { weather?.weather?.desription || 'Неизвестно'}
        </span>
        <span>
          Облачность: { weather?.clouds?.all || 'Неизвестно'}
        </span>
        <span>
          Ветер: { weather?.wind?.speed || 'Неизвестно'}
        </span>
        <span>

        </span>
      </div> */}
    </GlassContainer>
  );
}
