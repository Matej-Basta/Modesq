import React from "react";

export default function Product({product}) {
    
    const {name, price, picture} = product;
    
    return (
        <>
            <p>{name}</p>
            <p>{price}</p>
            <img src={picture} alt={name} />
        </>
    );
}