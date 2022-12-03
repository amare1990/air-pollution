import { configureStore } from '@reduxjs/toolkit';
import pollutionReducer from './current';
import cityReducer from './city';

export default configureStore({
  reducer: {
    pollution: pollutionReducer,
    city: cityReducer,
  },
});
