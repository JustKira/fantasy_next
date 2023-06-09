import { Team } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../../types";
const initialState: Team = {
  team_name: "",
  team_image: "",
  players: [],
};
const teamFormSlice = createSlice({
  name: "teamForm",
  initialState,
  reducers: {
    setTeamName: (state, action: PayloadAction<string>) => {
      state.team_name = action.payload;
    },
    addPlayer: (state, action: PayloadAction<Player>) => {
      const existingPlayerIndex = state.players.findIndex(
        (player) =>
          player.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (existingPlayerIndex === -1) {
        state.players.push(action.payload);
      }
    },
    addImage: (state, action: PayloadAction<string>) => {
      state.team_image = action.payload;
    },
    removePlayer: (state, action: PayloadAction<Player>) => {
      const index = state.players.findIndex(
        (player) => player.name === action.payload.name
      );
      if (index !== -1) {
        state.players.splice(index, 1);
      }
    },

    resetTeamForm: (state) => {
      state.team_name = "";
      state.players = [];
    },
  },
});
export const { setTeamName, addPlayer, resetTeamForm, removePlayer } =
  teamFormSlice.actions;
export default teamFormSlice.reducer;
