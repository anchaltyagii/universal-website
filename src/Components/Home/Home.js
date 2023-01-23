import React from "react";
import Carousel from "../Caraousel/Caraousel";
import Layout from "../Layout/Layout";
import { img } from "../../Assets";
import "./Home.scss";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <Carousel />

        <div className="our-services-wrapper">
          <h3>Our services</h3>
          <div className="our-services-container">
            <div className="our-services-box">
              <img
                src={img.services_copper_wire}
                height="100px"
                width="100px"
              />{" "}
              <p>Copper Wires</p>
            </div>
            <div className="our-services-box">
              <img src={img.services_alu_wire} height="100px" width="100px" />{" "}
              <p>Aluminium Wires</p>
            </div>
            <div className="our-services-box">
              <img
                src={img.services_submersible_wire}
                height="100px"
                width="100px"
              />
              <p>Submersible Wires</p>
            </div>
            <div className="our-services-box">
              <img
                src={img.services_ball_bearing}
                height="100px"
                width="100px"
              />
              <p>Ball Bearing</p>
            </div>
          </div>
        </div>

        <div className="why-chooseus-wrapper">
          <div className="why-chooseus-container">
          <h3>Why Choose Us?</h3>
            <div className="why-chooseus-box">
              <img /> <p>Copper Wires</p>
            </div>
            <div className="why-chooseus-box">
              <img /> <p>Aluminium Wires</p>
            </div>
            <div className="why-chooseus-box">
              <img /> <p>Submersible Wires</p>
            </div>
            <div className="why-chooseus-box">
              <img /> <p>Ball Bearing</p>
            </div>
          </div>

          <div className="why-choose-img-wrapper">
            <img src={img.coil_wire} height="100%" width="100%" />
          </div>
        </div>

        <div className="our-services-wrapper">
          <h3>Our Happy Customers</h3>
          <div className="our-services-container">
            <div className="our-services-box">
              <img /> <p>Copper Wires</p>
            </div>
            <div className="our-services-box">
              <img /> <p>Aluminium Wires</p>
            </div>
            <div className="our-services-box">
              <img /> <p>Submersible Wires</p>
            </div>
            <div className="our-services-box">
              <img /> <p>Ball Bearing</p>
            </div>
          </div>
        </div>

        <div className="why-chooseus-wrapper">
          <h3>Sign up for newsletter</h3>
          <div className="why-chooseus-container"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
