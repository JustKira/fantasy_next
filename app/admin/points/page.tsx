"use client";
import React from 'react'
import Button from '@/components/css/button';
import { useGetTeamsQuery } from '@/redux/query/teamsApi';
import { useCreateUpdateTeamMutation } from '@/redux/query/teamsApi';
import PlayerList from './playerList';
const Page = () => {
    const { data: teamsData, isLoading } = useGetTeamsQuery();
    const [createTeam, { isSuccess, isLoading: isSending }] =
    useCreateUpdateTeamMutation();
    if (isLoading) {
        return <>loading</>;
      }
      function createUserTeam() {
  
          //if (userTeam.user_team.user_team_name != "") createTeam({ user_team: {...userTeam.user_team,transfers,overcharge,} });
        }
  return (
    <div>
      
          <Button disabled={isLoading} onClick={() => createUserTeam()}>
            {isSending ? "LOADING" : "SUBMIT"}
          </Button>
          <PlayerList/>
    </div>
  )
}

export default Page
