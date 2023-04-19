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

export function arraysEqual(a: TeamMembers[], b: TeamMembers[]) {
  // If the arrays are different lengths, they can't be the same
  if (a.length !== b.length) {
    return false;
  }

  // Compare each element of the arrays
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  // If all elements are the same, the arrays are equal
  return true;
}
