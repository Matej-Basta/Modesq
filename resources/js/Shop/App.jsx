import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//custom components
import Header from "../Components/Header";

export default function App() {
    return (
        <>
            <Header />

            <BrowserRouter>

                <Routes>

                    <Route path="/obchod/stoly" element={} />
                    <Route path="/obchod/stolky" element={} />

                </Routes>

            </BrowserRouter>
        </>

    );
}