import Input from "@/components/css/Input";
import { Player } from "@/types";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { laneOptions } from "../../teams/create/addPlayerForm";
import { textToNumber } from "@/utils/MoneyConverter";
import Select from "@/components/css/selector";

export default function PlayerEditor({ player }: { player: Player }) {
  const { register, watch, control } = useForm<Player>();

  useEffect;

  return (
    <form className="flex flex-col gap-4">
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
      <Input placeholder="otp" type="text" {...register("otp")} />
      <Input
        placeholder="price"
        type="text"
        {...register("price", {
          required: true,
          setValueAs: (v: string) => textToNumber(v.toUpperCase()),
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
    </form>
  );
}
