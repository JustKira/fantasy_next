import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Profile } from "next-auth";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["PROFILE"],
  endpoints: (builder) => ({
    getProfile: builder.query<{ data: Profile }, void>({
      query: () => ({
        url: "api/profile",
        method: "GET",
      }),
      providesTags: ["PROFILE"],
    }),
  }),
});
