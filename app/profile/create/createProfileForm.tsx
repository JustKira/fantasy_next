"use client";
import React from "react";
import Input from "@/components/css/Input";
import { useCreateProfileMutation } from "@/redux/query/profileApi";
import { Profile } from "@/types";
import { useForm } from "react-hook-form";
import Button from "@/components/css/button";

const CreateProfileForm = () => {
  const { register, handleSubmit } = useForm<Profile>();
  const [createProfile, {}] = useCreateProfileMutation();

  const onSubmit = handleSubmit((data) => {
    data.favorite_team = "none";
    createProfile(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        type="text"
        {...register("name", { required: true })}
      />
      <Input
        placeholder="Nationality"
        type="text"
        {...register("nationality", { required: true })}
      />
      <Input
        placeholder="Number"
        type="number"
        {...register("mobile_number", { required: true })}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreateProfileForm;
