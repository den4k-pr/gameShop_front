import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_ENDPOINT = "http://localhost:4200";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const response = await axios.get(`${API_ENDPOINT}/api/games/`);
  return response.data;
});

export const fetchGameById = createAsyncThunk("api/fetchGameById", async (gameId) => {
  const response = await axios.get(`${API_ENDPOINT}/api/games/${gameId}`);
  return response.data;
});

const apiSlice = createSlice({
  name: "api",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchGameById.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default apiSlice.reducer;