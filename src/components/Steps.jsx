import { Box } from "@mui/material";
import React from "react";
import StepsCard from "./StepsCard";

const Steps = () => {
    return (
        <React.Fragment>
            <Box sx={{ py: 24, px: {lg: 12, md: 6}, position: 'relative', overflow: 'hidden' }}>
                <StepsCard
                    id="01"
                    alignment="left"
                    cardTitle="Create Your Account"
                    buttonText="Create Now"
                />
                <StepsCard
                    id="02"
                    alignment="right"
                    cardTitle="Select a Membership"
                    buttonText="Create Account"
                />
                <StepsCard
                    id="03"
                    alignment="left"
                    cardTitle="Add a Nominee"
                    buttonText="Add Nominee"
                />
            </Box>
        </React.Fragment>
    )
}

export default Steps;