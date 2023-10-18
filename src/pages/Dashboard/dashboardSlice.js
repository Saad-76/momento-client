import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import API from "../../Config/ApiConfig/ApiConfig";
import { ApiGetRequest } from "../../Config/ApiConfig/ApiRequest";

const initialValues = {};

export const GetPosts = createAsyncThunk("dashboard", async () => {
  const response = await ApiGetRequest(API.Dashboard.Posts);
  return response;
});

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialValues,
  extraReducers: (builder) => {
    builder.addCase(GetPosts.fulfilled, (state, action) => {});
  },
});

export default DashboardSlice.reducer;
