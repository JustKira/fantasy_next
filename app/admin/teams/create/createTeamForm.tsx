"use client";
import React, { useEffect } from "react";
import Input from "@/components/css/Input";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { setTeamName } from "@/redux/slice/teamFormSlice";
import Link from "next/link";

const CreateTeamForm = () => {
  const { register, handleSubmit, watch } = useForm<{
    team_name: string;
  }>();

  const dispatch = useDispatch();

  const onSubmit = handleSubmit((data) => {});
  useEffect(() => {
    const subscription = watch((data) => {
      if (data?.team_name) dispatch(setTeamName(data.team_name));
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <>
      <h1 className="font-black uppercase text-3xl flex justify-between items-baseline">
        TEAM{" "}
        <Link className="text-lg font-light" href={"/admin/teams"}>
          {"< Back"}
        </Link>
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 ">
        <Input
          placeholder="team name"
          type="text"
          {...register("team_name", { required: true })}
        />
      </form>
    </>
  );
};

export default CreateTeamForm;
