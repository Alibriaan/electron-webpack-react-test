import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getZhytomyrWeather from '../../services/weather';

export const getWeather = createAsyncThunk('weather/getWeather', async () => {
  const response = await getZhytomyrWeather();

  // axios.get('https://api.openweathermap.org/data/2.5/weather?q=Zhytomyr,10031&appid=05c28111cbd890bb1fc9f014a0f406bd');

  return response.data;
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
    });
  },
});

export default weatherSlice.reducer;
