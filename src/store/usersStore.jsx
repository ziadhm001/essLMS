import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../reducers/usersReducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: true
});

export default store;