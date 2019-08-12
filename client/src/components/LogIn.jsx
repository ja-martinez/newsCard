import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

class LogIn extends React.Component {
  state = {
    login: {
      email: "",
      password: ""
    },
    register: {
      name: '',
      email: "",
      password: ""
    }
  };

  onChangeLogin = e => {
    const name = e.target.name;
    const value = e.target.value
    this.setState( prevState => ({
      login: {
        ...prevState.login,
        [name]: value
    }}
    ));
  };

  onChangeRegister = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState( prevState => ({
      register: {
        ...prevState.register,
        [name]: value
    }}));
  };
  
  register = async e => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.register.name,
        email: this.state.register.email,
        password: this.state.register.password
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    console.log(res.ok)
    this.setState({
      register: {
        name: '',
        email: '',
        password: ''
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="login-register">
          <div className="card form-card">
            <form
              className="loginForm"
              onSubmit={async e => {
                e.preventDefault();
                await this.props.login(this.state.login.email, this.state.login.password);
                // if (this.props.loggedIn) {
                //   this.props.history.push("/savedArticles/");
                // }
                this.props.history.push("/savedArticles/");
              }}
            >
              <h1>Login</h1>
              <label className="form-label">Email Address</label>
              <input
                class="form-input"
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.onChangeLogin}
                value={this.state.login.email}
                required
              />
              <label className="form-label">Password</label>
              <input
                class="form-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChangeLogin}
                value={this.state.login.password}
                required
              />
              <input className="form-submit" type="submit" value="Login" />
            </form>
          </div>

          <div className="card form-card">
            <form
              className="loginForm"
              onSubmit={this.register}
            >
              <h1>Register</h1>
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.onChangeRegister}
                value={this.state.register.name}
                required
              />
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.onChangeRegister}
                required
                value={this.state.register.email}
              />
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChangeRegister}
                value={this.state.register.password}
                required
              />
              <input class="form-submit" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default LogIn;
