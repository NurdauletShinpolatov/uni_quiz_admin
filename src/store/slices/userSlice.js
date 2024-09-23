import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  data: {},
  token: "",
};

export const { actions: userActions, reducer: userReducers } =
  createSlice({
    name: "userData",
    initialState: initialState,
    reducers: {
      setUser: (state, { payload }) => {
        state = payload;
      },
      setUserData: (state, { payload }) => {
        state.data = payload;
      }
    },
  });
