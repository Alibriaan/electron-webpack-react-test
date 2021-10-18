import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counterSlice';
import weather from './slices/weatherSlice';

const store = configureStore({
  reducer: {
    counter,
    weather,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
