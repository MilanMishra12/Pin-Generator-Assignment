import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar shadow bg-white fixed-top">
      <div className="container">
        <div>
          <Link to="/" className="navbar-brand1">
            <strong>Generate Pin</strong>
          </Link>

          <Link to="/savedpins" className="navbar-brand1">
            <strong>Saved Pins</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
