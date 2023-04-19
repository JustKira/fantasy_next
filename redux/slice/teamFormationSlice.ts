import { Team, TeamMembers } from "@/types";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Player } from "../../types";
const initialState: { players: Array<TeamMembers> } = {
  players: [],
};

function swapElements(arr: Array<TeamMembers>, index1: number, index2: number) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

const teamFormationSlice = createSlice({
  name: "teamFormation",
  initialState,
  reducers: {
    loadTeamFormation: (state, action: PayloadAction<TeamMembers[]>) => {
      state.players = action.payload;
    },
    swapPlayer: (state, action: PayloadAction<TeamMembers>) => {
      const deployedTeamArray = state.players.slice(0, 5);

      const swapIndex = deployedTeamArray.findIndex((v) => {
        return v.lane === action.payload.lane;
      });

      const supIndex = state.players.findIndex((v) => {
        return v.name === action.payload.name;
      });
      const isCaptain = state.players[swapIndex].name === state.players[7].name;
      state.players = swapElements(state.players, swapIndex, supIndex);

      if (isCaptain) {
        state.players[7] = action.payload;
      }
    },
    setCaptain: (state, action: PayloadAction<TeamMembers>) => {
      state.players[7] = action.payload;
    },
  },
});
export const { swapPlayer, loadTeamFormation, setCaptain } =
  teamFormationSlice.actions;
export default teamFormationSlice.reducer;
