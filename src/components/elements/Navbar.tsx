import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar shadow bg-white fixed-top">
      <div className="container">
        <div>
          <Link to="/" className="navbar-brand1 " style={{ color: "#008cba" }}>
            <strong>Generate Pin</strong>
          </Link>
          &nbsp; &nbsp; &nbsp;
          <Link
            to="/savedpins"
            className="navbar-brand1"
            style={{ color: "#008cba" }}
          >
            <strong>Saved Pins</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
