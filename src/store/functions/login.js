import { createAction, createReducer } from "@reduxjs/toolkit";

export const LogIn = createAction("LogIn");

export const LogOut = createAction("LogOut");

const initialState = {
  loggedIn: false,
  username: "",
};

export const loginReducer = createReducer(initialState, {
  LogIn: (state, action) => {
    state.loggedIn = true;
    state.username = action.payload;
  },
  LogOut: (state, action) => {
    state.loggedIn = false;
    state.username = "";
  },
});
