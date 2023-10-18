import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { Grid, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function ProfileAvatar() {
  return (
    <Stack
      direction="row"
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      spacing={2}
    >
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Typography variant="subtitle2">subtitle2</Typography>
    </Stack>
  );
}
