"use client";
import { useState } from "react";
import { useGetTeamsQuery, useCreateUpdateTeamMutation } from "@/redux/query/teamsApi";
import { Team } from "@/types";
import firebase from 'firebase/app';
import 'firebase/functions';
import { getFunctions, httpsCallable } from "firebase/functions";
import Link from "next/link";
const TeamPage = () => {
  const { data: teamData, isLoading } = useGetTeamsQuery();
  const [stats, setStats] = useState<{ [playerName: string]: { kill?: number, death?: number, assist?: number, cs?: number, ward?: number } }>({});
  const [createUpdateTeam, { isLoading: isSubmitting }] = useCreateUpdateTeamMutation();

  function handleStatChange(playerName: string, statName: string, value: number) {
    setStats(prevStats => ({
      ...prevStats,
      [playerName]: {
        ...prevStats[playerName],
        [statName]: value
      }
    }));
  }
  let playersCount=0
  teamData?.data.teams.map((e)=>{
    return  playersCount+=e.players.length})
  let isDisabled=false
 Object.values(stats).map((e)=>{
    if(!(e.assist && e.cs && e.death && e.kill && e.ward &&Object.values(stats).length===playersCount))isDisabled=true
  })
  async function handleSubmit() {
    const updatedTeams: Team[] = [];
    teamData?.data.teams.forEach(team => {
      const updatedPlayers:any = team.players.map(player => {
        const playerStats:any = stats[player.name] || [];
        let newStats:any
        if(player.stats){
        newStats = [...player.stats] || []; // create a copy of the array
        }
        if(playerStats)playerStats.points=2*playerStats.kill-2*playerStats.death+Math.floor(playerStats.ward/40)+Math.floor (playerStats.cs/100)+playerStats.assist
        newStats?.push(playerStats);
        return {
          ...player,
          stats: newStats,
        };
      });
      updatedTeams.push({ ...team, players: updatedPlayers });
    });
    await createUpdateTeam({ teams: updatedTeams });
  }

  if (isLoading) {

    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  return (
    <div>
      {teamData?.data.teams.map((team) => (
        <div key={team.team_name}>
          <h2 className="text-2xl font-bold mb-4">{team.team_name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.players.map((player) => (
              <div key={player?.name} className="border border-gray-300 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">{player?.name}</h3>
                  <p className="text-sm font-semibold">{team.team_name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${player?.name}-kill`} className="mb-2">

                    </label>
                    <input
                      type="number"
                      id={`${player?.name}-kill`}
                      placeholder="Kill"
                      value={stats[player?.name]?.kill || ""}
                      onChange={(e) =>
                        handleStatChange(player?.name, "kill", Number(e.target.value))
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor={`${player?.name}-death`} className="mb-2">

                    </label>
                    <input
                      type="number"
                      id={`${player?.name}-death`}
                      placeholder="Death"
                      value={stats[player?.name]?.death || ""}
                      onChange={(e) =>
                        handleStatChange(player?.name, "death", Number(e.target.value))
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor={`${player?.name}-assist`} className="mb-2 mt-4">

                    </label>
                    <input
                      type="number"
                      id={`${player?.name}-assist`}
                      placeholder="Assist"
                      value={stats[player?.name]?.assist || ""}
                      onChange={(e) =>
                        handleStatChange(player?.name, "assist", Number(e.target.value))
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor={`${player?.name}-cs`} className="mb-2 mt-4">

                    </label>
                    <input
                      type="number"
                      id={`${player?.name}-cs`}
                      placeholder="CS"
                      value={stats[player?.name]?.cs || ""}
                      onChange={(e) =>
                        handleStatChange(player?.name, "cs", Number(e.target.value))
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor={`${player?.name}-ward`} className="mb-2 mt-4">

                    </label>
                    <input
                      type="number"
                      id={`${player?.name}-ward`}
                      placeholder="Ward"
                      value={stats[player?.name]?.ward || ""}
                      onChange={(e) =>
                        handleStatChange(player?.name, "ward", Number(e.target.value))
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
<button
  onClick={handleSubmit}
  className={`py-2 px-4 rounded font-bold text-white ${
    isDisabled
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-blue-500 hover:bg-blue-700'
  }`}
  disabled={isDisabled}
>
  Submit
</button>
  <Link href={"https://us-central1-fantasy-al.cloudfunctions.net/myRequestFunction"}>testttttttttttt</Link>
    </div>
  );

}
export default  TeamPage