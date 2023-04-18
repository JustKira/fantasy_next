"use client";
import { RootState } from "@/redux/store";
import { numberToText } from "@/utils/MoneyConverter";
import React from "react";
import { useSelector } from "react-redux";

const TeamPreview = () => {
  const team = useSelector((state: RootState) => state.teamForm);
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-3xl uppercase gap-2">
        team
        <span className="font-light">{team.team_name}</span>
      </h1>
      <div className="flex flex-col gap-4">
        {team.players.map((value, id) => {
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
};

export default TeamPreview;
