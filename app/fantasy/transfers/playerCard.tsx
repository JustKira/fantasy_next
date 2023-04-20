"use client";
import { LaneOrder, setPlayersBalance, setSelectedCard } from "@/redux/slice/userTeamFormSlice";
import React, { useEffect } from "react";
import PlayerCard from "./playerCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TeamMemberRenderer from "@/utils/TeamMemberRenderer";
import { useGetUserTeamQuery } from "@/redux/query/userTeamApi";

const PlayerSelector = () => {
  const dispatch = useDispatch();
  const { data: teamData, isLoading } = useGetUserTeamQuery();
  const userTeamForm = useSelector((state: RootState) => state.userTeamForm);
  useEffect(() => {
    if (teamData) {
      dispatch(setPlayersBalance(teamData.data.user_team));
    }
  }, [dispatch, teamData]);
  if (isLoading) {
    return <>isloading</>;
  }
  const players=userTeamForm.user_team.user_team.slice(0, 5)
  return (
    <div className="flex flex-col gap-2 w-[50vw] ">
      <h1>{userTeamForm.user_team.ballance}</h1>
      <div className="flex gap-2">
        {players?.map((value, id) => {
          return (
            <div
              className={`h-64  drop-shadow p-4 flex-1 border-gray-200 ${
                userTeamForm.selected_card === id
                  ? "bg-gray-900 text-white hover:bg-gray-700"
                  : "bg-white hover:bg-gray-200"
              }`}
              key={id}
              onClick={() => dispatch(setSelectedCard(id))}
            >
              {/* {userTeamForm.user_team.user_team[id] ? (
                <TeamMemberRenderer
                  teamMember={userTeamForm.user_team.user_team[id]}
                />
              ) : (
                <TeamMemberRenderer
                  teamMember={players[id]}
                />
              )} */}
               <TeamMemberRenderer
                  teamMember={userTeamForm.user_team.user_team[id]}
                />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-full gap-2">
        <div
          className={`h-64 w-1/2 drop-shadow p-4 hover:bg-gray-400  border-gray-200 ${
            userTeamForm.selected_card === 5
              ? "bg-gray-900 text-white"
              : "bg-endless-white"
          }`}
          onClick={() => dispatch(setSelectedCard(5))}
        >
          {userTeamForm.user_team.user_team[5] ? (
            <TeamMemberRenderer
              teamMember={userTeamForm.user_team.user_team[5]}
            />
          ) : (
            <>(
              <TeamMemberRenderer
                teamMember={userTeamForm.user_team.user_team[5] as any}
              />
            )</>
          )}
        </div>
        <div
          className={`h-64 w-1/2 drop-shadow p-4  border-gray-200 ${
            userTeamForm.selected_card === 6
              ? "bg-gray-900 text-white"
              : "bg-endless-white"
          }`}
          onClick={() => dispatch(setSelectedCard(6))}
        >
          {userTeamForm.user_team.user_team[6] ? (
            <TeamMemberRenderer
              teamMember={userTeamForm.user_team.user_team[6]}
            />
          ) : (
            <>
              <TeamMemberRenderer
                teamMember={userTeamForm.user_team.user_team[6] as any}
              />
            </>
          )}
        </div>
      </div>
      <div>{userTeamForm.error || ""}</div>
    </div>
  );
};

export default PlayerSelector;
