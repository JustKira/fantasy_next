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
            className="flex-1 bg-endless-white hover:bg-w1 bg-center bg-cover drop-shadow-lg py-2 px-4 hover:p-12 flex justify-between items-center transition-all duration-500 text-black hover:text-[#f9ce3f] ease-out hover:text-2xl"
            key={id}
          >
            <div className="flex items-center gap-2">
              <img className="w-12" src={`/icons/${values.lane}.png`} />
              <h1 className="font-bold drop-shadow-md flex gap-2">
                {values.team_name}
                <span className="">{values.name}</span>
              </h1>
            </div>

            <div className="">
              {teamData.players[7].name === values.name ? (
                <h1 className="font-bold uppercase text-3xl text-[#f9ce3f] drop-shadow-md transition-color duration-200">
                  Captain
                </h1>
              ) : (
                <h1 className="font-bold uppercase text-3xl text-gray-500">
                  Captain
                </h1>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamLister;
