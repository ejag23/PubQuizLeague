import type { PlayerStatisticsId, UserId } from "./ids";

export type PlayerStatistics = {
  id: PlayerStatisticsId;
  userId: UserId;
  quizzesPlayed: number;
  totalScore: number;
  correctAnswers: number;
  totalQuestionsAnswered: number;
};
