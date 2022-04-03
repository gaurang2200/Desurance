import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function MembershipCard({
  price,
  type,
  features,
  time,
  access,
  customer,
  funds,
  handleClickOpen
}) {
  return (
    <React.Fragment>
      <Paper
        elevation={12}
        sx={{
          borderRadius: "0.3em",
          display: "flex",
          flexDirection: "column",
          p: 4,
          mx: 4,
          alignItems: "center",
          height: "30em",
          backgroundColor: "#23252B",
          transform: (type === "Premium"? "scale(1.1)": ""),
          position: 'relative',
          zIndex: 20,
          transition: 'transform 0.1s ease-in-out',

            "&:hover":{
                transform: (type === "Premium"? "scale(1.15)": "scale(1.05)")
            }

        }}
      >
        <Typography variant="h4" fontWeight={600}>{type}</Typography>
        <Typography variant="subtitle1" color="#999" sx={{ my: 2 }}>{features}</Typography>
        <Typography variant="h3" fontWeight={400} sx={{ my: 1 }}>${price}</Typography>
        <Typography variant="subtitle1" color="#999">/per {time}</Typography>
        <Typography variant="subtitle1" color="#999">Payment in ETH only</Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 3,
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <CheckCircleRoundedIcon
            sx={{
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #FA00FF, #896FBA, #ff00dc7d, #0EC9FF)",
            }}
          />
          &nbsp;&nbsp;{access}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 3,
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <CheckCircleRoundedIcon
            sx={{
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #FA00FF, #896FBA, #ff00dc7d, #0EC9FF)",
            }}
          />
          &nbsp;&nbsp;{customer}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 3,
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <CheckCircleRoundedIcon
            sx={{
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #FA00FF, #896FBA, #ff00dc7d, #0EC9FF)",
            }}
          />
          &nbsp;&nbsp;{funds}
        </Typography>

        <Button
          className="btn"
          onClick={() => handleClickOpen(price)}
          disableRipple
          sx={{
            py: 1,
            px: 2,
            mt: 7,
            width: "100%",
            position: "relative",
            bottom: "0",
          }}
        >
          Choose {type}
        </Button>
      </Paper>
    </React.Fragment>
  );
}

export default MembershipCard;
