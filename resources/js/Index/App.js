import React from "react";
//custom components
import Header from "../Components/Header";
import Slideshow from "./Slideshow";
import Products from "./Products";

export default function App() {
    return (
        <>
        <Header />
        <Slideshow />
        <Products />
        <h1>This is the App component</h1>
        </>
    )
}