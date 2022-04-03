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
                    cardTitle="Select a Membership"
                    buttonText="Get Membership"
                    buttonClick={scroll}
                    bodyText={`You can choose membership based on your requirements, if you need short-term protection of your funds
you can get the basic membership that only costs 9.99$!. If you need a All in one plan that ensures the safety of all your funds
you can get the Premium Plan, You can also customize the funds you want to secure!.`}
                />
                <StepsCard
                    id="02"
                    alignment="right"
                    cardTitle="Add a Nominee"
                    buttonText="Add Nominee"
                    buttonClick={addNominee}
                    bodyText={`Adding a nominee enables you to choose the wallet where your funds will be transferred in case of a mishappening.`}
                />
                <StepsCard
                    id="03"
                    alignment="left"
                    cardTitle="Secure Your Funds"
                    buttonText="Secure Funds"
                    buttonClick={scroll}
                    bodyText={`After adding a nominee you can choose the funds you want to ensure and press submit, and Voila! all you funds will be secured.`}
                />
            </Box>
        </React.Fragment>
    )
}

export default Steps;