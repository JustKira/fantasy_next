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
            className="flex-1 bg-endless-white drop-shadow-lg"
            key={id}
          >
            {values.name}
          </div>
        );
      })}
    </div>
  );
};

export default OnDeck;
