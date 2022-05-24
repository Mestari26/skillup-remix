import { Team } from './teams';

export type Game = {
  id: number;
  date: Date;
  home_team: Team;
  visitor_team: Team;
  home_team_score: number;
  visitor_team_score: number;
  stauts: string;
  perios: number;
  postseason: boolean;
  time: string;
  season: number;
};
