import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getTrending=createAsyncThunk("movie/gettrending",async()=>{
let {data} =await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=09f6e5ab5804756966b952b5230a7aa1`)
return data.results
})


let initialState={trendingMovies:[]}
 let moviesslice=createSlice({

name:"movies",
initialState:initialState,

extraReducers:(builder)=>{
builder.addCase(getTrending.fulfilled,(state,action)=>{
state.trendingMovies=action.payload;

})
// builder.addCase(getTrending.pending)
// builder.addCase(getTrending.rejected)

}
 })

export  let movieReducer=moviesslice.reducer;