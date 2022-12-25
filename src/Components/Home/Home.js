import React from 'react';
import Carousel from '../Caraousel/Caraousel';
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Carousel />
      <div>
        Our services
      </div>
      <div>
        Our Happy Customers
      </div>
      <div>
        Why Choose Us?
      </div>
      <div>
        Subscribe to news letter
      </div>
    </div>
  )
}

export default Home
