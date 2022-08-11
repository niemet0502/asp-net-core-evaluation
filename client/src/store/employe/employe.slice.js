import { createSlice } from "@reduxjs/toolkit";
import { getStoredAuthToken, getStoredUser } from "../../utils/currentUser";

let token = getStoredAuthToken();
const initialState = token
  ? { token: token, user: getStoredUser() }
  : { token: null, user: {} };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.token;
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const currentUserSelector = (state) => state.user;
export default authSlice.reducer;
