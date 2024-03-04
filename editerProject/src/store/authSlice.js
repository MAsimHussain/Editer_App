import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";

const initialState = { status: false, userData: null };

const autheSlive = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false;
      action.userData = null;
    },
  },
});

export const { login, logout } = autheSlive.actions;

export default autheSlive.reducer;
