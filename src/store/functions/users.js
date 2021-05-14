import { createAction, createReducer } from "@reduxjs/toolkit";

export const Joined = createAction("Joined");

export const Left = createAction("Left");

const initialState = {
  joined: [],
  left: [],
};

export const userReducer = createReducer(initialState, {
  Joined: (state, action) => {
    state.joined.push(action.payload);
  },
  Left: (state, action) => {
    state.left.push(action.payload);
  },
});
