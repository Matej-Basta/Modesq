import React from "react";

export default function Header() {
    return (
        <header class="header">
            <nav class="header__nav">
                <a>E-shop</a>
                <a>Úvod</a>
                <a>O nás</a>
                <a>Blog</a>
                <a>Kontakt</a>
            </nav>
            <div class="header__logo">
                <img alt="logo" class="header__logo__pic" src="/img/qybic_logo.png"></img>
            </div>
            <div class="header__icon">
                <i class="fa-solid fa-cart-shopping header__icon__pic"></i>
            </div>
        </header>
    );
}