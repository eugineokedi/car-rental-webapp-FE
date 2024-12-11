import React, {useState} from 'react';

export default function Forgotpassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

     function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");
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
                     onChange={(e) => setEmail(e.target.value)} 
                     required
                     />
                </div>
                <div class="submit-button">
                    {error && <div className="error-message">{error}</div>}
                    {message && <div className="success-message">{message}</div>}
                    <button type="submit" disabled={loading} class="btn btn-primary">{loading ? 'Sending...' : 'Submit'}</button>
                </div>
            </form>
        </div>
    )
}