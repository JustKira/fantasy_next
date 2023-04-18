import { Team } from "@/types";

export function filterTeamsByName(
  teamsArray: Team[],
  inputTeamName: string
): Team | null {
  const matchingTeams = teamsArray.filter(
    (team) => team.team_name === inputTeamName
  );
  return matchingTeams.length ? matchingTeams[0] : null;
}
