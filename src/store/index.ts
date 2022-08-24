import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth";
import { userApi } from "./user";


export const store = configureStore({
    reducer: { authReducer, [userApi.reducerPath]: userApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
