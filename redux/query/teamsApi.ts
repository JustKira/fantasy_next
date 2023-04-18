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
    createUpdateTeam: builder.mutation<Team, Array<Team>>({
      query: (team) => ({
        url: "api/teams",
        method: "POST",
        body: team,
      }),
      invalidatesTags: ["TEAMS"],
    }),
  }),
});

export const { useGetTeamsQuery, useCreateUpdateTeamMutation } = teamsApi;
