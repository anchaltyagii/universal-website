import React from "react";
import { NavLink } from "react-router-dom";
import { img } from "../../Assets";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="img-wrapper">
        <NavLink to="/">
          <img src={img.wire_reels} alt="logo" className="logo-icon" />
        </NavLink>
      </div>
      <div className="navbar-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
