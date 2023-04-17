export interface Profile {
  name: string;
  nationality: string;
  mobile_number: number;
  favorite_team: string;
  role: Roles;
}

export type Roles = "ADMIN" | "USER";

export interface Teams {
  teams: Array<string>;
}
