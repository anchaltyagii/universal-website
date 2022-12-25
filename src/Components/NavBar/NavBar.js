import React from "react";
import { NavLink } from "react-router-dom";
import tech_image from "../../Assets/tech_image.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="img-wrapper">
        <img src={tech_image} alt="logo" className="logo-icon"/>
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
