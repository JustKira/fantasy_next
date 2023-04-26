"use client";
import { useGetProfileQuery } from "@/redux/query/profileApi";
import React from "react";

const AdminRoutes = ({ children }: { children: React.ReactNode }) => {
  const {
    data: profile,
    isError,
    isFetching,
    isLoading,
  } = useGetProfileQuery();

  if (isLoading) {
    return <>Loading</>;
  }
  console.log(profile);
  if (profile?.data?.role === "ADMIN") {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center justify-center h-screen text-3xl font-bold ">
      UNAUTHOIRZED
    </div>
  );
};

export default AdminRoutes;
