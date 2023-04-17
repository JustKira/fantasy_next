import { configureStore } from "@reduxjs/toolkit";
import { profileApi } from "./query/profileApi";
import { teamsApi } from "./query/teamsApi";
import teamFormReducer from "./slice/teamFormSlice";
export const store = configureStore({
  reducer: {
    teamForm: teamFormReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [teamsApi.reducerPath]: teamsApi.reducer,
    // [adminApi.reducerPath]: adminApi.reducer,
    // admin: adminSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([profileApi.middleware, teamsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
