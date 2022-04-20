import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slideshow() {
    return (
        <Carousel fade>

            <Carousel.Item className="carousel__item" interval={4000}>
                <div className="carousel__item__overlay carousel__item__overlay--1">
                </div>
                <Carousel.Caption className="carousel__item__caption">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel__item" interval={4000}>
                <div className="carousel__item__overlay carousel__item__overlay--2">
                </div>
                <Carousel.Caption className="carousel__item__caption">
                    <h3>hah slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel__item" interval={4000}>
                <div className=" carousel__item__overlay carousel__item__overlay--3">
                </div>  
                <Carousel.Caption className="carousel__item__caption">
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      );
}