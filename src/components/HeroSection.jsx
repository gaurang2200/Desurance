import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import heroImage from "../images/img1.svg";
import heroBg from "../images/bg1.svg";
import gradientBg from "../images/gradientBg.svg";

const HeroSection = () => {
  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mx: { md: "5em", sm: "3em", xs: "1em" }, pb: "2em", height: '100%', position: 'relative' }}
      >
        <img
          src={heroBg}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: "0",
          }}
        />
        <img
          src={gradientBg}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: "0",
          }}
        />
        <img src={heroImage} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{ position: "relative", zIndex: "1" }}
        >
          <Typography
            align="center"
            variant="h2"
            gutterBottom
            fontWeight={700}
            sx={{ mt: 4 }}
          >
            Desurance
          </Typography>
          <Typography align="center" variant="h3" gutterBottom fontWeight={600}>
            Recovering digital assets made easy
          </Typography>
          <Typography
            align="center"
            vairant="body1"
            gutterBottom
            component="div"
            sx={{ my: 3 }}
          >
            Tired of your funds being locked in a wallet. Desurance helps
            recover your ERC20 assets to an alternate <br />
            wallet address provided by you by transferring them in case of some
            mishappenings.
          </Typography>
          <Button disableRipple className="btn" sx={{ p: "0.8em 3em" }}>
            <Typography variant="button" fontWeight={700}>
              Get Started
            </Typography>
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default HeroSection;
