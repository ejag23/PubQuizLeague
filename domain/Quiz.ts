import type { QuestionId, QuizId, QuizRulesId } from "./ids";

export type Quiz = {
  id: QuizId;
  quizRulesId: QuizRulesId;
  questionIds: QuestionId[];
};
