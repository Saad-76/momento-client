import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import BasicButton from "../../shared/BasicButton";
import AuthContainer from "../../shared/AuthContainer";
import BasicTextField from "../../shared/BasicTextField";

const Forget = () => {
  return (
    <AuthContainer title={"Forget Password"}>
      <Grid
        container
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        gap={2}
      >
        <BasicTextField label={"Email"} type={"text"} id="email" />
      </Grid>
      <Box sx={{ marginTop: "6vh" }}>
        <BasicButton text={"Forget"} />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: "center", paddingTop: "12px" }}
      >
        Have Account <Link to="/">Login</Link>
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: "center", paddingTop: "12px" }}
      >
        Create New <Link to="/signup">Sign Up</Link>
      </Typography>
    </AuthContainer>
  );
};
export default Forget;
