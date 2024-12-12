import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../features/authentication/authSlice';


export default function Login() {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();
        
        if(!email || !password) {
            setError("All fields are required.");
            return;
        }
        setError("");

        dispatch(loginStart());

        try {
            const user = await logIn(credentials);
            dispatch(loginSuccess(user));
        }catch(error) {
            dispatch(loginFailure(error));
            setError("Invalid credentials.");
        }
    }
    return(
        <div className="container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({...credentials, email: e.target.value})}
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
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
                    required
                    />
                </div>
            </form>
        </div>
    )
}