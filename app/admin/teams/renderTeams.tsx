"use client";
import { useGetTeamsQuery } from "@/redux/query/teamsApi";
import Link from "next/link";
import React from "react";

const RenderTeams = () => {
  const { data: teamsData, isLoading } = useGetTeamsQuery();

  if (isLoading) {
    return <>loading</>;
  }
  return (
    <>
      {teamsData?.data?.teams?.map((value, key) => {
        return (
          <div
            key={key}
            className="hover:drop-shadow-sm text-lg bg-white border border-transparent hover:border-gray-200 py-2 px-8"
          >
            <Link href={`/admin/team?id=${value.team_name}`}>
              {value.team_name}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default RenderTeams;
