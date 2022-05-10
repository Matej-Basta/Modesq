import React from "react";
//custom components
import ProductList from "../Components/ProductList";

export default function Tables({products}) {
    return (
        <>
            <p className="text">Vybraný stůl si můžete upravit podle vlastní představy. Zvolte si ideální velikost a barvu desky tak, aby se hodil do vašeho interiéru, nebo na zahradu.</p>
            <ProductList products={products}/>

        </>
    );
}