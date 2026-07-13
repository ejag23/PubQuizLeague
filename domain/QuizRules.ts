import type { QuizRulesId } from "./ids";

export type QuizRules = {
  id: QuizRulesId;
  timeLimitSeconds: number;
  pointsPerCorrectAnswer: number;
};
