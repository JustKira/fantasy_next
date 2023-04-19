"use client";
import { useGetTeamsQuery } from "@/redux/query/teamsApi";
import { LaneOrder, setPlayer } from "@/redux/slice/userTeamFormSlice";
import { RootState } from "@/redux/store";
import { TeamMembers, lanes } from "@/types";
import { playerLister } from "@/utils/HelperFunctions";
import { numberToText } from "@/utils/MoneyConverter";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PlayerList = () => {
  const { data: teamData, isLoading } = useGetTeamsQuery();
  const dispatch = useDispatch();
  const selectedIndex = useSelector(
    (state: RootState) => state.userTeamForm.selected_card
  );
  if (isLoading) {
    return <>isloading</>;
  }

  const PlayerLister = () => {
    if (teamData?.data.teams) {
      const players = playerLister(teamData?.data.teams);
      let filtered: TeamMembers[] = players;
      if (selectedIndex < 5) {
        filtered = players.filter((v) => {
          return v.lane === LaneOrder[selectedIndex];
        });
      }
      filtered = filtered.sort((a, b) => b.price - a.price);
      return (
        <div className="flex flex-col">
          <div className="relative table-wrp block">
            <table className="">
              <thead className="bg-gray-900 text-white border-b sticky top-0">
                <tr className="">
                  <th className="px-4 py-2 w-40">Name</th>
                  <th className="px-4 py-2 w-24">Price</th>
                  <th className="px-4 py-2 w-16">Nationality</th>
                  <th className="px-4 py-2 w-24">Team</th>
                  <th className="px-4 py-2 w-12">Lane</th>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll">
                {filtered.map((value, id) => (
                  <tr
                    key={id}
                    onClick={() => {
                      dispatch(setPlayer(value));
                    }}
                    className="hover:bg-gray-900 hover:text-white h-14"
                  >
                    <td className="border px-4 ">{value.name}</td>
                    <td className="border px-4 ">
                      {numberToText(value.price)}
                    </td>
                    <td className="border px-4 ">{value.nationality}</td>
                    <td className="border px-4 ">{value.team_name}</td>
                    <td className="border px-4 ">{value.lane}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    return <>Error</>;
  };
  return (
    <div className="bg-white drop-shadow-xl">
      <PlayerLister />
    </div>
  );
};

export default PlayerList;
