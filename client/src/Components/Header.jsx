import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import SavedArticles from "./SavedArticles";
import LogIn from "./LogIn";

class Header extends React.Component {
  state = {
    savedArticles: [],
    notes: [],
    isLoggedIn: false
  };

  render() {
    return (
      <Router>
        <nav class="main-nav">
          <div class="logo links">
            <Link
              to="/"
              className="link"
            >
              <h3>newsCard</h3>
            </Link>
          </div>
          <div class="links nav-links">
            <Link to="/" className="main-nav-links">
              Home
            </Link>
            <Link to="/savedArticles" className="main-nav-links">
              Saved Articles
            </Link>
            <Link to="/login" className="main-nav-links">
              LogIn
            </Link>
          </div>
        </nav>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <h3 className="logo">NEWSCARD</h3>
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link
                to="/"
                style={{ padding: "10px", color: "white" }}
                className="routerLink"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/savedArticles"
                style={{ padding: "10px", color: "white" }}
                className="routerLink"
              >
                Saved Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                style={{ color: "white" }}
                className="routerLink"
              >
                LogIn
              </Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/savedArticles" component={SavedArticles} />
        <Route path="/login" component={LogIn} />
      </Router>
    );
  }
}

export default Header;
