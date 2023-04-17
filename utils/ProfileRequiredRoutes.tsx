"use client";
import { useGetProfileQuery } from "@/redux/query/profileApi";
import Link from "next/link";
import React from "react";

const ProfileRequiredRoutes = ({ children }: { children: React.ReactNode }) => {
  const {
    data: profile,
    isError,
    isFetching,
    isLoading,
  } = useGetProfileQuery();

  if (isLoading) {
    return <>Loading</>;
  }

  if (profile) {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center justify-center h-screen text-3xl font-bold ">
      Create Profile{" "}
      <Link href={"/profile/create"} className="font-light text-cyan-300">
        CLICK
      </Link>
    </div>
  );
};

export default ProfileRequiredRoutes;
