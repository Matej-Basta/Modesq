import React from "react";
//custom components
import Product from "./Product";

export default function ProductList({products, category}) {

    return (
        <div className="product-list">
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    );
}