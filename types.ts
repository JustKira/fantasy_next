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
  team_image: string;
  players: Array<Player>;
}

export interface Player {
  name: string;
  nationality: string;
  price: number;
  lane: lanes;
  otp?: string;
  profile_image?: string;
}

export type lanes = "TOP" | "JG" | "BOT" | "SUP" | "MID";
