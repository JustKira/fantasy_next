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
      state.players.push(action.payload);
    },
    addImage: (state, action: PayloadAction<string>) => {
      state.team_image = action.payload;
    },
    resetTeamForm: (state) => {
      state.team_name = "";
      state.players = [];
    },
  },
});
export const { setTeamName, addPlayer, resetTeamForm } = teamFormSlice.actions;
export default teamFormSlice.reducer;
