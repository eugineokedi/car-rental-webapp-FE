import { configureStore } from '@reduxjs/toolkit';
import forgotPasswordReducer from '../features/forgotPassword/forgotPasswordSlice';
import resetPasswordReducer from '../features/forgotPassword/resetPasswordSlice';

const store = configureStore({
    reducer: {
        forgotPassword: forgotPasswordReducer,
        resetPassword: resetPasswordReducer, 
        auth: authReducer,
    }
})