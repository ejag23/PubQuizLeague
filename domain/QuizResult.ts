import type { LeagueRoundId, QuestionId, QuizId, QuizResultId, UserId } from "./ids";

export type QuizResultAnswer = {
  questionId: QuestionId;
  selectedAnswer: string | null;
  isCorrect: boolean;
};

export type QuizResult = {
  id: QuizResultId;
  userId: UserId;
  quizId: QuizId;
  leagueRoundId?: LeagueRoundId;
  score: number;
  answers: QuizResultAnswer[];
};
