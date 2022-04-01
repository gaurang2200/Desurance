import React from "react";
import HeroSection from "../components/HeroSection";
import Membership from "../components/Membership";
import NomineeForm from "../components/NomineeForm";
import Steps from "../components/Steps";

const HomePage = () => {
    const [formOpen, setFormOpen] = React.useState(false);
    const [price, setPrice] = React.useState(0);

    const handleClickOpen = (cost) => {
        // Make a transaction from this account with the required 'cost'

        // Register the user

        // Open the Modal to add nominee
        setFormOpen(true);
    };
  
    const handleClose = () => {
      setFormOpen(false);
    };

    const memberRef = React.useRef(null);
    const stepsRef = React.useRef(null);

    const executeMemberScroll = () => memberRef.current.scrollIntoView();
    const executeStepsScroll = () => stepsRef.current.scrollIntoView();

    return (
        <React.Fragment>
            <HeroSection scroll={executeStepsScroll} />
            <Steps stepsRef={stepsRef} scroll={executeMemberScroll} />
            <Membership myRef={memberRef} handleClickOpen={handleClickOpen} />
            <NomineeForm open={formOpen} handleClose={handleClose} />
        </React.Fragment>
    )
}

export default HomePage;