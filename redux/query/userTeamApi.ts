import { Team } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserTeam } from "./../../types";

export const userTeamApi = createApi({
  reducerPath: "userTeamApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["USERTEAM"],
  endpoints: (builder) => ({
    // getUserTeam: builder.query<{ data: { teams: Array<Team> } }, void>({
    //   query: () => ({
    //     url: "api/teams",
    //     method: "GET",
    //   }),
    //   providesTags: ["USERTEAM"],
    // }),
    createUpdateUserTeam: builder.mutation<
      { UserTeam: UserTeam },
      { UserTeam: UserTeam }
    >({
      query: (UserTeam) => ({
        url: "api/userTeam",
        method: "POST",
        body: UserTeam,
      }),
      invalidatesTags: ["USERTEAM"],
    }),
  }),
});

export const { useCreateUpdateUserTeamMutation } = userTeamApi;
