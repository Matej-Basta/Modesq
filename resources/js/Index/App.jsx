import React from "react";
//custom components
import Header from "../Components/Header";
import Slideshow from "./Slideshow";
import Products from "./Products";
import Blog from "./Blog";
import About from "../Components/About";
import Footer from "../Components/Footer";

export default function App() {
    return (
        <>
        <Header />
        <Slideshow />
        <Products />
        <Blog />
        <About />
        <Footer />
        </>
    )
}