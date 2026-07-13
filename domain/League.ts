import type { InstitutionId, LeagueId, LeagueRulesId } from "./ids";

export type LeagueStatus = "notStarted" | "active" | "completed";

export type League = {
  id: LeagueId;
  institutionId: InstitutionId;
  leagueRulesId: LeagueRulesId;
  name: string;
  status: LeagueStatus;
};
