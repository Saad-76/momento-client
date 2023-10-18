import React, { useState } from "react";
import { Grid } from "@mui/material";

import Slider from "./Slider";
import ContentCard from "./contentCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetPosts } from "./dashboardSlice";

const Content = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState([]);

  useEffect(() => {
    handlePosts();
  }, []);

  const handlePosts = async () => {
    const response = await dispatch(GetPosts());
    if (response.payload.data.code === 200) {
      setContent(JSON.parse(response.payload.data.posts));
    }
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px 0px 0px 10px",
        minHeight: "100vh",
      }}
    >
      <Slider />
      {content &&
        content?.map((item) => {
          return (
            <ContentCard
              sx={{ width: "100%" }}
              title={item.title}
              img={item.img}
            />
          );
        })}
    </Grid>
  );
};
export default Content;
