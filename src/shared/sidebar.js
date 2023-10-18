import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import { Box, Grid, Typography } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { removeFromPersistance } from "../utils/utils";

const Sidebar = () => {
  const navigate = useNavigate();

  const sideItems = [
    {
      icon: <HomeIcon sx={{ fontSize: "24px" }} />,
      name: "Home",
    },
    {
      icon: <SearchIcon sx={{ fontSize: "24px" }} />,
      name: "Search",
    },
    {
      icon: <ExploreIcon sx={{ fontSize: "24px" }} />,
      name: "Explore",
    },
    {
      icon: <OndemandVideoIcon sx={{ fontSize: "24px" }} />,
      name: "Reels",
    },
    {
      icon: <MailOutlineIcon sx={{ fontSize: "24px" }} />,
      name: "Messages",
    },
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: "24px" }} />,
      name: "Notifications",
    },
    {
      icon: <AddIcon sx={{ fontSize: "24px" }} />,
      name: "Create",
    },
    {
      icon: <Person2Icon sx={{ fontSize: "24px" }} />,
      name: "Profile",
    },
  ];

  const handleTabChange = (name) => {
    navigate(`/${name}`);
  };

  const handleLogout = () => {
    removeFromPersistance("auth_token");
    navigate(`/`);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        margin: "20px 0px 0px 10px",
        position: "fixed",
      }}
    >
      <Grid item xs={1}>
        <Typography
          variant="h6"
          sx={{ padding: "20px 8px", fontStyle: "italic" }}
        >
          Momento
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <Box>
          {sideItems?.map((item) => {
            return (
              <Typography
                sx={{
                  margin: "10px 0px",
                  padding: "8px 10px",
                  "&:hover": {
                    // background: "#50444414",
                    borderRadius: "8px",
                    cursor: "pointer",
                  },
                }}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                {item.icon}
                <Box
                  sx={{ paddingLeft: "6px", paddingTop: "2px" }}
                  onClick={() => handleTabChange(item.name)}
                >
                  {item.name}
                </Box>
              </Typography>
            );
          })}
        </Box>
      </Grid>

      <Grid item xs={3}>
        <Box>
          <Typography
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            sx={{
              margin: "10px 0px",
              padding: "8px 10px",
              "&:hover": {
                background: "#50444414",
                borderRadius: "8px",
                cursor: "pointer",
              },
            }}
          >
            <DensityMediumIcon sx={{ fontSize: "20px" }} />
            <Box sx={{ paddingLeft: "6px", paddingTop: "2px" }}>More </Box>
          </Typography>
        </Box>

        <Typography
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          sx={{
            margin: "10px 0px",
            padding: "8px 10px",
            "&:hover": {
              // background: "#50444414",
              borderRadius: "8px",
              cursor: "pointer",
            },
          }}
        >
          <ExitToAppIcon sx={{ fontSize: "20px" }} />
          <Box
            sx={{ paddingLeft: "6px", paddingTop: "2px" }}
            onClick={handleLogout}
          >
            Logout{" "}
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Sidebar;
