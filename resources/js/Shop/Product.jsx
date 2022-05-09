import React from "react";

export default function Product({product}) {
    
    const {name, price, picture, category_id} = product;

    const correctFormatPrice = Math.floor(price).toLocaleString();
    
    return (
        <div className="product-list__product">
            <img className="product-list__product__image" src={picture} alt={name} />
            <p className="product-list__product__name">{
                category_id == 1 ?
                "Jídelní stůl" : 
                category_id == 2 ?
                "Konferenční stůl" :
                category_id == 3 ?
                "Květináč" :
                null
            } {name}</p>
            <p>od {correctFormatPrice},-</p>
        </div>
    );
}