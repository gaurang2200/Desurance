import { Box, Typography } from "@mui/material";
import React from "react";
import MembershipCard from "./MembershipCard";
import gradientBg from '../images/gradientBg.svg'

const Membership = () => {
    return (
        <React.Fragment>
            <Box sx={{ position:'relative', overflow:'hidden', pb:8,  display: 'flex', flexDirection:'column', alignItems:'center' }}>
            <Typography variant="h2" sx={{ position: 'relative', zIndex: 1}} >Get Membership</Typography>
            <img
            src={gradientBg}
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                zIndex: "0",
            }}
            />
            <Box sx={{ width:'100%', py: 10, px: {lg: 12, md: 6}, display: 'flex', justifyContent:'center' }}>
                <MembershipCard 
                    price="$9.99"
                    features="Basic Service"
                    type="Basic"
                    time="month"
                    access="Access to no features"
                    customer="No Customer Support"
                    funds="Very Limited funds Insured"
                />
                <MembershipCard 
                    price="$99.99"
                    features="Professional Services"
                    type="Premium"
                    time="year"
                    access="Access to all features"
                    customer="24/7 Customer Support"
                    funds="All funds Insurance"
                />
                <MembershipCard 
                    price="$59.99"
                    features="Advanced Services"
                    type="Advanced"
                    time="6 months"
                    access="Access to limited features"
                    customer="24/7 Customer Support"
                    funds="Limited funds Insured"
                />
            </Box>
            </Box>
        </React.Fragment>
    )
}

export default Membership;