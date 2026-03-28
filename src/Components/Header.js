

import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from "react-router-dom";
import '../App.css'


const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow">
      <div className="container">
        {/* Website Title (Bold & Larger, Left Side) */}
        <Link className="navbar-brand fw-bold fs-4 text-warning" to="/">
          {title}
        </Link>

        {/* Navbar Links (Right Side) */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold px-3 rounded nav-hover " to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold px-3 rounded nav-hover " to="/Add">Add</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold px-3 rounded nav-hover" to="/View">View</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold px-3 rounded nav-hover" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Default Props
Header.defaultProps = {
  title: "My Website",
};

// Prop Types
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
 

