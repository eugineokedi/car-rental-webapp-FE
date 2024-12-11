export default function Login() {
    return(
        <div class="container">
            <h2>Log In</h2>
            <form>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password: </label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" required/>
                </div>
            </form>
        </div>
    )
}