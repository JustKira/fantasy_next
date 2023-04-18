"use client";
import Button from "@/components/css/button";
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
          <h1 className="text-3xl font-bold uppercase">
            TEAM <span className="font-normal">{selectedTeam?.team_name}</span>
          </h1>
          <div>
            {selectedTeam?.players.map((value, id) => {
              return (
                <div
                  key={id}
                  className="flex gap-4 font-bold drop-shadow-md my-4"
                >
                  <h1 className="w-40 overflow-hidden">{value.name}</h1>
                  <h1 className="w-12">{value.nationality}</h1>
                  <h1 className="w-12">{value.otp}</h1>
                  <h1 className="w-12">{numberToText(value.price)}</h1>
                  <h1 className="bg-gray-900 text-white h-full flex justify-center items-center w-24">
                    {value.lane}
                  </h1>
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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-75% bg-white p-8 border border-gray-200">
        <RenderTeam />
        <div className="flex">
          <Button>
            <Link href="/admin/teams">Back</Link>
          </Button>
          <Button>
            <Link href="/admin/team/edit">EDIT</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
