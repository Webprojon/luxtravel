import { configureStore } from "@reduxjs/toolkit";
import { globalSlices } from "./global-slices";

export const store = configureStore({
	reducer: {
		globalStates: globalSlices.reducer,
	},
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
