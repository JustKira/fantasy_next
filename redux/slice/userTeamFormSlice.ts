import { UserTeam, TeamMembers, Player } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserTeamSlice {
  error: string;
  selected_card: number;
  user_team: UserTeam;
}

const initialState: UserTeamSlice = {
  error: "",
  selected_card: 0,
  user_team: {
    user_team_name: "",
    user_team: [],
    cards: {
      triple_captin: 1,
      triple_captin_status: false,
      allin: 1,
      allin_status: false,
      team_fan: 1,
      team_fan_status: false,
      wild_card: 1,
      wild_card_status: false,
    },
  },
};

export const LaneOrder = ["TOP", "JG", "MID", "BOT", "SUP"];

const userTeamFormSlice = createSlice({
  name: "userTeamForm",
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<TeamMembers>) => {
      if (
        state.user_team.user_team.some(
          (p) => p && p.name === action.payload.name
        )
      ) {
        state.error = `Player ${action.payload.name} already exists in the team`;
        return;
      }

      const teamCount = state.user_team.user_team.filter(
        (p) => p && p.team_name === action.payload.team_name
      ).length;
      if (teamCount >= 2) {
        state.error = `You can't have more than 2 players from the same team`;
        return;
      }
      if (state.selected_card < 5) {
        if (LaneOrder[state.selected_card] === action.payload.lane) {
          state.user_team.user_team[state.selected_card] = action.payload;
          state.error = "";
          return;
        }
      } else {
        state.user_team.user_team[state.selected_card] = action.payload;
        state.error = "";
      }
    },
    setSelectedCard: (state, action: PayloadAction<number>) => {
      state.selected_card = action.payload;
    },
    setUserTeamName: (state, action: PayloadAction<string>) => {
      state.user_team.user_team_name = action.payload;
    },
  },
});
export const { setSelectedCard, setPlayer, setUserTeamName } =
  userTeamFormSlice.actions;
export default userTeamFormSlice.reducer;
