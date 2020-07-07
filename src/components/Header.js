import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";


class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <h2 className="site-title">Stefan Mirchev</h2>
        <Router>
          <nav className="menu">
            <ul>
            <li>
            <Link to="/projects">
              <FaBook className="fa-icons" size={20}/> Projects
            </Link>
          </li>
              <li>
                <Link to="/">
                    <FaHome className="fa-icons" size={21}/> Home
                </Link>
              </li>
            </ul>
          </nav>
        </Router>
      </header>
    );
  }
}

export default Header;
