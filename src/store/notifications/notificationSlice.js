import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notifications",
    initialState: {
        open: false,
        message: "",
        variant: "info",
    },
    reducers: {
        showNotification: (state, action) => {
            state.open = true;
            state.message = action.payload.message;
            state.variant = action.payload.variant;
        },
        hideNotification: (state) => {
            state.open = false;
        },
    },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
