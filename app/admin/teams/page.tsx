import React from "react";
import RenderTeams from "./renderTeams";
import Button from "@/components/css/button";
import Link from "next/link";

const pages = () => {
  return (
    <div className="flex flex-col gap-4 h-screen justify-center items-center">
      <div className="flex flex-col gap-12 p-12 border border-gray-200 bg-white">
        <h1 className="text-3xl uppercase font-bold">Teams</h1>
        <div className="flex flex-col gap-4 text-3xl uppercase font-light">
          <RenderTeams />
        </div>{" "}
        <Button>
          <Link href={"/admin/teams/create"}>add team</Link>
        </Button>
      </div>
    </div>
  );
};

export default pages;
