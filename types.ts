export interface Profile {
  name: string;
  nationality: string;
  mobile_number: number;
  favorite_team: string;
  role: Roles;
}

export type Roles = "ADMIN" | "USER";

export interface Team {
  team_name: string;
  team_image?: string;
  players: Array<Player>;
}

export interface Player {
  name: string;
  nationality: string;
  price: number;
  otp?: string;
  lane: lanes;
  profile_image?: string;
  stats?: Array<Stats>;
}
export interface UserTeam {
  user_team_name: string;
  user_team: Array<TeamMembers>;
  ballance: number;
  transfers: number;
  overcharge?: number;
  cards: Cards;
  total_points?: number;
  week_points?: number;
  week?: number;
  player_points?: Array<PlayerPoints>;
}
type Stats = {
  kill: number;
  death: number;
  assist: number;
  cs: number;
  ward: number;
  points: number;
};
export interface TeamMembers {
  name: string;
  nationality: string;
  price: number;
  otp?: string;
  lane: lanes;
  team_name: string;
  profile_image?: string;
}
type Cards = {
  triple_captin: number;
  triple_captin_status: boolean;
  allin: number;
  allin_status: boolean;
  team_fan: number;
  team_fan_status: boolean;
  wild_card: number;
  wild_card_status: boolean;
};
type PlayerPoints = {
  week: number;
  player_name: string;
  kill: number;
  death: number;
  assist: number;
  cs: number;
  ward: number;
  points: number;
};

export type lanes = "TOP" | "JG" | "MID" | "BOT" | "SUP";
