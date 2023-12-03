import { createSlice } from '@reduxjs/toolkit';
import { Cars } from './operations';

const initialState = {
  cars: {
    items: [],
    favorites: [],
    isLoading: false,
  },
  filter: {
    make: '',
    rentalPrice: '',
    FromMileage: '',
    ToMileage: ''
  },
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFavorite: (state, action) => {
      const carToAdd = action.payload;
      if (!state.cars.favorites || !Array.isArray(state.cars.favorites)) {
        state.cars.favorites = [];
      }
      if (!state.cars.favorites.find(car => car.id === carToAdd.id)) {
        state.cars.favorites = [...state.cars.favorites, carToAdd];
      }
      return state;
    },
    removeFavorite(state, action) {
      const item = state.cars.favorites.findIndex(({ id }) => id === action.payload);
      state.cars.favorites.splice(item, 1);
    },
    
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

export const { setFilter, setFavorite, removeFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;