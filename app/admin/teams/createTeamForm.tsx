"use client";
import React from "react";
import Input from "@/components/css/Input";
import { useCreateProfileMutation } from "@/redux/query/profileApi";
import { Profile, Teams } from "@/types";
import { useForm } from "react-hook-form";
import Button from "@/components/css/button";
import {
  useCreateUpdateTeamMutation,
  useGetTeamsQuery,
} from "@/redux/query/teamsApi";

const CreateTeamForm = () => {
  const { register, handleSubmit } = useForm<{ teamName: string }>();

  const { data: teamsData, isLoading } = useGetTeamsQuery();
  const [createTeam, {}] = useCreateUpdateTeamMutation();

  if (isLoading) {
    return <>Loading</>;
  }
  console.log(teamsData);
  const onSubmit = handleSubmit((data) => {
    if (teamsData?.data.teams) {
      const clonedTeam = [...teamsData?.data.teams];
      clonedTeam.push(data.teamName.valueOf());
      createTeam({ teams: clonedTeam });
    } else {
      const newTeamArray: Teams = { teams: [] };
      newTeamArray.teams.push(data.teamName.valueOf());
      createTeam({ teams: newTeamArray.teams });
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        type="text"
        {...register("teamName", { required: true })}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreateTeamForm;
