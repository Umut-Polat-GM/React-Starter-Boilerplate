import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        type: "",
        updateSchema: {},
    },
    reducers: {
        showModal: (state, action) => {
            state.type = action.payload.type;
            state.updateSchema = action.payload.updateSchema;
        },
        hideModal: (state) => {
            state.type = "";
            state.updateSchema = {};
        },
    },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
