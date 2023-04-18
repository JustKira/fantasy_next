"use client";
import { useGetTeamsQuery } from '@/redux/query/teamsApi';
import { useCreateUpdateUserTeamMutation } from '@/redux/query/userTeamApi';
import { UserTeam, lanes } from '@/types';
import React, { useState } from 'react';
  const PlayerList = () => {
    const { data: teamsData, isLoading } = useGetTeamsQuery();
    const mappedData = teamsData?.data.teams;
  
    const [selectedRect, setSelectedRect] = useState(null);
    const [rectData, setRectData] = useState([
      { label: 'TOP', name: '', lane: '', price: '',nationality:"" },
      { label: 'JG', name: '', lane: '', price: '',nationality:"" },
      { label: 'MID', name: '', lane: '', price: '',nationality:"" },
      { label: 'BOT', name: '', lane: '', price: '',nationality:"" },
      { label: 'SUB', name: '', lane: '', price: '',nationality:"" },
      { label: 'SUB1', name: '', lane: '', price: '',nationality:"" },
      { label: 'SUB2', name: '', lane: '', price: '',nationality:"" },
    ]);
    const [createUpdateTeam, { isLoading: isSaving }] = useCreateUpdateUserTeamMutation();
    const handleRectClick = (index:any) => {
      setSelectedRect(index);
    };

    const handlePlayerClick = (player:any) => {
      if (selectedRect !== null) {
        // Update the rectangular with the player's data
        const newRectData = [...rectData];
        newRectData[selectedRect] = { ...newRectData[selectedRect], name: player.name, lane: player.lane, price: player.price,nationality:player.nationality};
        setRectData(newRectData);
        setSelectedRect(null);
      }
    };
    const handleSaveTeam = async () => {
      const teamData:any = {
        user_team_name: 'My Team',
        user_team: rectData
    .filter((rect) => rect.name !== '')
    .map((rect) => {
      return {
        name: rect.name,
        lane: rect.lane as lanes,
        price: Number(rect.price),
        nationality: rect.nationality
      };
    }),
      };
  
      try {
        await createUpdateTeam(teamData);
        
        console.log('Team data saved successfully!');
      } catch (error) {
        console.error('An error occurred while saving team data:', error);
      }
    };
    if(isLoading){
      return (<>Is Loading...
      </>)
    }
    return (
      <div className="flex gap-4">
        {/* Rectangular */}
        <div className="flex flex-col gap-4">
          {rectData.map((rect, index) => (
            <div
              key={rect.label}
              className={`w-32 h-32 bg-gray-300 text-gray-500 rounded-lg flex items-center justify-center ${
                selectedRect === index ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleRectClick(index)}
              style={{ cursor: 'pointer' }}
            >
              {rect.name ? (
                <>
                  <div className="font-bold">{rect.name}</div>
                </>
              ) : (
                <div>{rect.label}</div>
              )}
            </div>
          ))}
        </div>
        {/* Player list */}
        <div className="flex-1 flex flex-col gap-4 mt-11" style={{ justifyContent: 'flex-end' }}>
          {mappedData && mappedData.flatMap((team) => (
            team.players.map((player) => (
              <div
                key={player.name}
                className="bg-white shadow rounded-lg p-4 flex items-center gap-2"
                onClick={() => handlePlayerClick(player)}
                style={{ cursor: 'pointer' }}
              >
                <div className="font-bold">{player.name}</div>
                <div className="text-gray-500">{player.lane}</div>
                <div className="font-bold">${player.price}</div>
                <div className="text-gray-500">{team.team_name}</div>
              </div>
            ))
          ))}
        </div>
        <button type="button" onClick={handleSaveTeam} disabled={isSaving} className="bg-blue-500 text-white rounded-lg p-2 mt-4">
          {isSaving ? 'Saving...' : 'Save Team'}
        </button>
      </div>
    );
  };


export default PlayerList
