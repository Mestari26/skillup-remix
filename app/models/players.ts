import { Team } from './teams';

export type Player = {
  id: number;
  first_name: string;
  height_feet: null | number;
  height_inches: null | number;
  last_name: string;
  position: string;
  team: Team;
  weight_pounds: number | null;
};
