import React from "react";
import HeroSection from "../components/HeroSection";
import Membership from "../components/Membership";
import Product from "../components/Product";
import Steps from "../components/Steps";

const HomePage = () => {
    const memberRef = React.useRef(null);
    const stepsRef = React.useRef(null);

    const executeMemberScroll = () => memberRef.current.scrollIntoView();
    const executeStepsScroll = () => stepsRef.current.scrollIntoView();

    return (
        <React.Fragment>
            <HeroSection scroll={executeStepsScroll} />
            <Steps stepsRef={stepsRef} scroll={executeMemberScroll} />
            <Membership myRef={memberRef} />
        </React.Fragment>
    )
}

export default HomePage;