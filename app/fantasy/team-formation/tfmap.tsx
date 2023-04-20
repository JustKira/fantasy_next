"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Tfmap = () => {
  const teamData = useSelector((state: RootState) => state.teamFormation);
  return (
    <div className="relative border-2 border-gray-900 font-bold text-white">
      <img className="brightness-75" src="/lolmap.jpg" />
      <div className="flex flex-col justify-between items-center absolute top-[12%] left-[14%] z-50  h-[16%] w-[8%] text-[1.25vw] ">
        <div
          className={`rotate transition-colors duration-200  ${
            teamData.players[0]?.name === teamData.players[7]?.name
              ? "text-[#f9ce3f]"
              : ""
          }`}
        >
          {teamData.players[0]?.name}
        </div>{" "}
        <img className="w-12" src={`/icons/${teamData.players[0]?.lane}.png`} />
      </div>
      <div className="flex flex-col justify-between items-center absolute top-[35%] left-[28%] z-50  h-[16%] w-[8%] text-[1vw] ">
        <div
          className={` transition-colors duration-200 ${
            teamData.players[1]?.name === teamData.players[7]?.name
              ? "text-[#f9ce3f]"
              : ""
          }`}
        >
          {" "}
          {teamData.players[1]?.name}
        </div>{" "}
        <img className="w-12" src={`/icons/${teamData.players[1]?.lane}.png`} />
      </div>
      <div className="flex flex-col justify-between items-center absolute top-[45%] left-[45%] z-50  h-[16%] w-[8%] text-[1vw] ">
        <div
          className={` transition-colors duration-200 ${
            teamData.players[2]?.name === teamData.players[7]?.name
              ? "text-[#f9ce3f]"
              : ""
          }`}
        >
          {teamData.players[2]?.name}
        </div>

        <img
          className="w-12 m-1"
          src={`/icons/${teamData.players[2]?.lane}.png`}
        />
      </div>
      <div className="flex flex-col justify-between items-center absolute bottom-[12%] right-[14%] z-50  h-[16%] w-[8%] text-[1vw] ">
        <div
          className={` transition-colors duration-200 ${
            teamData.players[4]?.name === teamData.players[7]?.name
              ? "text-[#f9ce3f]"
              : ""
          }`}
        >
          {" "}
          {teamData.players[4]?.name}
        </div>
        <img className="w-12" src={`/icons/${teamData.players[4]?.lane}.png`} />
      </div>
      <div className="flex flex-col justify-between items-center absolute bottom-[12%] right-[25%] z-50  h-[16%] w-[8%] text-[1vw] ">
        <div
          className={` transition-colors duration-200 ${
            teamData.players[3]?.name === teamData.players[7]?.name
              ? "text-[#f9ce3f]"
              : ""
          }`}
        >
          {" "}
          {teamData.players[3]?.name}
        </div>{" "}
        <img className="w-12" src={`/icons/${teamData.players[3]?.lane}.png`} />
      </div>
    </div>
  );
};

export default Tfmap;
