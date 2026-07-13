import type { QuestionId } from "./ids";

export type Question = {
  id: QuestionId;
  question: string;
  answers: string[];
  correctAnswer: string;
};
