"use client";
import { useGetProfileQuery } from "@/redux/query/profileApi";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: profileData } = useGetProfileQuery();
  const { status } = useSession();
  return (
    <nav className="fixed flex justify-between items-start top-0 w-full bg-transparent drop-shadow-md p-4 text-black z-50">
      <div>
        <Link
          className=" flex flex-col justify-start font-bold uppercase text-[0.75rem]"
          href={"/"}
        >
          <h1> FANTASY</h1>
          <h1 className="font-light"> ARABIAN LEAGUE</h1>
        </Link>
      </div>

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
        {status === "authenticated" ? (
          <Link href={"api/auth/signout"} className="">
            SIGN OUT
          </Link>
        ) : (
          <Link href={"api/auth/signin"} className="">
            SIGN IN
          </Link>
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
