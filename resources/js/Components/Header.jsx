import React from "react";

export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <a>E-shop</a>
                <a>Úvod</a>
                <a>O nás</a>
                <a>Blog</a>
                <a>Kontakt</a>
            </nav>
            <div className="header__logo">
                <img alt="logo" className="header__logo__pic" src="/img/qybic_logo.png"></img>
            </div>
            <div className="header__icon">
                <i className="fa-solid fa-cart-shopping header__icon__pic"></i>
            </div>
        </header>
    );
}