import { TeamMembers } from "@/types";
import React from "react";
import { numberToText } from "./MoneyConverter";

const TeamMemberRenderer = ({ teamMember }: { teamMember: TeamMembers }) => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="font-bold text-2xl">{teamMember?.name}</h1>
      <h1 className="text-lg">{numberToText(teamMember?.price)}</h1>
      <h1 className="font-bold text-xl">{teamMember.team_name}</h1>
    </div>
  );
};

export default TeamMemberRenderer;
