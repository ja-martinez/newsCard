import React from 'react';

class LogIn extends React.Component{
    state = {
        email: '',
        password: '',
        isLoggedin: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ isLoggedin: true });
        const { email, password } = this.state;

        // stop here if form is invalid
        if (!(email && password)) {
            return;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="loginForm">
                    <form onSubmit={this.handleSubmit}>
                        <h1>LOG IN</h1>
                        <p className="loginInput">
                            <label>Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={this.state.email}
                                onChange={this.handleChange }
                                required />
                        </p>
                        <p className="loginInput">
                            <label>Password</label>
                            <input 
                                type="password" 
                                name="passwowrd" 
                                placeholder="Password" 
                                value={this.state.password}
                                onChange={this.handleChange}
                                required/>
                        </p>
                        <button type="submit">Log In</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default LogIn;