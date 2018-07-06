import React from 'react';
import './Carousel.css';

const Carousel = () => (
    <div d="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="img1" alt="First slide"></div>
            <div className="carousel-item">
                <div className="img2" alt="Second slide"></div>
            </div>
            <div className="carousel-item">
                <div className="img3" alt="Third slide"></div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
        </div>
    </div>
)

export default Carousel;