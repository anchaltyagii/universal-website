import React from "react";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div>
        <h2>Contact Us</h2>
        <div>
          <h3>Our Address</h3>
        </div>
        <div>
          <h3>Send us for any quiry</h3>
          <a href="tel:9871451011">Call</a>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0819970409484!2d77.38627631455736!3d28.537254995138642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8afb6828099%3A0xdc0358d235ae2c87!2sUniversal%20Electrical%20Works!5e0!3m2!1sen!2sin!4v1673119292795!5m2!1sen!2sin"
            width="60%"
            height="300"
            border="0"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
