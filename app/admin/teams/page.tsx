import React from "react";
import CreateTeamForm from "./createTeamForm";
import AddPlayerForm from "./addPlayerForm";
import TeamPreview from "./teamPreview";

const Page = () => {
  return (
    <div className="flex h-screen justify-between items-center px-12">
      <div className="flex flex-col gap-4">
        <CreateTeamForm />
        <AddPlayerForm />
      </div>
      <TeamPreview />
    </div>
  );
};

export default Page;
