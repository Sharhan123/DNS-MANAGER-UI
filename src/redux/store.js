
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slices/authSlice';

 const store = configureStore({
    reducer: {
        token: tokenReducer,
    },
});

export default store;
