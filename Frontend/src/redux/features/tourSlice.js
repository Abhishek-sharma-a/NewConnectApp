// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../api";

// export const createTour = createAsyncThunk(
//   "tour/createTour",
//   async ({tourData, navigate, toast }, { rejectWithValue }) => {
//     try {
//       const response = await api.createTour(tourData);
//       toast.success("Tour Added Successfully");
//       navigate("/");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
// const tourSlice = createSlice({
//     name: "tour",
//     initialState: {
//         tour: {},
//         tours:[],
//         userTours:[],
//         error: "",
//         loading: false,
//     },
 
//     extraReducers :{
//          [createTour.pending]:(state,action)=>{
//             state.loading =true
//          },
//          [createTour.fulfilled]:(state,action)=>{
//             state.loading =false;
//             state.tours=action.payload;
           
//          },
//          [createTour.rejected]:(state,action)=>{
//             state.loading =false;
//             state.error=action.payload.message;
//          },
//     }
// })
// export default tourSlice.reducer;