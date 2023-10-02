import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productsState = { products: [], isLoaing: false };
export const gatAllProducts = createAsyncThunk(
  'products/getproducts',
  async () => {
    const { data } = await axios.get(
      'https://mareez.onrender.com/api/products'
    );
    return data.data;
  }
);

let productsSlice = createSlice({
  name: 'products',
  initialState: productsState,
  reducers: {},
  //   async
  extraReducers: (builder) => {
    builder.addCase('fullfiled', (state, action) => {
      state.products = action.payload;
    });
  },
});

export const productReducer = productsSlice.reducer;
