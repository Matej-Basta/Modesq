import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
//custom components
import Header from "../Components/Header";
import Tables from "./Tables";

export default function App() {

    const [products, setProducts] = useState([]);

    //function that fetches products of a specific category
    const fetchProducts = async () => {
        //getting category ID
        let categoryId = null;
        const categoryName = location.pathname.split("/")[location.pathname.split("/").length - 1];
        switch(categoryName) {
            case "stoly":
                categoryId = 1;
                break;
            case "stolky":
                categoryId = 2;
                break;
            case "kvetinace":
                categoryId = 3;
                break;
            case "doplnky":
                categoryId = 4;
                break;
        }

        const response = await axios.get(`/api/products/${categoryId}`);;
        
        setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Header />

            <BrowserRouter>

                <Routes>

                    <Route exact path="/obchod/stoly" element={<Tables products={products}/>} />
                    <Route exact path="/obchod/stolky" element={<></>} />

                </Routes>

            </BrowserRouter>
        </>

    );
}