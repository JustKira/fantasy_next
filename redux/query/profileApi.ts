import { Profile } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    createProfile: builder.mutation<Profile, Profile>({
      query: (profile) => ({
        url: "api/profile",
        method: "POST",
        body: profile,
      }),
      invalidatesTags: ["PROFILE"],
    }),
  }),
});
export const { useGetProfileQuery, useCreateProfileMutation } = profileApi;
