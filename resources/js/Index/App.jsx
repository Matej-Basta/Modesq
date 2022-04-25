import React from "react";
//custom components
import Header from "../Components/Header";
import Slideshow from "./Slideshow";
import Products from "./Products";
import Blog from "./Blog";

export default function App() {
    return (
        <>
        <Header />
        <Slideshow />
        <Products />
        <Blog />
        <h1>This is the App component</h1>
        </>
    )
}