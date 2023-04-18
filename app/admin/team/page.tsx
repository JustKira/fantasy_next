"use client";
import { useGetTeamsQuery } from "@/redux/query/teamsApi";
import { Team } from "@/types";
import { numberToText } from "@/utils/MoneyConverter";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const TeamPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  const { data: teamsData, isLoading } = useGetTeamsQuery();

  function filterTeamsByName(
    teamsArray: Team[],
    inputTeamName: string
  ): Team | null {
    const matchingTeams = teamsArray.filter(
      (team) => team.team_name === inputTeamName
    );
    return matchingTeams.length ? matchingTeams[0] : null;
  }

  const RenderTeam = () => {
    if (teamsData?.data.teams && id) {
      const selectedTeam = filterTeamsByName(teamsData?.data.teams, id);

      if (selectedTeam === null) {
        return <>NO TEAM FOUND</>;
      }
      return (
        <div className="flex flex-col">
          <h1>{selectedTeam?.team_name}</h1>
          <div>
            {selectedTeam?.players.map((value, id) => {
              return (
                <div
                  key={id}
                  className="flex gap-4 font-bold drop-shadow-md bg-gray-50 p-4"
                >
                  <h1>{value.name}</h1>
                  <h1>{value.nationality}</h1>
                  <h1>{value.otp}</h1>
                  <h1>{numberToText(value.price)}</h1>
                  <h1>{value.lane}</h1>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return <></>;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <RenderTeam />
      <Link href="/admin/teams">Back</Link>
    </div>
  );
};

export default TeamPage;
