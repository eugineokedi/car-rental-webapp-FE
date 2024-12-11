export default function Signup() {
    return(
        <div class="container">
            <h2>Sign Up</h2>
            <form>
                <div class="form-group">
                    <label for="fname">First Name: </label>
                    <input type="text" class="form-control" id="fname" placeholder="Enter first name" required/>
                </div>
                <div class="form-group">
                    <label for="lname">Last Name: </label>
                    <input type="text" class="form-control" id="lname" placeholder="Enter last name" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email address: </label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password: </label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" required/>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password: </label>
                    <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm password" required/>
                </div>
                <div class="submit-btn">
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    )
}