import React from "react";
import HomePage from "../screens/HomePage";
import { Route, Routes } from "react-router-dom";
import Product from "../includes/women/Product";
import Login from "../screens/Login";
import Items from "../screens/Items";
import SinglePage from "../screens/SinglePage";

function AppRouter() {
    return (
        <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path=":spot/" element={<Product />} />
            <Route path="/shop" element={<Items />} />
            <Route path=":spot/single-page/:id" element={<SinglePage />} />
        </Routes>
    );
}

export default AppRouter;
