import React from "react";
//custom components
import ProductList from "./ProductList";

export default function CoffeeTables({products}) {
    return (
        <>
            <p className="text">Vybraný stolek si můžete upravit podle vlastní představy. Zvolte si ideální velikost a barvu desky tak, aby se hodil do vašeho interiéru.</p>
            <ProductList products={products}/>
        </>    
    )
}