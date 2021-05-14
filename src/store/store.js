import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, messageReducer, userReducer } from "./index";

const store = configureStore({
  reducer: {
    loginReducer,
    messageReducer,
    userReducer,
  },
});

export default store;
