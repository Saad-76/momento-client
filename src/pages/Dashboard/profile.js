import { Typography } from "@mui/material";
import React from "react";
import ProfileSection from "./Profile/index";

const Profile = () => {
  return (
    <Typography variant="h6" sx={{ color: "black", fontSize: "14px" }}>
      <ProfileSection />
    </Typography>
  );
};
export default Profile;
