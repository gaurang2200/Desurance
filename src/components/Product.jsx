import { Box, TextField, Typography, Grid } from "@mui/material";
import React from "react";

const Product = () => {
  return (
    <React.Fragment>
      <Box
        display="flex"
        sx={{ mt: 4, mx: 12, pb: 4, flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h2">Insure Your Funds</Typography>
        <Box>
          <Grid container spacing={1} sx={{ p: 6, width: '70vw', alignItems: 'center' }}>
            <Grid item xs={3}>
                <Typography variant="h5" sx={{mr: 2}}>Enter Nominee Address: </Typography>
            </Grid>
            <Grid item xs={9}>
                <TextField fullWidth placeholder="Nominee Address" sx={{ border: '1px solid white', borderRadius: '0.2em', color:'white'  }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Product;
