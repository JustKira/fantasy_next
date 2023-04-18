"use client";
import Button from "@/components/css/button";
import { removePlayer } from "@/redux/slice/teamFormSlice";
import { RootState } from "@/redux/store";
import { numberToText } from "@/utils/MoneyConverter";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TeamPreview = () => {
  const team = useSelector((state: RootState) => state.teamForm);
  const disptach = useDispatch();
  return (
    <div className="flex flex-col bg-white">
      <h1 className="font-bold text-3xl uppercase gap-2">
        team <span className="font-light">{team.team_name}</span>
      </h1>
      <div className="flex flex-col gap-4">
        {team.players.map((value, id) => {
          return (
            <div
              key={id}
              className="flex justify-between items-center gap-4 font-bold drop-shadow-md p-4 border border-gray-200"
            >
              <h1 className="w-40 overflow-hidden">{value.name}</h1>
              <h1 className="w-12">{value.nationality}</h1>
              <h1 className="w-12">{value.otp}</h1>
              <h1 className="w-12">{numberToText(value.price)}</h1>
              <h1 className="bg-gray-900 text-white h-full flex justify-center items-center w-24">
                {value.lane}
              </h1>
              <div className="w-28">
                <Button
                  onClick={() => {
                    disptach(removePlayer(value));
                  }}
                >
                  remove
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPreview;
