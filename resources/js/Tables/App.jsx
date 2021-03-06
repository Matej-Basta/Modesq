import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//custom components
import Header from "../Components/Header";
import Tables from "./Tables";
import ProductPage from "../Components/ProductPage";
import About from "../Components/About";
import Footer from "../Components/Footer";
//custom functions
import { fetchProducts } from "../Functions/fetchingFunctions";

export default function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts(setProducts);
    }, []);

    return (
        <>
            <Header />

            <BrowserRouter>

                <Routes>
                    <Route exact path="/obchod/stoly" element={<Tables products={products}/>} />
                    <Route path="/obchod/stoly/:product" element={<ProductPage />} />
                </Routes>
                
            </BrowserRouter>

            <About />

            <Footer />
        </>

    );
}