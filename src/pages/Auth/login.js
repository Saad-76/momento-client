import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { LoginRequest } from "./authSlice";
import BasicButton from "../../shared/BasicButton";
import { saveToPersistance } from "../../utils/utils";
import AuthContainer from "../../shared/AuthContainer";
import BasicTextField from "../../shared/BasicTextField";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setUser({ ...user, email: e.target.value });
    } else if (e.target.id === "password") {
      setUser({ ...user, password: e.target.value });
    }
  };

  const handleLogin = async () => {
    const payload = {
      email: user.email,
      password: user.password,
    };
    const resp = await dispatch(LoginRequest(payload));
    if (resp.payload.data.code === 200) {
      saveToPersistance("auth_token", resp.payload.data.token);
      navigate("/Home");
    }
  };

  return (
    <AuthContainer title={"Login"}>
      <Grid
        container
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        gap={2}
      >
        <BasicTextField
          label={"Email"}
          type={"text"}
          id="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <BasicTextField
          label={"Password"}
          type={"password"}
          id="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
      </Grid>
      <Box sx={{ marginTop: "6vh" }}>
        <BasicButton text={"Login"} onClick={handleLogin} />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: "center", paddingTop: "12px" }}
      >
        Don't have Account <Link to="/signup">Sign Up</Link>
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: "center", paddingTop: "12px" }}
      >
        <Link to="/forget"> Forget Password</Link>
      </Typography>
    </AuthContainer>
  );
};
export default Login;
