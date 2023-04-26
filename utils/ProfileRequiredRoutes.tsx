"use client";
import { useGetProfileQuery } from "@/redux/query/profileApi";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ProfileRequiredRoutes = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  const {
    data: profile,
    isError,
    isFetching,
    isLoading,
  } = useGetProfileQuery();

  if (isLoading) {
    return <>Loading</>;
  }

  if (status === "unauthenticated") {
    return (
      <Link
        href={"api/auth/signin"}
        className="flex items-center justify-center h-screen font-black text-6xl"
      >
        SIGN IN
      </Link>
    );
  }
  if (profile?.data) {
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
