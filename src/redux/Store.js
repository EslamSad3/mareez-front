import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './CounterSlice';
import { productReducer } from './ProductsSlice';

// waiting for reducer
export let store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});
