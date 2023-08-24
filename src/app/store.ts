import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./mealSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: { meals: mealReducer,user:userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
