import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiID from '../http-commons';

export const fetchGeoCode = createAsyncThunk(
  'city/fetchGeoCode',
  async (city) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiID}`);
    const responseJSON = await response.json();
    return responseJSON;
  },
);

const citySlice = createSlice({
  name: 'city',
  initialState: {
    data: {},
    status: 'Idle',
    error: null,
  },
  reducers: {

  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchGeoCode.pending, (state) => {
      const modifiedState = state;
      modifiedState.status = 'Pending';
      modifiedState.error = null;
      modifiedState.data = {};
      return modifiedState;
    }).addCase(fetchGeoCode.fulfilled, (state, { payload }) => {
      const modifiedState = state;
      modifiedState.status = 'Successful';
      const arr = payload[0];
      modifiedState.data.lat = arr.lat;
      modifiedState.data.lon = arr.lon;
      modifiedState.data.name = arr.name;
      return modifiedState;
    });
  },
});

export default citySlice.reducer;
