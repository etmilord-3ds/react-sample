import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth";
import {curryGetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";


export const store = configureStore({
    reducer: { authReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch;