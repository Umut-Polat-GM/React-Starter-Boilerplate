import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import notificationsReducer from "./notifications/notificationSlice";
import modalReducer from "./modal/modalSlice";

const rootReducer = combineReducers({
    user: userReducer,
    notifications: notificationsReducer,
    modal: modalReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
