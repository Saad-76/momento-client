import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

import Auth from "../Assets/SideBg.jpg";
import "./style.css";

const AuthContainer = ({ title, children }) => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        height: "98vh",
        width: "100%",
        padding: "20px 60px",
      }}
    >
      <Grid
        item
        xs={7}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Box
          sx={{
            background: "hsla(0, 0%, 100%, 0.55)",
            backdropFilter: " blur(30px)",
            boxShadow:
              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            height: "40vh",
            width: "100%",
            marginRight: "-50px",
            padding: "30px 20px",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontSize: "28px", fontWeight: "400" }}
          >
            {title}
          </Typography>

          <Box>{children}</Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Auth} alt="alt" className="auth-image" />
      </Grid>
    </Grid>
  );
};
export default AuthContainer;
