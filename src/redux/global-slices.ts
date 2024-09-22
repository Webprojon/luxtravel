import { createSlice } from "@reduxjs/toolkit";

export interface GlobalType {
	colorUi: string;
}

const initialState = {
	colorUi: "",
} as GlobalType;

export const globalSlices = createSlice({
	name: "global",
	initialState,
	reducers: {
		setColorUi: (state, action) => {
			state.colorUi = action.payload;
		},
	},
});

export const { setColorUi } = globalSlices.actions;
