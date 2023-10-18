import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

import BasicButton from "../../shared/BasicButton";
import "./profile.css";

const ProfileHead = () => {
  return (
    <Grid container sx={{ display: "flex", flexDirection: "row" }}>
      <Grid item xs={2}>
        <img src="" alt="" className="profile-image" />
      </Grid>
      <Grid item xs={10}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="subtitle2">User name</Typography>
          <BasicButton text="Edit profile" />
          <BasicButton text="View Archive" />
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="subtitle2">
            <Box>2</Box> posts
          </Typography>
          <Typography variant="subtitle2">
            <Box>111</Box> followers
          </Typography>
          <Typography variant="subtitle2">
            <Box>3</Box> following
          </Typography>
        </Box>
        <Box>User Name</Box>
        <Box>Bio</Box> */}
      </Grid>
    </Grid>
  );
};
export default ProfileHead;
