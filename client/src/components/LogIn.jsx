import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

class LogIn extends React.Component {
  state = {
    email: "",
    password: "",
    articleandNote: []
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Router>
        <div className="login-register">
          <div className="card form-card">
            <form
              className="loginForm"
              onSubmit={async e => {
                e.preventDefault();
                await this.props.login(this.state.email, this.state.password);
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
                onChange={this.onChange}
                required
              />
              <label className="form-label">Password</label>
              <input
                class="form-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
                required
              />
              <input class="form-submit" type="submit" value="Login" />
            </form>
          </div>
          <div className="card form-card">
            <form
              className="loginForm"
              onSubmit={async e => {
                e.preventDefault();
                await this.props.login(this.state.email, this.state.password);
                this.props.history.push("/login/");
              }}
            >
              <h1>Register</h1>
              <label className="form-label">First Name</label>
              <input
                class="form-input"
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
                required
              />
              <label className="form-label">Email Address</label>
              <input
                class="form-input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
                required
              />
              <label className="form-label">Password</label>
              <input
                class="form-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
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
