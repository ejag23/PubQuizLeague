import type { LeagueId, LeagueResultId, UserId } from "./ids";

export type LeagueResultStanding = {
  userId: UserId;
  rank: number;
};

export type LeagueResult = {
  id: LeagueResultId;
  leagueId: LeagueId;
  standings: LeagueResultStanding[];
};
