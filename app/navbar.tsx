"use client";
import { useGetProfileQuery } from "@/redux/query/profileApi";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: profileData } = useGetProfileQuery();

  return (
    <nav className="fixed flex justify-between top-0 w-full bg-endless-white drop-shadow-md p-4 text-black">
      <div>LOGO</div>
      <ul className="flex gap-2 uppercase">
        {profileData?.data?.role === "ADMIN" ? (
          <li>
            <Link className="font-bold" href={"/admin/teams"}>
              admin
            </Link>
          </li>
        ) : (
          <></>
        )}
        <li>
          <Link className="font-bold" href={"/fantasy/create-team"}>
            fantasy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
