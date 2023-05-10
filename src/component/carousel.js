import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import './Carousel.css';

const Caron = () => {
  return <>
    <Carousel>
      <Carousel.Item>
        <img
          className="
d-block w-100
"
          src="images/pex1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="
d-block w-100
"
          src="images/pex2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="
d-block w-100
"
          src="images/pex3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );


   
  </>
}

export default Caron;
