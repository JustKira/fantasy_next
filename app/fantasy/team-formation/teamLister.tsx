"use client";

import { setCaptain } from "@/redux/slice/teamFormationSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TeamLister = () => {
  const teamData = useSelector((state: RootState) => state.teamFormation);
  const dispatch = useDispatch();
  return (
    <>
      {teamData.players.slice(0, 5).map((values, id) => {
        return (
          <div
            onClick={() => {
              dispatch(setCaptain(values));
            }}
            className="flex-1 bg-endless-white drop-shadow-lg"
            key={id}
          >
            {values.name}
            <div>
              {teamData.players[7].name === values.name ? "Captain" : ""}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamLister;
