import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__parts">
                <div className="footer__container-of-parts">
                    <div className="footer__parts__part">
                        <h5 className="footer__parts__part__heading">O značce</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero necessitatibus numquam quo aspernatur. Esse, animi?</p>
                        <div className="footer__parts__part__icon-container">
                            <i className="fa-brands fa-cc-visa footer__parts__part__icon-container__icon"></i>
                            <i className="fa-brands fa-cc-paypal footer__parts__part__icon-container__icon"></i>
                            <i className="fa-brands fa-cc-mastercard footer__parts__part__icon-container__icon"></i>
                        </div>
                    </div>
                </div>
                <div className="footer__container-of-parts">
                    <div className="footer__parts__part">
                        <h5 className="footer__parts__part__heading">Kategorie</h5>
                        <ul className="footer__parts__part__list">
                            <li>Stoly</li>
                            <li>Stolky</li>
                            <li>Světla</li>
                            <li>Květináče</li>
                            <li>Doplňky</li>
                        </ul>
                    </div>
                </div>

                <div className="footer__container-of-parts">
                    <div className="footer__parts__part">
                        <h5 className="footer__parts__part__heading">Pro zákazníky</h5>
                        <ul className="footer__parts__part__list">
                            <li>Nejčastější otázky</li>
                            <li>Doprava</li>
                            <li>Platba</li>
                            <li>Obchodní podmínky</li>
                            <li>Ochrana osobních údajů</li>
                        </ul>
                    </div>
                </div>

                <div className="footer__container-of-parts">
                    <div className="footer__parts__part">
                        <h5 className="footer__parts__part__heading">Kontakt</h5>
                        <ul className="footer__parts__part__list">
                            <li className="footer__parts__part__list__item">
                                <i className="fa-solid fa-phone"></i>
                                <p>Telefon: 123 456 789</p>
                            </li>
                            <li className="footer__parts__part__list__item">
                                <i className="fa-solid fa-envelope"></i>
                                <p>Email: modesq@modesq.cz</p>
                            </li>
                        </ul>
                        <div className="footer__parts__part__icon-container">
                            <i className="footer__parts__part__icon-container__icon fa-brands fa-facebook"></i>
                            <i className="footer__parts__part__icon-container__icon fa-brands fa-instagram"></i>
                            <i className="footer__parts__part__icon-container__icon fa-brands fa-twitter"></i>
                            <i className="footer__parts__part__icon-container__icon fa-brands fa-linkedin"></i>
                            <i className="footer__parts__part__icon-container__icon fa-brands fa-pinterest"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}