import React from "react";
import {useState, useEffect} from "react";
//custom functions
import { fetchProduct } from "../Functions/fetchingFunctions";
import ProductDetails from "./ProductDetails";

export default function ProductPage() {
    
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        fetchProduct(setProduct);
        console.log("working");
    }, [])

    return (
        product ?
        <ProductDetails product={product} /> :
        null
    );
}