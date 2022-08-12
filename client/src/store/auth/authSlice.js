// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getStoredAuthToken, getStoredUser } from "../../utils/currentUser";

// export const singin = createAsyncThunk(
//   "auth/singin",
//   async (email, password) => {
//     const response = await fetch("http://localhost:5000/api/Auth/login", {
//       // Adding method type
//       method: "POST",

//       // Adding body or contents to send
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),

//       // Adding headers to the request
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const data = await response.json();
//     return data;
//   }
// );

// let token = getStoredAuthToken();
// const initialState = token
//   ? { token: token, user: getStoredUser() }
//   : { token: null, user: {} };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {
//     login: (state, { payload }) => {
//       state.token = payload.token;
//       state.user = payload.token;
//     },
//     logout: (state, action) => {
//       state.token = null;
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(singin.fulfilled, (state, action) => {});
//   },
// });

// export const { login, logout } = authSlice.actions;
// export const currentUserSelector = (state) => state.user;
// export default authSlice.reducer;
