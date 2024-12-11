import React, { useState, useEffect } from'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setToken, setNewPassword, setConfirmPassword, resetPassword } from '../../features/forgotPassword/resetPasswordSlice'


export default function ResetPassword() {
    const dispatch = useDispatch();
    const {
        email,
        token,
        newPassword,
        confirmPassword,
        error,
        message,
        loading
    } = useSelector((state) => state.resetPassword);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const resetToken = urlParams.get("token");
        const userEmail = urlParams.get("email");

        if (resetToken && userEmail) {
            dispatch(setToken(resetToken));
            dispatch(setEmail(userEmail));
        } else {
            dispatch(setError("Invalid reset link."));
        }
    }, [dispatch]);

    function handleSubmit(e) {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            dispatch(setError("Passwords do not match."));
            return;
        } 

        dispatch(resetPassword({ email, token, newPassword }));
    };
    return(
        <div className="container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="newPassword">New Password: </label>
                    <input
                     type="password"
                     class="form-control"
                     id="newPassword"
                     placeholder="Enter new password"
                     value={newPassword}
                     onChange={(e) => dispatch(setNewPassword(e.target.value))}
                     required
                     />
                </div>
                <div className="form-group">
                    <label for="confirmPassword">Confirm New Password: </label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="confirmPassword" 
                    placeholder="Confirm new password" 
                    value={confirmPassword} 
                    onChange={(e) => dispatch(setConfirmPassword(e.target.value))} 
                    required
                    />
                </div>

                {error && <div className="error-message">{error}</div>}
                {message && <div className="success-message">{message}</div>}

                <div className="submit-rbutton">
                    <button type="submit" disabled={loading} className="btn btn-primary">
                        {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </div>
            </form>
        </div>
    )

}