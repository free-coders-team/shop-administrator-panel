import { configureStore } from "@reduxjs/toolkit";

import memberReducer from "./member/reducer";

const store = configureStore({
  devTools: true,
  reducer: {
    memberReducer,
  },
});

export default store;
