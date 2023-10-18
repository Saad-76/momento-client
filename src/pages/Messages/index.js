import React from "react";
import { Grid } from "@mui/material";

import Inbox from "./inbox";
import Sidebar from "../../shared/sidebar";

const Messages = () => {
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
          <Inbox />
        </Grid>
      </Grid>
    </>
  );
};
export default Messages;
