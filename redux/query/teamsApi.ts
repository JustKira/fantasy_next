import { Team } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamsApi = createApi({
  reducerPath: "teamsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["TEAMS"],
  endpoints: (builder) => ({
    getTeams: builder.query<{ data: Array<Team> }, void>({
      query: () => ({
        url: "api/teams",
        method: "GET",
      }),
      providesTags: ["TEAMS"],
    }),
    createUpdateTeam: builder.mutation<Array<Team>, Array<Team>>({
      query: (teams) => ({
        url: "api/teams",
        method: "POST",
        body: teams,
      }),
      invalidatesTags: ["TEAMS"],
    }),
  }),
});

export const { useGetTeamsQuery, useCreateUpdateTeamMutation } = teamsApi;
