import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import AppButton from "@/components/ui/AppButton";
import AppScreen from "@/components/ui/AppScreen";
import { colors, spacing, typography } from "@/constants/design";
import { questions } from "@/data/questions";

import ResultsScreen from "./ResultsScreen";
import { isCorrectAnswer } from "./quizRules";
import { useQuiz } from "./useQuiz";

export default function QuizScreen() {
  const router = useRouter();
  const quiz = useQuiz(questions);

  if (quiz.quizFinished) {
    return (
      <ResultsScreen
        onRestart={quiz.restartQuiz}
        score={quiz.score}
        totalQuestions={questions.length}
      />
    );
  }

  return (
    <AppScreen centered>
      <AppButton
        title="Quit Quiz"
        variant="secondary"
        style={styles.quitButton}
        onPress={() => router.replace("/single-player")}
      />

      <Text style={styles.playerText}>Player: {quiz.playerName}</Text>

      <Text style={styles.questionCount}>
        Question {quiz.currentQuestionIndex + 1} of {questions.length}
      </Text>

      <ProgressBar current={quiz.currentQuestionIndex + 1} total={questions.length} />

      <Text style={styles.timerText}>Time left: {quiz.timeLeft}</Text>

      <QuestionCard
        question={quiz.currentQuestion}
        selectedAnswer={quiz.selectedAnswer}
        onSelectAnswer={quiz.handleAnswer}
        disabled={quiz.questionLocked}
        showCorrectAnswer={quiz.isTimeUp}
      />

      {quiz.isTimeUp && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.timeUpText}>Time's up!</Text>
        </View>
      )}

      {quiz.answerChecked && !quiz.isTimeUp && (
        <View style={styles.feedbackContainer}>
          {isCorrectAnswer(quiz.currentQuestion, quiz.selectedAnswer) ? (
            <Text style={styles.correctText}>✓ Correct!</Text>
          ) : (
            <>
              <Text style={styles.incorrectText}>✗ Incorrect!</Text>

              <Text style={styles.correctAnswerText}>
                Correct Answer: {quiz.currentQuestion.correctAnswer}
              </Text>
            </>
          )}
        </View>
      )}

      {quiz.answerChecked && !quiz.isTimeUp && (
        <AppButton title="Next Question" style={styles.nextButton} onPress={quiz.handleNextQuestion} />
      )}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  quitButton: {
    alignSelf: "flex-start",
    left: spacing.xl,
    position: "absolute",
    top: spacing.xl,
  },

  playerText: {
    color: colors.textSecondary,
    ...typography.meta,
    marginBottom: spacing.md,
  },

  questionCount: {
    color: colors.textMuted,
    ...typography.meta,
    marginBottom: spacing.sm,
  },

  timerText: {
    color: colors.warning,
    ...typography.button,
    marginBottom: spacing.lg,
  },

  feedbackContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  correctText: {
    color: colors.primary,
    ...typography.question,
  },

  incorrectText: {
    color: colors.danger,
    ...typography.question,
  },

  timeUpText: {
    color: colors.warning,
    ...typography.question,
  },

  correctAnswerText: {
    color: colors.text,
    ...typography.body,
    marginTop: spacing.sm,
    textAlign: "center",
  },

  nextButton: {
    marginTop: spacing.md,
  },
});
