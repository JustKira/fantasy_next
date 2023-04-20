"use client";

import { swapPlayer } from "@/redux/slice/teamFormationSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const OnDeck = () => {
  const teamData = useSelector((state: RootState) => state.teamFormation);
  const dispatch = useDispatch();
  return (
    <div className="px-8 flex gap-4 h-32">
      {teamData.players.slice(5, 7).map((values, id) => {
        return (
          <div
            onClick={() => dispatch(swapPlayer(values))}
            className="flex-1  flex justify-between items-center bg-endless-white hover:bg-w1 drop-shadow-lg transition-all duration-500 bg-center bg-cover text-black hover:text-white py-4 px-4 hover:p-16"
            key={id}
          >
            <div className="flex items-center gap-2">
              <img className="w-12" src={`/icons/${values.lane}.png`} />
              <h1 className="flex gap-2 font-bold">
                {values.team_name}
                <span>{values.name}</span>
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OnDeck;
