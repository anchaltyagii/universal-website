import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { img } from "../../Assets";
import "./Caraousel.scss";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img.coil_wire} alt="First slide" />
        <Carousel.Caption>
          <h3>Motar Winding Wire</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={img.wire_reels} alt="Second slide" />
        <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={img.alu_winding_wire}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Aluminium Winding wire</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
