"use client";
import Input from "@/components/css/Input";
import Button from "@/components/css/button";
import Select from "@/components/css/selector";
import { addPlayer } from "@/redux/slice/teamFormSlice";
import { Player, lanes } from "@/types";
import { numberToText, textToNumber } from "@/utils/MoneyConverter";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";

const laneOptions: { value: lanes; label: string }[] = [
  { value: "TOP", label: "Top" },
  { value: "JG", label: "Jungle" },
  { value: "BOT", label: "Bottom" },
  { value: "SUP", label: "Support" },
  { value: "MID", label: "Middle" },
];

const AddPlayerForm = () => {
  const { register, handleSubmit, control } = useForm<Player>();

  const dispatch = useDispatch();
  const onSubmit = handleSubmit((data) => {
    dispatch(addPlayer(data));
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="player name"
        type="text"
        {...register("name", { required: true })}
      />
      <Input
        placeholder="nationality"
        type="text"
        {...register("nationality", { required: true })}
      />
      <Input
        placeholder="otp"
        type="text"
        {...register("otp", { required: true })}
      />
      <Input
        placeholder="price"
        type="text"
        {...register("price", {
          required: true,
          setValueAs: (v) => textToNumber(v),
        })}
      />
      <Controller
        name="lane"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select {...field}>
            <option value="">Select a lane</option>
            {laneOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        )}
      />
      <Button type="submit">Add Player</Button>
    </form>
  );
};

export default AddPlayerForm;
