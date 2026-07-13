import type { LeagueId, LeagueRoundId, QuizId } from "./ids";

export type LeagueRound = {
  id: LeagueRoundId;
  leagueId: LeagueId;
  quizId: QuizId;
  roundNumber: number;
};
