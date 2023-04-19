import { Team } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserTeam } from "./../../types";

export const userTeamApi = createApi({
  reducerPath: "userTeamApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["USERTEAM"],
  endpoints: (builder) => ({
    getUserTeam: builder.query<{ data: { user_team: UserTeam } }, void>({
      query: () => ({
        url: "api/userTeam",
        method: "GET",
      }),
      providesTags: ["USERTEAM"],
    }),
    createUpdateUserTeam: builder.mutation<
      { user_team: UserTeam },
      { user_team: UserTeam }
    >({
      query: (user_team) => ({
        url: "api/userTeam",
        method: "POST",
        body: user_team,
      }),
      invalidatesTags: ["USERTEAM"],
    }),
  }),
});

export const { useGetUserTeamQuery, useCreateUpdateUserTeamMutation } =
  userTeamApi;
