"use client";
import React from "react";

import PlayerSelector from "./playerSelector";
import PlayerList from "./playerList";
import UserTeamName from "./userTeamName";
import { useCreateUpdateUserTeamMutation } from "@/redux/query/userTeamApi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Button from "@/components/css/button";
const CreateTeam = () => {
  const userTeam = useSelector(
    (state: RootState) => state.userTeamForm.user_team
  );
  const [createTeam, {}] = useCreateUpdateUserTeamMutation();

  return (
    <>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <UserTeamName />
          <PlayerSelector />
          <Button onClick={() => createTeam({ user_team: userTeam })}>
            SUBMIT
          </Button>
        </div>
        <PlayerList />
      </div>
    </>
  );
};

export default CreateTeam;
