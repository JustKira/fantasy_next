"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import PlayerSelector from "./playerSelector";
import PlayerList from "./playerList";
import UserTeamName from "./userTeamName";
import {
  useCreateUpdateUserTeamMutation,
  useGetUserTeamQuery,
} from "@/redux/query/userTeamApi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Button from "@/components/css/button";
import { UserTeam } from "../../../types";
import Link from "next/link";
const CreateTeam = () => {
  const router = useRouter();
  const userTeam = useSelector(
    (state: RootState) => state.userTeamForm.user_team
  );

  const { data: userTeamData, isLoading } = useGetUserTeamQuery();
  const [createTeam, { isSuccess, isLoading: isSending }] =
    useCreateUpdateUserTeamMutation();

  useEffect(() => {
    if (isSuccess) {
      router.push("/fantasy");
    }
  }, [isSuccess]);

  if (isLoading) {
    return <>loading</>;
  }

  if (userTeamData?.data?.user_team) {
    return (
      <div className="flex justify-center items-center ">
        <h1>
          <span className="font-bold text-lg uppercase">Team</span>{" "}
          {userTeamData.data.user_team.user_team_name} was created
        </h1>
        {"  "}
        head to{" "}
        <Link className="mx-2 text-blue-500" href="/fantasy/team-formation">
          {""} Team Formation
        </Link>
      </div>
    );
  }

  function createUserTeam() {
    if (userTeam.user_team_name != "") createTeam({ user_team: userTeam });
  }

  return (
    <>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <UserTeamName />
          <PlayerSelector />
          <Button disabled={isLoading} onClick={() => createUserTeam()}>
            {isSending ? "LOADING" : "SUBMIT"}
          </Button>
        </div>
        <PlayerList />
      </div>
    </>
  );
};

export default CreateTeam;
