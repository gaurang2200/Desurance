import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const Loader = ({ isLoading }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', postion:'absolute', zIndex: 40 }}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default Loader;