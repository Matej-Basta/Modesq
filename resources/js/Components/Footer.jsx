import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__about">
                <h5>About company overview</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero necessitatibus numquam quo aspernatur. Esse, animi?</p>
                <div>
                    <FontAwesomeIcon icon="fa-brands fa-cc-visa" />
                    <FontAwesomeIcon icon="fa-brands fa-cc-paypal" />
                    <FontAwesomeIcon icon="fa-brands fa-cc-mastercard" />
                </div>
            </div>
        </div>
    );
}