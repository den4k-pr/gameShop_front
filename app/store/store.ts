import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./reducers/usToogle";
import apiReducer from "./reducers/getGames"

export const store = configureStore({
  reducer: {
    button: buttonReducer,
    api: apiReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;