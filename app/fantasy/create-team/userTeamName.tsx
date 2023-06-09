"use client";
import Input from "@/components/css/Input";
import { setUserTeamName } from "@/redux/slice/userTeamFormSlice";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const UserTeamName = () => {
  const { register, handleSubmit, watch } = useForm<{
    team_name: string;
  }>();

  const dispatch = useDispatch();

  const onSubmit = handleSubmit((data) => {});
  useEffect(() => {
    const subscription = watch((data) => {
      if (data?.team_name) dispatch(setUserTeamName(data.team_name));
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <>
      <h1 className="font-black uppercase text-3xl flex justify-between items-baseline">
        TEAM{" "}
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

export default UserTeamName;
