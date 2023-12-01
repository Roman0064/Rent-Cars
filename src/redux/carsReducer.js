import { createSlice } from '@reduxjs/toolkit';
import { Cars } from './operations';

const initialState = {
  cars: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: bulider => 
  bulider.addCase(Cars.pending, (state, action) => {
    state.cars.isLoading = true;
    state.cars.error = null;
  }).addCase(Cars.fulfilled, (state, action) => {
    state.cars.isLoading = false;
    state.cars.error = null;
    state.cars.items = action.payload;
  }).addCase(Cars.rejected, (state, action) => {
    state.cars.isLoading = false;
    state.cars.error = action.payload;
  }),
});

export const { setFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;