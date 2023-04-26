import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player, Team } from "@/types";

interface TeamState {
  teams: Array<Team>;
}

const initialState: TeamState = {
  teams: [],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<Team>) => {
      state.teams.push(action.payload);
    },
    addPlayer: (
      state,
      action: PayloadAction<{ teamName: string; player: Player }>
    ) => {
      const { teamName, player } = action.payload;
      const teamIndex = state.teams.findIndex(
        (team) => team.team_name === teamName
      );
      if (teamIndex !== -1) {
        state.teams[teamIndex].players.push(player);
      }
    },
    updatePlayerStats: (
      state,
      action: PayloadAction<{
        teamName: string;
        playerName: string;
        stats: any;
      }>
    ) => {
      const { teamName, playerName, stats } = action.payload;
      const teamIndex = state.teams.findIndex(
        (team) => team.team_name === teamName
      );
      if (teamIndex !== -1) {
        const playerIndex = state.teams[teamIndex].players.findIndex(
          (player) => player.name === playerName
        );
        if (playerIndex !== -1) {
          state.teams[teamIndex].players[playerIndex].stats = stats;
        }
      }
    },
  },
});

export const { addTeam, addPlayer, updatePlayerStats } = teamSlice.actions;

export default teamSlice.reducer;
