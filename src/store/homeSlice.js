import { createSlice } from "@reduxjs/toolkit";

// --homeSlice export- because homeSlice name pass into store.js file
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url:'url',
    genres: "genres",
  },
  reducers: {
    // --all are the actions 
    getApiConfiguration: (state, action) => {
      
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducers function
export const  {getApiConfiguration,getGenres} = homeSlice.actions

export default homeSlice.reducer;
