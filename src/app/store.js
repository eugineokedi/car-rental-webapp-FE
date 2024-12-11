import { configureStore } from '@reduxjs/toolkit';
import forgotPasswordReducer from '../features/forgotPassword/forgotPasswordSlice';

const store = configureStore({
    reducer: {
        forgotPassword: forgotPasswordReducer,
    }
})