import React from "react";
//custom components
import ProductList from "./ProductList";

export default function Tables({products}) {
    return (
        <>
            <p className="text">Vybraný stůl si můžete upravit podle vlastní představy. Zvolte si ideální velikost a barvu desky tak, aby se hodil do vašeho interiéru, nebo na zarhadu.</p>
            <ProductList products={products}/>

        </>
    );
}