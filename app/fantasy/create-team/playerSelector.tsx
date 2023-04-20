"use client";
import { LaneOrder, setSelectedCard } from "@/redux/slice/userTeamFormSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TeamMemberRenderer from "@/utils/TeamMemberRenderer";
import { numberToText } from "@/utils/MoneyConverter";

const PlayerSelector = () => {
  const dispatch = useDispatch();
  const userTeamForm = useSelector((state: RootState) => state.userTeamForm);
  return (
    <div className="flex flex-col gap-2 w-[50vw] ">
      <h1 className="font-bold text-lg">
        BALLANCE{" "}
        <span className="font-normal">
          {numberToText(userTeamForm.user_team.ballance)}
        </span>
      </h1>
      <div className="flex gap-2">
        {LaneOrder.map((value, id) => {
          return (
            <div
              className={`h-64  drop-shadow p-4 flex-1 border border-gray-200 transition-all duration-500 ${
                userTeamForm.selected_card === id
                  ? "bg-w1 bg-center bg-cover text-black hover:border-gray-900 "
                  : "bg-endless-white bg-center bg-cover hover:border-gray-900"
              }`}
              key={id}
              onClick={() => dispatch(setSelectedCard(id))}
            >
              {userTeamForm.user_team.user_team[id] ? (
                <>
                  <img className="w-12" src={`/icons/${LaneOrder[id]}.png`} />
                  <TeamMemberRenderer
                    teamMember={userTeamForm.user_team.user_team[id]}
                  />
                </>
              ) : (
                <img className="w-12" src={`/icons/${LaneOrder[id]}.png`} />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-full gap-2">
        <div
          className={`h-64 w-1/2 drop-shadow p-4 border border-gray-200 transition-all duration-300 ease-out  ${
            userTeamForm.selected_card === 5
              ? "bg-w1 bg-center bg-cover text-black hover:border-gray-900 "
              : "bg-endless-white bg-center bg-cover hover:border-gray-900"
          }`}
          onClick={() => dispatch(setSelectedCard(5))}
        >
          {userTeamForm.user_team.user_team[5] ? (
            <>
              <img
                className="w-12"
                src={`/icons/${userTeamForm.user_team.user_team[5].lane}.png`}
              />

              <TeamMemberRenderer
                teamMember={userTeamForm.user_team.user_team[5]}
              />
            </>
          ) : (
            <div className="flex">
              {LaneOrder.map((value, id) => {
                return <img className="w-4" src={`/icons/${value}.png`} />;
              })}
            </div>
          )}
        </div>
        <div
          className={`h-64 w-1/2 drop-shadow p-4 border border-gray-200 transition-all duration-300 ease-out ${
            userTeamForm.selected_card === 6
              ? "bg-w1 bg-center bg-cover text-black hover:border-gray-900 "
              : "bg-endless-white bg-center bg-cover hover:border-gray-900"
          }`}
          onClick={() => dispatch(setSelectedCard(6))}
        >
          {userTeamForm.user_team.user_team[6] ? (
            <>
              <img
                className="w-12"
                src={`/icons/${userTeamForm.user_team.user_team[6].lane}.png`}
              />

              <TeamMemberRenderer
                teamMember={userTeamForm.user_team.user_team[6]}
              />
            </>
          ) : (
            <div className="flex">
              {LaneOrder.map((value, id) => {
                return <img className="w-4" src={`/icons/${value}.png`} />;
              })}
            </div>
          )}
        </div>
      </div>
      <div>{userTeamForm.error || ""}</div>
    </div>
  );
};

export default PlayerSelector;
