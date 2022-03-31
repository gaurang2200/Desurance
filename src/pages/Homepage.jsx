import React from "react";
import HeroSection from "../components/HeroSection";
import Membership from "../components/Membership";
import Product from "../components/Product";
import Steps from "../components/Steps";

const HomePage = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <Steps />
            <Membership />
        </React.Fragment>
    )
}

export default HomePage;