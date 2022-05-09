import React from "react";
//custom components
import Product from "./Product";

export default function ProductList({products}) {

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    );
}