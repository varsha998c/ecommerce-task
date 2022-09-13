import React from "react";
import styled from "styled-components";
import Footer from "../general/Footer";
import Categories from "./Categories";
import Conditions from "./Conditions";
import Spotlight from "./Spotlight";
import "../../assets/css/style.css";
import Login from "./Login";
import Items from "./Items";

function HomePage() {
    return (
        <>
            {/* <Login /> */}
            <Spotlight />
            <Categories />
            <Conditions />
            <Footer />
        </>
    );
}

export default HomePage;
