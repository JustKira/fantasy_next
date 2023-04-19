import React from "react";
import Link from "next/link";

const FantasyNavbar = () => {
  return (
    <nav className="p-8 uppercase">
      <ul className="flex justify-start gap-2 w-full">
        <li>
          <Link href="/fantasy/create-team">Create Team</Link>
        </li>
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
