import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './index';
export const store = configureStore({
  reducer: {
    productsSlice,
  },
});
