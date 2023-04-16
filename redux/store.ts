import { configureStore } from "@reduxjs/toolkit";
import { profileApi } from "./query/profileApi";
export const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
    // [adminApi.reducerPath]: adminApi.reducer,
    // admin: adminSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
