// store.js
import { configureStore } from '@reduxjs/toolkit';
import statsSlice from './statsSlice'
// import rootReducer from './reducers'; // Импортируйте ваш редьюсер

const store = configureStore({
  reducer: {
    statsSlice: statsSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
