import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, forgotPassword } from '../store/slices/forgotPasswordSlice';

export default function Forgotpassword() {
    const dispatch = useDispatch();
    const { email, loading, message, error } = useSelector((state) => state.forgotPassword);


     function handleSubmit(e) {
        e.preventDefault();
        dispatch(forgotPassword(email)); 
     }

    return(
        <div class="container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="email">Enter Your Email Address: </label>
                    <input 
                     type="email"
                     class="form-control" 
                     id="email" 
                     value={email} 
                     placeholder="Enter email"
                     onChange={(e) => dispatch(setEmail(e.target.value))} 
                     required
                     />
                </div>
                <div class="submit-button">
                    {error && <div className="error-message">{error}</div>}
                    {message && <div className="success-message">{message}</div>}
                    <button type="submit" disabled={loading} class="btn btn-primary">{loading ? 'Sending...' : 'Submit'}</button>
                </div>
            </form>
            <div className="login-redirect">
                <p>
                Remembered your password? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    )
}