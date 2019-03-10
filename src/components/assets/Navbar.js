import React from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
  const { titleName } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img style={{ height: "60px" }} src={logo} alt="React-Logo" />
          {titleName}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fas fa-question-circle" /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/add">
                <i className="fas fa-address-card" /> Add Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  titleName: "My-App"
};

Navbar.propTypes = {
  titleName: PropTypes.string.isRequired
};

export default Navbar;
