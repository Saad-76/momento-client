import React from "react";
import { Routes, Route } from "react-router-dom";

import Reels from "../pages/Reels";
import Explore from "../pages/Explore";
import Profile from "../pages/Profile";
import Login from "../pages/Auth/login";
import Messages from "../pages/Messages";
import PublicRoutes from "./publicRoutes";
import Forget from "../pages/Auth/forget";
import Signup from "../pages/Auth/signup";
import Dashboard from "../pages/Dashboard";
import PrivateRoutes from "./privateRoutes";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes Component={Login} />} />
      <Route path="/signup" element={<PublicRoutes Component={Signup} />} />
      <Route path="/forget" element={<PublicRoutes Component={Forget} />} />
      <Route path="/Home" element={<PrivateRoutes Component={Dashboard} />} />
      <Route path="/Explore" element={<PrivateRoutes Component={Explore} />} />
      <Route path="/Reels" element={<PrivateRoutes Component={Reels} />} />
      <Route
        path="/Messages"
        element={<PrivateRoutes Component={Messages} />}
      />
      <Route path="/Profile" element={<PrivateRoutes Component={Profile} />} />
    </Routes>
  );
};
export default Routing;
