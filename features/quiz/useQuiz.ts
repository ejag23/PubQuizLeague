import { useCallback, useEffect, useState } from "react";

import { Question } from "@/types/Questions";

import { isCorrectAnswer } from "./quizRules";

const QUESTION_TIME_LIMIT_SECONDS = 15;
const TIME_UP_DELAY_MS = 3000;
const DEFAULT_PLAYER_NAME = "Player";

export function useQuiz(questions: Question[]) {
  const [playerName, setPlayerName] = useState(DEFAULT_PLAYER_NAME);
  const [quizStarted, setQuizStarted] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answerChecked, setAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT_SECONDS);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const questionLocked = answerChecked || isTimeUp;

  const moveToNextQuestion = useCallback(
    (shouldScoreAnswer: boolean) => {
      if (shouldScoreAnswer && isCorrectAnswer(currentQuestion, selectedAnswer)) {
        setScore((prev) => prev + 1);
      }

      setSelectedAnswer("");
      setAnswerChecked(false);
      setIsTimeUp(false);
      setTimeLeft(QUESTION_TIME_LIMIT_SECONDS);

      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setQuizFinished(true);
      }
    },
    [currentQuestion, currentQuestionIndex, questions.length, selectedAnswer]
  );

  useEffect(() => {
    if (!quizStarted || quizFinished || questionLocked) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [questionLocked, quizFinished, quizStarted]);

  useEffect(() => {
    if (!quizStarted || quizFinished || answerChecked || isTimeUp || timeLeft > 0) return;

    setIsTimeUp(true);
  }, [answerChecked, isTimeUp, quizFinished, quizStarted, timeLeft]);

  useEffect(() => {
    if (!isTimeUp || quizFinished) return;

    const nextQuestionTimer = setTimeout(() => {
      moveToNextQuestion(false);
    }, TIME_UP_DELAY_MS);

    return () => clearTimeout(nextQuestionTimer);
  }, [isTimeUp, moveToNextQuestion, quizFinished]);

  function startQuiz() {
    setTimeLeft(QUESTION_TIME_LIMIT_SECONDS);
    setIsTimeUp(false);
    setQuizStarted(true);
  }

  function handleAnswer(answer: string) {
    if (questionLocked) return;

    setSelectedAnswer(answer);
    setAnswerChecked(true);
  }

  function handleNextQuestion() {
    moveToNextQuestion(true);
  }

  function restartQuiz() {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setAnswerChecked(false);
    setScore(0);
    setQuizFinished(false);
    setTimeLeft(QUESTION_TIME_LIMIT_SECONDS);
    setIsTimeUp(false);
  }

  return {
    answerChecked,
    currentQuestion,
    currentQuestionIndex,
    handleAnswer,
    handleNextQuestion,
    isTimeUp,
    playerName,
    questionLocked,
    quizFinished,
    quizStarted,
    restartQuiz,
    score,
    selectedAnswer,
    setPlayerName,
    startQuiz,
    timeLeft,
  };
}
