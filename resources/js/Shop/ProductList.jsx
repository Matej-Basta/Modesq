import React from "react";

export default function ProductList({products}) {

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <p key={index}>{product.name}</p>
            ))}
        </div>
    );
}