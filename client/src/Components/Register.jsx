import React from 'react';

function Register() {
    return (
        <div className="wrapper-register">
            <div className="register">
                <form>
                    <h1>REGISTER</h1>
                    <p>
                        <label>Name</label>
                        <input type="name" name="name" placeholder="Jane Doe" required />
                    </p>
                    <p>
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="myemail@mail.com" required />
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="eg.&9TYUO" autocomplete="on" required />
                    </p>
                    <p>
                        <label>Confirm Password</label>
                        <input type="password" name="confirmpassword" placeholder="eg.&9TYUO" autocomplete="on" required />
                    </p>
                    <p class="register button">
                        <input type="submit" value="REGISTER" />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register;