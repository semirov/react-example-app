import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  scrollToTop() {
    window.scrollTo(0,0);
  }


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" onClick = {this.scrollToTop}  className="navbar-brand">JSONPlaceholder posts</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" onClick = {this.scrollToTop}  className="nav-link">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
