import { createReducer } from "@reduxjs/toolkit";

import { MemberStore } from "./types";
import { defaultAction } from "./actions";

const initialState: MemberStore = {
  isLoggedIn: false,
};

const memberReducer = createReducer(initialState, (builder) => {
  builder.addCase(defaultAction, () => {
    console.log("dispatch action");
  });
});

export default memberReducer;
