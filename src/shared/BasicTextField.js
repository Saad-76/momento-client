import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextField({ label, type, id, value, onChange }) {
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      variant="standard"
      type={type}
      sx={{
        width: "100%",
      }}
    />
  );
}
