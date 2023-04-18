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
    <div>
      {teamsData?.data?.teams?.map((value, key) => {
        return (
          <div key={key}>
            <Link href={`/admin/team?id=${value.team_name}`}>
              {value.team_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RenderTeams;
