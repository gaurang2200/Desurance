import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import MembershipCard from "./MembershipCard";
import gradientBg from '../images/gradientBg.svg'

const Membership = ({ myRef, handleClickOpen }) => {
    return (
        <React.Fragment>
            <Box ref={myRef} sx={{ position:'relative', overflow:'hidden', pb:8,  display: 'flex', flexDirection:'column', alignItems:'center' }}>
            <Typography variant="h2" sx={{ position: 'relative', zIndex: 1}} >Get Membership</Typography>
            <Grid container spacing={3} sx={{ width:'100%', py: 10, justifyContent:'center' }}>
                <Grid item xs={3.5}>
                <MembershipCard 
                    price={9.99}
                    features="Basic Service"
                    type="Basic"
                    time="month"
                    access="Access to one features"
                    customer="No Customer Support"
                    funds="Very Limited funds Insured"
                    handleClickOpen={handleClickOpen}
                />
                </Grid>

                <Grid item xs={3.5}>
                <MembershipCard 
                    price={99.99}
                    features="Professional Services"
                    type="Premium"
                    time="year"
                    access="Access to all features"
                    customer="24/7 Customer Support"
                    funds="All funds Insurance"
                    handleClickOpen={handleClickOpen}
                /></Grid>

                <Grid item xs={3.5}>
                <MembershipCard 
                    price={59.99}
                    features="Advanced Services"
                    type="Advanced"
                    time="6 months"
                    access="Access to limited features"
                    customer="24/7 Customer Support"
                    funds="Limited funds Insured"
                    handleClickOpen={handleClickOpen}
                /></Grid>
            </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Membership;