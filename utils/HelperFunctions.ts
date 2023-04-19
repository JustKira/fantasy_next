import { Team, TeamMembers } from "@/types";

export function filterTeamsByName(
  teamsArray: Team[],
  inputTeamName: string
): Team | null {
  const matchingTeams = teamsArray.filter(
    (team) => team.team_name === inputTeamName
  );
  return matchingTeams.length ? matchingTeams[0] : null;
}

export function playerLister(teams: Team[]): TeamMembers[] {
  const players: TeamMembers[] = [];
  teams.forEach((team) => {
    team.players.map((player) => {
      players.push({ ...player, team_name: team.team_name });
    });
  });

  return players;
}
