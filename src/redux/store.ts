import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import usersReducer from './slices/users';

const store = configureStore({
  reducer: {
    user: usersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export default store;
