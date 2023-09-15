
import { createSlice } from "@reduxjs/toolkit";
// import { Config } from "../../util/config";

// import { useGetTopTenQuery, useSearchMoviesQuery } from "../services/movie-service"; // Import the necessary hooks from movieServiceApi


const initialState = {
  movies: [],
  loading: false,
  error: null,
};


const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  
  },
});

export default movieSlice.reducer;

// Export the action creators
// export { getTopTenMovies, searchMovies };
