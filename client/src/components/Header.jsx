import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../redux/containers/HomeContainer.js";
import LogIn from "../redux/containers/LogInContainer.js";
import SavedArticles from "../redux/containers/SavedArticlesContainer.js";

class Header extends React.Component {

  render() {
    return (
      <Router>
        <nav className="main-nav">
          <div className="logo links">
            <Link
              to="/"
              className="link"
            >
              <h3>newsCard</h3>
            </Link>
          </div>
          <div className="links nav-links">
            <Link to="/" className="main-nav-links">
              Home
            </Link>
            {this.props.loggedIn ? <Link to="/savedArticles" className="main-nav-links">
              Saved Articles
            </Link> : ''}
            {!this.props.loggedIn ? <Link to="/login" className="main-nav-links">
              Login
            </Link> : <button className="main-nav-links" onClick={() => this.props.logout()}>Logout</button>}
          </div>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/savedArticles" component={SavedArticles} />
        <Route path="/login" component={LogIn} />
      </Router>
    );
  }
}

export default Header;
