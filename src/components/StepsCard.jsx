import { Typography, Box, Button } from "@mui/material";
import React from "react";
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import StepBg from "../images/stepsbg.svg";

function StepsCard({ id, alignment, cardTitle, buttonText, buttonClick, bodyText }) {
  return (
    <Box sx={{ width: '100%', display: 'flex'}} justifyContent={alignment}>
    <Box
      sx={{
        width: "50vw",
        height: "25em",
        position: "relative",
      }}
    >
      <img
          alt="bg_image"
          src={StepBg}
          style={{ position: "absolute", top: "-70%", [alignment]: "-20%" }}
      />
      <Box sx={{ position: "absolute", top: "0", [alignment]: "5%" }}>
        <Typography fontSize="10em" fontWeight={600} sx={{ opacity: "0.1" }}>
          {id}
        </Typography>
      </Box>
      <Box alignItems={(alignment === "left")? "flex-start": "flex-end"} sx={{ display:'flex', flexDirection: 'column', position: "relative", top: "25%", left: "16%", pr: 36 }}>
        <Typography
            fontSize="4em"
            lineHeight="1.1em"
            gutterBottom
            fontWeight={300}
            align={alignment}
          sx={{
            background: "linear-gradient(90deg, #EE0979 0%, #FF6A00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
            {cardTitle}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }} align={alignment}>
        {bodyText}
        </Typography>
        <Button onClick={buttonClick} variant="text" sx={{ width:"fit-content", borderRadius: '5px'}}>
            {buttonText} <ArrowRightAltRoundedIcon />
        </Button>
      </Box>
    </Box>
    </Box>
  );
}

export default StepsCard;
