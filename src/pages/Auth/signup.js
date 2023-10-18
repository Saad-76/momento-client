import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { SignUpRequest } from "./authSlice";
import BasicButton from "../../shared/BasicButton";
import AuthContainer from "../../shared/AuthContainer";
import BasicTextField from "../../shared/BasicTextField";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setUser({ ...user, name: e.target.value });
    } else if (e.target.id === "email") {
      setUser({ ...user, email: e.target.value });
    } else if (e.target.id === "phone") {
      setUser({ ...user, phone: e.target.value });
    } else if (e.target.id === "password") {
      setUser({ ...user, password: e.target.value });
    }
  };

  const handleSignup = async () => {
    const payload = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
    };
    const response = await dispatch(SignUpRequest(payload));

    if (response.payload.data.status === 200) {
      navigate("/");
    }
  };

  return (
    <AuthContainer title={"Sign up now"}>
      <Grid
        container
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        gap={2}
      >
        <Grid item xs={5.8}>
          <BasicTextField
            label={"Name"}
            type={"text"}
            id="name"
            value={user.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <BasicTextField
            label={"Phone"}
            type={"text"}
            id="phone"
            value={user.phone}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </Grid>
        <BasicTextField
          label={"Email"}
          type={"text"}
          id="email"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <BasicTextField
          label={"Password"}
          type={"password"}
          id="password"
          value={user.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Grid>
      <Box sx={{ marginTop: "6vh" }}>
        <BasicButton text={"Sign Up"} onClick={handleSignup} />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: "center", paddingTop: "12px" }}
      >
        or <Link to="/">Login</Link>
      </Typography>
    </AuthContainer>
  );
};
export default Signup;
