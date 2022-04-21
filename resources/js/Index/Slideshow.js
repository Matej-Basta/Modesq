import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slideshow() {
    return (
        <Carousel fade>

            <Carousel.Item className="carousel__item" interval={4000}>
                <div className="carousel__item__overlay carousel__item__overlay--1">
                </div>
                <Carousel.Caption className="carousel__item__caption">
                    <div className="carousel__item__caption__overlay"></div>
                    <h3 className="carousel__item__caption__heading">Tradiční a moderní betonové stoly</h3>
                    <p className="carousel__item__caption__text">Ozvláštněte si domov betonovým stolem. Tento nevšední materiál se bude ve vaší domácnosti krásně vyjímat a zároveň má mnoho vlasností, které byste u tradičních materiálů těžko hledali.</p>
                    <button className="carousel__item__caption__button">Nakupovat</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel__item" interval={4000}>
                <div className="carousel__item__overlay carousel__item__overlay--2">
                </div>
                <Carousel.Caption className="carousel__item__caption">
                    <div className="carousel__item__caption__overlay"></div>
                    <h3 className="carousel__item__caption__heading">Tradiční a moderní betonové stoly</h3>
                    <p className="carousel__item__caption__text">Ozvláštněte si domov betonovým stolem. Tento nevšední materiál se bude ve vaší domácnosti krásně vyjímat a zároveň má mnoho vlasností, které byste u tradičních materiálů těžko hledali.</p>
                    <button className="carousel__item__caption__button">Nakupovat</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel__item" interval={4000}>
                <div className=" carousel__item__overlay carousel__item__overlay--3">
                </div>  
                <Carousel.Caption className="carousel__item__caption">
                    <div className="carousel__item__caption__overlay"></div>
                    <h3 className="carousel__item__caption__heading">Tradiční a moderní betonové stoly</h3>
                    <p className="carousel__item__caption__text">Ozvláštněte si domov betonovým stolem. Tento nevšední materiál se bude ve vaší domácnosti krásně vyjímat a zároveň má mnoho vlasností, které byste u tradičních materiálů těžko hledali.</p>
                    <button className="carousel__item__caption__button">Nakupovat</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      );
}