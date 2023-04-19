"use client";
import React from "react";
import Link from "next/link";
import { useGetUserTeamQuery } from "@/redux/query/userTeamApi";

const FantasyNavbar = () => {
  const { data: userTeamData, isLoading } = useGetUserTeamQuery();
  if (isLoading) {
    return <>loading</>;
  }

  return (
    <nav className="p-8 uppercase">
      <ul className="flex justify-start gap-2 w-full">
        {userTeamData?.data?.user_team ? (
          <></>
        ) : (
          <li>
            <Link href="/fantasy/create-team">Create Team</Link>
          </li>
        )}

        <li>
          <Link href="/fantasy/team-formation">Team Formation</Link>
        </li>
        <li>
          <Link href="/fantasy/transfers">Transfers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FantasyNavbar;
