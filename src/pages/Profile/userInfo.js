import React from "react";
import { Grid } from "@mui/material";

import ProfileHead from "./profileHead";

const UserInfo = () => {
  return (
      <Grid container xs={12} display={"flex"} justifyContent={"center"}>
        <ProfileHead />
      </Grid>
  );
};
export default UserInfo;
