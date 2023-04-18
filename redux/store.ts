import { configureStore } from "@reduxjs/toolkit";
import { profileApi } from "./query/profileApi";
import { teamsApi } from "./query/teamsApi";
import teamFormReducer from "./slice/teamFormSlice";
import teamEditFormReducer from "./slice/teamEditFormSlice";
import { userTeamApi } from "./query/userTeamApi";
export const store = configureStore({
  reducer: {
    teamForm: teamFormReducer,
    teamEditForm: teamEditFormReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [teamsApi.reducerPath]: teamsApi.reducer,
    [userTeamApi.reducerPath]: userTeamApi.reducer,
    // [adminApi.reducerPath]: adminApi.reducer,
    // admin: adminSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      profileApi.middleware,
      teamsApi.middleware,
      userTeamApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
