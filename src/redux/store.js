import { configureStore } from '@reduxjs/toolkit';
import pollutionReducer from './current/current';
import cityReducer from './city/city';

export default configureStore({
  reducer: {
    pollution: pollutionReducer,
    city: cityReducer,
  },
});
