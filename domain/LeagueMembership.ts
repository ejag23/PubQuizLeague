import type { LeagueId, LeagueMembershipId, UserId } from "./ids";

export type LeagueMembership = {
  id: LeagueMembershipId;
  userId: UserId;
  leagueId: LeagueId;
};
