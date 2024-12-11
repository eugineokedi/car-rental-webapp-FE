import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = "";

export const forgotPassword = createAsyncThunk(
    "forgotPassword", 
     
    async(email, { rejectWithValue }) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            if (!response.ok) {
                return rejectWithValue("Failed to send password reset email link.");
            }

            const data = await response.json();
            return { message: 'Password reset link has been sent to your email.' };
        }catch(error) {
            return rejectWithValue('An error occurred. Please try again later.');
        }
    }
);

const initialState = {
    email: '',
    loading: false,
    message: '',
    error: '',
};

const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState,
    reducers: {
      setEmail: (state, action) => {
        state.email = action.payload;
      },
      resetState: () => initialState, // Reset state after success/failure
    },
    extraReducers: (builder) => {
      builder
        .addCase(forgotPassword.pending, (state) => {
          state.loading = true;
          state.error = '';
          state.message = '';
        })
        .addCase(forgotPassword.fulfilled, (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
        })
        .addCase(forgotPassword.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

export const { setEmail, resetState } = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;