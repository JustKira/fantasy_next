"use client";
import React, { useEffect } from "react";
import {
  useCreateUpdateTeamMutation,
  useGetTeamsQuery,
} from "@/redux/query/teamsApi";
import { useSearchParams } from "next/navigation";
import { filterTeamsByName } from "@/utils/HelperFunctions";
import PlayerEditor from "./playerEditor";
import { useDispatch, useSelector } from "react-redux";
import { loadTeam } from "@/redux/slice/teamEditFormSlice";
import { RootState } from "@/redux/store";
import { useGetProfileQuery } from "@/redux/query/profileApi";
import Button from "@/components/css/button";
import Link from "next/link";

const EditTeamPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const { data: teamsData, isLoading } = useGetTeamsQuery();
  const [updateTeam, { isSuccess, isLoading: isUpdating }] =
    useCreateUpdateTeamMutation();
  const dispatch = useDispatch();
  const teamCloned = useSelector((state: RootState) => state.teamEditForm);
  useEffect(() => {
    if (!isLoading && teamsData && id) {
      const selectedTeam = filterTeamsByName(teamsData?.data.teams, id);
      if (selectedTeam !== null) {
        dispatch(loadTeam(selectedTeam));
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <>loading</>;
  }

  const UpdateTeam = () => {
    const newTeam = teamsData?.data.teams.map((value) => {
      if (
        value.team_name.toLowerCase() === teamCloned.team_name.toLowerCase()
      ) {
        return teamCloned;
      }
      return value;
    });
    if (newTeam) updateTeam({ teams: newTeam });
  };

  const RenderTeam = () => {
    return (
      <div>
        {teamCloned.players.map((value, id) => {
          return <PlayerEditor key={id} player={value} />;
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center  justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full justify-between">
          <h1 className="text-3xl font-bold uppercase">
            Team
            <span className="font-light mx-2">{teamCloned.team_name}</span>
          </h1>
          <Link className="text-lg" href={`/admin/team?id=${id}`}>
            {" "}
            {"< Back"}
          </Link>
        </div>
        <RenderTeam />
        <Button
          onClick={() => {
            UpdateTeam();
          }}
        >
          {isUpdating ? "Updating..." : "confirm"}
        </Button>{" "}
      </div>
      <h1 className="font-bold text-xl text-black m-4">
        {isSuccess ? "Updated" : ""}
      </h1>
    </div>
  );
};

export default EditTeamPage;
