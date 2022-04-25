import React from "react";
//custom components
import Header from "../Components/Header";
import Slideshow from "./Slideshow";
import Products from "./Products";
import Blog from "./Blog";
import About from "./About";

export default function App() {
    return (
        <>
        <Header />
        <Slideshow />
        <Products />
        <Blog />
        <About />
        <h1>This is the App component</h1>
        </>
    )
}