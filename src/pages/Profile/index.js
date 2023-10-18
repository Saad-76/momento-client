import React from "react";
import { Grid } from "@mui/material";

import UserInfo from "./userInfo";
import Sidebar from "../../shared/sidebar";

const Profile = () => {
  return (
    <Grid container display={"flex"} flexDirection={"row"}>
      <Grid item xs={2} sx={{ borderRight: "2px solid #50444414" }}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={10}
        sx={{
          borderRight: "2px solid #50444414",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <UserInfo />
      </Grid>
    </Grid>
  );
};
export default Profile;
