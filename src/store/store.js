import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import notificationsReducer from "./notifications/notificationSlice";

const rootReducer = combineReducers({
  user: userReducer,
  notifications: notificationsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});