import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from './carsReducer';


const store = configureStore({
  reducer: carsReducer,
});

export default store;