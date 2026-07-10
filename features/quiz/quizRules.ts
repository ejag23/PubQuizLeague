import { Question } from "@/types/Questions";

export function isCorrectAnswer(question: Question, selectedAnswer: string) {
  return selectedAnswer === question.correctAnswer;
}
