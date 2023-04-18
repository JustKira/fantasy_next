"use client";
import { useGetProfileQuery } from "@/redux/query/profileApi";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === "loading") {
    return <>Loading</>;
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center justify-center h-screen text-3xl font-bold ">
      UNAUTHOIRZED{" "}
      <Link href={"/profile/create"} className="font-light text-cyan-300">
        Sign In
      </Link>
    </div>
  );
};

export default ProtectedRoutes;
