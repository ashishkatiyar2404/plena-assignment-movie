import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="heading__main_container">
        <div className="heading__container">
          <h1 className="main__container">Aninome</h1>
        </div>
        <div className="nav__links">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/">
            ListAnime
          </Link>
        </div>
      </div>
      <div className="input__search">
        <input type="text" placeholder="Search anime or movie" />
      </div>
    </nav>
  );
};

export default Navbar;
