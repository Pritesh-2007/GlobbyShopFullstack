import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlice'
export const appStore = configureStore({
    reducer: {
      cart: CartReducer,
    },
  });