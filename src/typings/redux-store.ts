import store from "@/store";

export type AppReduxDispatch = typeof store.dispatch;
export type AppReduxState = ReturnType<typeof store.getState>;
