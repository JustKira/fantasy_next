import { TeamMembers } from "@/types";
import React from "react";
import { numberToText } from "./MoneyConverter";

const TeamMemberRenderer = ({ teamMember }: { teamMember: TeamMembers }) => {
  return (
    <div className="flex flex-col">
      <h1>{teamMember?.name}</h1>
      <h1>{numberToText(teamMember?.price)}</h1>
    </div>
  );
};

export default TeamMemberRenderer;
