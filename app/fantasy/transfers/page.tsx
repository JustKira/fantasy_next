"use client";
import React, { useEffect } from "react";
import PlayerList from "../create-team/playerList";
import PlayerCard from "./playerCard";
import Button from "@/components/css/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import {
  useCreateUpdateUserTeamMutation,
  useGetUserTeamQuery,
} from "@/redux/query/userTeamApi";

const Page = () => {
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
  function createUserTeam() {
    if (userTeam.user_team_name != "") createTeam({ user_team: userTeam });
  }
  return (
    <>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <PlayerCard />
          <Button disabled={isLoading} onClick={() => createUserTeam()}>
            {isSending ? "LOADING" : "SUBMIT"}
          </Button>
        </div>
        <PlayerList />
      </div>
    </>
  );
};

export default Page;
