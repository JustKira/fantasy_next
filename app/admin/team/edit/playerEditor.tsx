import { Player } from "@/types";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { laneOptions } from "../../teams/create/addPlayerForm";
import { numberToText, textToNumber } from "@/utils/MoneyConverter";
import Select from "@/components/css/selector";
import { editPlayer } from "@/redux/slice/teamEditFormSlice";
import { useDispatch } from "react-redux";

export default function PlayerEditor({ player }: { player: Player }) {
  const dispatch = useDispatch();

  const { register, handleSubmit, control } = useForm<Omit<Player, "stats">>({
    defaultValues: {
      lane: player.lane,
      name: player.name,
      nationality: player.nationality,
      price: player.price,
    },
  });

  const onSubmit = handleSubmit((data) => {
    data.price = Number(data.price);
    dispatch(editPlayer(data));
  });
  return (
    <form onSubmit={onSubmit} className="flex gap-4 my-4">
      <input
        className=" outline-none p-2 border border-gray-200 bg-white drop-shadow-lg"
        placeholder="player name"
        type="text"
        {...register("name")}
      />
      <input
        className=" outline-none p-2 border border-gray-200 bg-white drop-shadow-lg"
        placeholder="nationality"
        type="text"
        {...register("nationality")}
      />
      <input
        className=" outline-none p-2 border border-gray-200 bg-white drop-shadow-lg"
        placeholder="otp"
        type="text"
        {...register("otp")}
      />
      <input
        className=" outline-none p-2 border border-gray-200 bg-white drop-shadow-lg"
        placeholder="price"
        type="number"
        {...register("price", {
          required: true,
        })}
      />
      <Controller
        name="lane"
        control={control}
        render={({ field }) => (
          <select
            className="bg-gray-900 text-white p-1 rounded-none"
            {...field}
          >
            <option value="">Select a lane</option>
            {laneOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      <button className="font-bold uppercase bg-gray-900 text-white px-4">
        update
      </button>
    </form>
  );
}
