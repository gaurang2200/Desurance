import { Box } from "@mui/material";
import React from "react";
import StepsCard from "./StepsCard";

const Steps = ({ stepsRef, scroll, addNominee }) => {
    return (
        <React.Fragment>
            <Box sx={{ py: 24, px: {lg: 12, md: 6}, position: 'relative', overflow: 'hidden' }}>
                <Box ref={stepsRef}></Box>
                <StepsCard
                    id="01"
                    alignment="left"
                    cardTitle="Create Your Account"
                    buttonText="Create Account"
                    buttonClick={scroll}
                />
                <StepsCard
                    id="02"
                    alignment="right"
                    cardTitle="Select a Membership"
                    buttonText="Get Membership"
                    buttonClick={scroll}
                />
                <StepsCard
                    id="03"
                    alignment="left"
                    cardTitle="Add a Nominee"
                    buttonText="Add Nominee"
                    buttonClick={addNominee}
                />
            </Box>
        </React.Fragment>
    )
}

export default Steps;