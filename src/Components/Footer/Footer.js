import React from "react";
import "./Footer.scss";

const Footer = () => {
  const universal_year = new Date();

  return (
    <div className="footer-wrapper">
      &#169; {universal_year.getFullYear()} Universal Electrical Works | All
      rights reserved | Terms of service
    </div>
  );
};

export default Footer;
