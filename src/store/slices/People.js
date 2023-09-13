import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig/instance";

export let getTrending = createAsyncThunk("movie/gettrending", async () => {
  let myKey = "d4a2b4ff4209071cf753eff2f3d101cd";

  let { data } = await axiosInstance.get(`/3/movie/popular?api_key=${myKey}`);
  return data.results;
});

let initialState = { trendingMovies: [] };
let moviesslice = createSlice({
  name: "movies",
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(getTrending.fulfilled, (state, action) => {
      state.trendingMovies = action.payload;
    });
    // builder.addCase(getTrending.pending)
    // builder.addCase(getTrending.rejected)
  },
});

export let movieReducer = moviesslice.reducer;
