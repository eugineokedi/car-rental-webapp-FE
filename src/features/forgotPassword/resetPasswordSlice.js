import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = "";

export const resetPassword = createAsyncThunk(
    "reset-password",
    async ({email, token, newPassword}, {rejectWithValue}) => {
        try {
            const response = await fetch(`${API_URL}/resetPassword`, {
               method: 'POST',
               headers: {
                "Content-Type": "application/json",
               },
               body: JSON.stringify({email, token, newPassword}), 
            });

            if (response.success) {
                return response;
            }else {
                return rejectWithValue("Failed to reset the password.");
            }
        }catch(error) {
            return rejectWithValue('An error occurred. Please try again later.');
        }
    } 
);

const resetPasswordSlice = createSlice({
    name: "reset-password",
    initialState: {
        email: '',
        token: '',
        newPassword: '',
        confirmPassword: '',
        loading: false,
        error: null,
        message: null,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
          },
          setToken: (state, action) => {
            state.token = action.payload;
          },
          setNewPassword: (state, action) => {
            state.newPassword = action.payload;
          },
          setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder
          .addCase(resetPassword.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.message = null;
          })
          .addCase(resetPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.message = 'Password has been successfully reset.';
          })
          .addCase(resetPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });  
    },
});

export const { setEmail, setToken, setNewPassword, setConfirmPassword } = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;