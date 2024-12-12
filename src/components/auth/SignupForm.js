import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart, signUpSuccess, signUpFailure } from '../../features/authentication/authSlice';
import { signUp } from '../../api/auth';

export default function SignupForm() {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();

        if(!firstName || !lastName || !email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }
         
        setError("");

        dispatch(signUpStart());

        try {
            const user = await signUp(formData);
            dispatch(signUpSuccess(user));
        }catch(error) {
            dispatch(signUpFailure(error.message));
            setError(error.message);
        }
    };

 
    return(
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fname">First Name: </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="fname" 
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name: </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="lname" 
                    placeholder="Enter last name" 
                    value={lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address: </label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})} 
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} 
                    required
                    />
                </div>
                <div className="submit-btn">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    )
}