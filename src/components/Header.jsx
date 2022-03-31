import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { AppContext } from '../contexts/AppContext'

const Header = () => {
  const { userAddress, connectWallet } = React.useContext(AppContext);
  
  const truncateAddress = (address) => `${address.slice(0, 6)}...${address.slice(38)}`;

  return (
    <React.Fragment>
      <Box
        position="sticky"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ py: 4, px: { md: 10, xs: 3 }, backgroundColor: "transparent", zIndex: "1" }}
      >
        <Link href="#" variant="inherit">
          <Typography variant="h4" fontWeight={600}>
            Desurance
          </Typography>
        </Link>
        {
          (userAddress)?
          <Button
            variant="outlined"
            sx={{
              borderRadius: "2em",
              p: "0.1em",
              background: "linear-gradient(135deg, #FA00FF, #896FBA, #ff00dc7d, #0EC9FF)",
            }}
          >
          <Typography
            variant="button"
            fontWeight={600}
            sx={{ background: "black", borderRadius: "2em", p: "0.5em 1em" }}
          >{truncateAddress(userAddress)} <span style={{color: 'red'}}>&#8226;</span></Typography></Button>
          :
          <Button
          variant="outlined"
          onClick={connectWallet}
          sx={{
            borderRadius: "2em",
            p: "0.1em",
            background: "linear-gradient(135deg, #FA00FF, #896FBA, #ff00dc7d, #0EC9FF)",
          }}
        >
          <Typography
            variant="button"
            fontWeight={600}
            sx={{ background: "black", borderRadius: "2em", p: "0.5em 1em" }}
          >
            Connect <span style={{color: 'red'}}>&#8226;</span>
          </Typography>
        </Button>
        }
      </Box>
    </React.Fragment>
  );
};

export default Header;
