import { UserTeam, TeamMembers } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: UserTeam = {
  user_team_name: "x",
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
};
const teamFormSlice = createSlice({
  name: "teamForm",
  initialState,
  reducers: {
    setTeamMembers: (state, action: PayloadAction<Array<TeamMembers>>) => {
      state.user_team = action.payload;
    },
  },
});
export const { setTeamMembers } = teamFormSlice.actions;
export default teamFormSlice.reducer;
