"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();

  return <main className="flex justify-center items-center h-screen"></main>;
};

export default page;
