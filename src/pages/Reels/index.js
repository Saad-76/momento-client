import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../../shared/sidebar";
import ReelsMore from "./reelsMore";

const Reels = () => {
  return (
    <>
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
          <ReelsMore />
        </Grid>
      </Grid>
    </>
  );
};
export default Reels;
