import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/product/productsSlice';
import authReducer from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;