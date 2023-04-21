"use client";
import React, { useEffect } from "react";
import Tfmap from "./tfmap";
import {
  useCreateUpdateUserTeamMutation,
  useGetUserTeamQuery,
} from "@/redux/query/userTeamApi";
import TeamLister from "./teamLister";
import { useDispatch, useSelector } from "react-redux";
import { loadTeamFormation } from "@/redux/slice/teamFormationSlice";
import OnDeck from "./onDeck";
import { RootState } from "../../../redux/store";
import Button from "@/components/css/button";
import { UserTeam } from "@/types";
import { arraysEqual } from "@/utils/HelperFunctions";

const TeamFormation = () => {
  const { data: userTeamData, isLoading } = useGetUserTeamQuery();
  const [updateTeam, { isSuccess, isLoading: isSending }] =
    useCreateUpdateUserTeamMutation();
  const dispatch = useDispatch();
  const teamFormation = useSelector((state: RootState) => state.teamFormation);
  useEffect(() => {
    if (!isLoading && userTeamData?.data?.user_team) {
      dispatch(loadTeamFormation(userTeamData.data.user_team.user_team));
    }
  }, [isLoading]);

  if (isLoading) {
    return <>Loading</>;
  }
  console.log(userTeamData?.data?.user_team?.user_team);
  if (!userTeamData?.data?.user_team?.user_team) {
    return <>Create Team</>;
  }

  function updateUserTeam() {
    if (userTeamData?.data?.user_team) {
      const newTeam: UserTeam = {
        ballance: userTeamData?.data?.user_team.ballance,
        cards: userTeamData?.data?.user_team.cards,
        user_team: teamFormation.players,
        user_team_name: userTeamData?.data?.user_team.user_team_name,
        overcharge: userTeamData?.data?.user_team.overcharge,
        player_points: userTeamData?.data?.user_team.player_points,
        total_points: userTeamData?.data?.user_team.total_points,
        transfers: userTeamData?.data?.user_team.transfers,
        week: userTeamData?.data?.user_team.week,
        week_points: userTeamData?.data?.user_team.week_points,
      };
      if (
        !arraysEqual(
          userTeamData?.data?.user_team.user_team,
          teamFormation.players
        )
      ) {
        updateTeam({ user_team: newTeam });
      }
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full p-8">
        <div className="w-1/2">
          <Tfmap />
        </div>
        <div className="flex-grow mx-4 flex flex-col justify-between flex-1 gap-4">
          <TeamLister />
        </div>
      </div>
      <OnDeck />
      <div className="px-8 my-4">
        <Button
          disabled={isSending}
          onClick={() => {
            updateUserTeam();
          }}
        >
          {isSending ? "LOADING" : "APPLY"}
        </Button>
      </div>
    </div>
  );
};

export default TeamFormation;
