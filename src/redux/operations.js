import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = 'https://6567923464fcff8d73109edd.mockapi.io';

export const Cars = createAsyncThunk(
    "cars/adverts",
    async (params, thunkAPI) => {
      try {
        const response = await axios.get("/adverts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );