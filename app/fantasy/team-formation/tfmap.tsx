"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Tfmap = () => {
  const teamData = useSelector((state: RootState) => state.teamFormation);
  return (
    <div className="relative border-2 border-gray-900 font-bold">
      <img src="/lolmap.jpg" />
      <div className="flex justify-between items-center absolute top-[12%] left-[14%] z-50 bg-white h-[16%] w-[8%] text-[1vw] border border-gray-900">
        <div className="rotate-90">{teamData.players[0]?.name}</div>
      </div>
      <div className="flex justify-between items-center absolute top-[35%] left-[28%] z-50 bg-white h-[16%] w-[8%] text-[1vw] border border-gray-900">
        <div className="rotate-90"> {teamData.players[1]?.name}</div>
      </div>
      <div className="flex justify-between items-center absolute top-[45%] left-[45%] z-50 bg-white h-[16%] w-[8%] text-[1vw] border border-gray-900">
        <div className="rotate-90"> {teamData.players[2]?.name}</div>
      </div>
      <div className="flex justify-between items-center absolute bottom-[12%] right-[14%] z-50 bg-white h-[16%] w-[8%] text-[1vw] border border-gray-900">
        <div className="rotate-90"> {teamData.players[3]?.name}</div>
      </div>
      <div className="flex justify-between items-center absolute bottom-[12%] right-[25%] z-50 bg-white h-[16%] w-[8%] text-[1vw] border border-gray-900">
        <div className="rotate-90"> {teamData.players[4]?.name}</div>
      </div>
    </div>
  );
};

export default Tfmap;
