"use client";
import React from "react";
import CreateTeamForm from "./createTeamForm";
import AddPlayerForm from "./addPlayerForm";
import TeamPreview from "./teamPreview";
import {
  useCreateUpdateTeamMutation,
  useGetTeamsQuery,
} from "@/redux/query/teamsApi";
import Button from "@/components/css/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import RenderTeams from "../renderTeams";

const Page = () => {
  const teamForm = useSelector((state: RootState) => state.teamForm);
  const [createUpdateTeam, {}] = useCreateUpdateTeamMutation();
  const { data: teamsData, isLoading } = useGetTeamsQuery();
  const submitTeam = () => {
    if (teamsData?.data.teams) {
      const _team = [...teamsData?.data.teams];
      _team.push(teamForm);
      createUpdateTeam({ teams: _team });
    } else {
      createUpdateTeam({ teams: new Array(teamForm) });
    }
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="flex h-screen justify-center items-center px-12">
      <div className="flex justify-between w-[75vw]">
        <div className="flex flex-col gap-4">
          <CreateTeamForm />
          <AddPlayerForm />
          <Button
            onClick={() => {
              submitTeam();
            }}
          >
            Submit
          </Button>
        </div>
        <TeamPreview />
      </div>
    </div>
  );
};

export default Page;
