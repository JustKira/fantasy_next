import React from "react";
import RenderTeams from "./renderTeams";

const pages = () => {
  return (
    <div className="flex h-screen justify-between items-center px-12">
      <RenderTeams />
    </div>
  );
};

export default pages;
