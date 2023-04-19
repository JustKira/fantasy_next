import { UserTeam, TeamMembers, Player } from "@/types";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

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
    ballance: 100000000,
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
      let prevCost = 0;
      if (state.user_team.user_team[state.selected_card]) {
        prevCost = state.user_team.user_team[state.selected_card].price;
      }
      if (
        state.user_team?.ballance &&
        state.user_team?.ballance < action.payload.price - prevCost
      ) {
        state.error = `You don't have enough balance to buy ${action.payload.name}`;
        return;
      }
      const teamCount = state.user_team.user_team.filter(
        (p) => p && p.team_name === action.payload.team_name
      ).length;
      if (teamCount >= 2) {
        state.error = `You can't have more than 2 players from the same team`;
        return;
      }
      // if (state.selected_card < 5) {
      //   if (LaneOrder[state.selected_card] === action.payload.lane) {
      //     const updatedUserTeam = [...state.user_team.user_team];
      //     let prevCost = 0;
      //     if (updatedUserTeam[state.selected_card]) {
      //       prevCost = updatedUserTeam[state.selected_card].price;
      //     }
      //     updatedUserTeam[state.selected_card] = action.payload;

      //     // Update the balance
      //     const updatedBalance =
      //       state.user_team.ballance - (action.payload.price - prevCost);

      //     return {
      //       ...state,
      //       user_team: {
      //         ...state.user_team,
      //         user_team: updatedUserTeam,
      //         ballance: updatedBalance,
      //       },
      //       error: "",
      //     };
      //   }
      // } else {
      //   const updatedUserTeam = [...state.user_team.user_team];
      //   let prevCost = 0;
      //   if (updatedUserTeam[state.selected_card]) {
      //     prevCost = updatedUserTeam[state.selected_card].price;
      //   }
      //   updatedUserTeam[state.selected_card] = action.payload;

      //   // Update the balance
      //   const updatedBalance =
      //     state.user_team.ballance - (action.payload.price - prevCost);

      //   return {
      //     ...state,
      //     user_team: {
      //       ...state.user_team,
      //       user_team: updatedUserTeam,
      //       ballance: updatedBalance,
      //     },
      //     error: "",
      //   };
      // }
      if (state.selected_card < 5) {
        if (LaneOrder[state.selected_card] === action.payload.lane) {
          let prevCost = 0;
          if (state.user_team.user_team[state.selected_card]) {
            prevCost = state.user_team.user_team[state.selected_card].price;
          }
          // state.user_team.user_team[state.selected_card] = action.payload;
          state.user_team.user_team[state.selected_card].lane =
            action.payload.lane;
          state.user_team.user_team[state.selected_card].name =
            action.payload.name;
          state.user_team.user_team[state.selected_card].nationality =
            action.payload.nationality;
          state.user_team.user_team[state.selected_card].price =
            action.payload.price;
          state.user_team.user_team[state.selected_card].team_name =
            action.payload.team_name;
          state.user_team.user_team[state.selected_card].otp =
            action.payload.otp;
          if (state.selected_card === 0) {
            state.user_team.user_team[7] = action.payload;
          }
          state.user_team.ballance -= action.payload.price - prevCost;
          state.error = "";
        }
      } else {
        let prevCost = 0;
        if (state.user_team.user_team[state.selected_card]) {
          prevCost = state.user_team.user_team[state.selected_card].price;
        }
        state.user_team.user_team[state.selected_card] = action.payload;

        state.user_team.ballance -= action.payload.price - prevCost;
        state.error = "";
      }
      let playerCost: number = action.payload.price || 0;
      // if (state.user_team.user_team[state.selected_card]?.name) {
      //   playerCost += state.user_team.user_team[state.selected_card]?.price || 0;
      // }
      state.user_team.user_team[state.selected_card] = action.payload;
    },
    setSelectedCard: (state, action: PayloadAction<number>) => {
      state.selected_card = action.payload;
    },
    setUserTeamName: (state, action: PayloadAction<string>) => {
      state.user_team.user_team_name = action.payload;
    },
    setPlayersBalance: (state, action: PayloadAction<UserTeam>) => {
      state.user_team = action.payload;
    },
  },
});
export const {
  setSelectedCard,
  setPlayer,
  setUserTeamName,
  setPlayersBalance,
} = userTeamFormSlice.actions;
export default userTeamFormSlice.reducer;