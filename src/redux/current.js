import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import geoCodeEncoder from '../../geoCodeEncoder';
// import apiID from '../../http-commons';

export const fetchData = createAsyncThunk(
  'poullution/fetchData',
  async (urlCurrentData) => {
    /*  const { lat } = geoCodeEncoder(city)[0].lat;
    const { lon } = geoCodeEncoder(city)[0].lon;
    console.log(`lat===${lon}`); */

    // const urlCurrentData = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiID}`;
    const response = await fetch(urlCurrentData);
    const responseJSON = await response.json();
    // console.log(`Inside fetchData()=${responseJSON.list[0].components.co}`);
    return responseJSON;
  },
);

const pollutionSlice = createSlice({
  name: 'pollution',
  initialState: {
    data: [],
    main: '',
    status: 'Idle',
    error: null,
  },
  reducers: {

  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchData.pending, (state) => {
      const modifiedState = state;
      modifiedState.status = 'Pending';
      modifiedState.error = null;
      modifiedState.data = [];
      return modifiedState;
    }).addCase(fetchData.fulfilled, (state, { payload }) => {
      const modifiedState = state;
      modifiedState.status = 'Successfull';
      const airDataArray = payload.list[0];
      const components = Object.entries(airDataArray.components);
      modifiedState.data = components;
      modifiedState.main = airDataArray.main;
      // console.log(`Inside builder= ${newState.main.aqi}`);
      return modifiedState;
    });
  },
});

export default pollutionSlice.reducer;
