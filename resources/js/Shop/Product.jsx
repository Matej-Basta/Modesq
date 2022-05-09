import React from "react";

export default function Product({product}) {
    
    const {name, price, picture} = product;

    const correctFormatPrice = Math.floor(price).toLocaleString();
    
    return (
        <div className="product-list__product">
            <img className="product-list__product__image" src={picture} alt={name} />
            <p className="product-list__product__name">Jidelní stůl {name}</p>
            <p>od {correctFormatPrice},-</p>
        </div>
    );
}