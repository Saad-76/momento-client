import * as React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function BasicButton({ text, onClick }) {
  return (
    <Box>
      <Button variant="contained" onClick={onClick} sx={{ width: "100%" }}>
        {text}
      </Button>
    </Box>
  );
}
