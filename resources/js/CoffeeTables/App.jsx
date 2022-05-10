import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//custom components
import Header from "../Components/Header";
import CoffeeTables from "./CoffeeTables";
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

                    <Route exact path="/obchod/stolky" element={<CoffeeTables products={products}/>} />

                </Routes>

            </BrowserRouter>

            <About />

            <Footer />
        </>

    );
}